"use client"; // Ensure the component runs on the client

import { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import "./voiceSearch.css"; // Ensure the CSS is properly loaded
import { Icon } from "@iconify/react";

const VoiceSearch = ({ search, setSearch }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null); // Store recognition in state

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this runs only on the client
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setSearch(transcript);
        };

        recognitionInstance.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognitionInstance.onend = () => {
          setIsListening(false);
        };

        setRecognition(recognitionInstance); // Set the recognition instance in state
      } else {
        console.warn("Speech Recognition API not supported in this browser.");
      }
    }
  }, [setSearch]); // Run this effect once

  const handleListen = () => {
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div className="relative w-full lg:w-3/4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="What's your address?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`p-3 pl-10 pr-16 text-black  bg-white w-full outline-none ${
            search ? "rounded-t-2xl border-b-2" : "rounded-full"
          }`}
        />
        <button
          onClick={handleListen}
          className={`absolute top-1/2 transform -translate-y-1/2 right-3 text-black px-4 py-2 
            `}
        >
          <div className=" flex items-center justify-center absolute -top-1 left-0 ">
            <Icon className="text-2xl" icon="ic:baseline-mic" />
            {isListening && (
              <span className="bg-primary -z-10 top-0 left-0 h-full w-full  animate-ping absolute rounded-full "></span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default VoiceSearch;
