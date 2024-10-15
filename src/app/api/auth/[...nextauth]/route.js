import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    rolling: false,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });

        if (!currentUser) {
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }

        // Return the user object including custom fields like firstName, lastName, etc.
        return {
          id: currentUser._id,
          email: currentUser.email,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          phoneNumber: currentUser.phoneNumber,
          role: currentUser.role,
          image: currentUser.image, // if stored in DB
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account }) {
      const { email } = user;
      const db = await connectDB();
      const userCollection = db.collection("users");

      // Check if the user exists in your database
      const userExist = await userCollection.findOne({ email });

      if (!userExist) {
        // If user doesn't exist, create a new user with default values for firstName, lastName, phoneNumber, and role
        await userCollection.insertOne({
          email,
          firstName: user.name || "", // Get firstName from OAuth if available
          lastName: "",
          phoneNumber: "",
          role: "user", // Default role
          image: user.image || "", // Add user image if available
        });
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        // Add custom user fields to the token
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.phoneNumber = user.phoneNumber;
        token.role = user.role;
        token.picture = user.image; // User's profile picture
      }
      return token;
    },
    async session({ session, token }) {
      // Include custom fields in the session object
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.email = token.email;
      session.user.phoneNumber = token.phoneNumber;
      session.user.role = token.role;
      session.user.image = token.picture; // Pass the user's picture
      return session;
    },
  },
});

export { handler as GET, handler as POST };
