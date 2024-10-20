"use client";
import { React, useState } from "react";
import Image from "next/image";
import UsersData from "./users.json";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import moment from "moment";
import useAllUser from "@/hooks/useAllUser";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../../../public/assets/loading.json";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("userId", {
    cell: (info) => <div>{info.getValue() ? `${info.getValue()}` : "N/A"}</div>,
    header: () => <div>user</div>,
  }),
  columnHelper.accessor("firstName", {
    cell: (info) => (
      <div className="flex items-center justify-start gap-4 font-medium">
        <div className="h-8 w-8 rounded-full overflow-hidden">
          {info.row.original.image ? (
            <Image
              className="w-full h-full"
              src={info.row.original.image}
              height={1000}
              width={1000}
              alt={info.row.original.firstName}
            />
          ) : (
            <Image
              className="w-full h-full"
              src="https://icon-library.com/images/admin-user-icon/admin-user-icon-5.jpg"
              height={1000}
              width={1000}
              alt={info.row.original.firstName}
            />
          )}

          <Image
            className="w-full h-full"
            src={info.row.original.image}
            height={1000}
            width={1000}
            alt={info.row.original.firstName}
          />
        </div>
        {info.getValue()} {info.row.original.lastName}
      </div>
    ),
    header: () => (
      <div>
        <h1>name</h1>
      </div>
    ),
  }),

  columnHelper.accessor("email", {
    cell: (info) => <div>{info.getValue()}</div>,
    header: () => (
      <div>
        <h1>email</h1>
      </div>
    ),
  }),

  columnHelper.accessor("phoneNumber", {
    cell: (info) => <div>{info.getValue()}</div>,
    header: () => (
      <div>
        <h1>phone</h1>
      </div>
    ),
  }),

  columnHelper.accessor("role", {
    cell: (info) => (
      <div className="flex justify-center items-center">
        <div
          className={`p-2 rounded-full capitalize w-full font-semibold text-sm ${
            info.getValue() == "admin"
              ? "bg-red-100 text-red-600"
              : info.getValue() == "rider"
              ? "bg-orange-100 text-orange-600"
              : info.getValue() == "restaurant"
              ? "bg-blue-100 text-blue-600"
              : "bg-green-100 text-green-600"
          } `}
        >
          {info.getValue()}
        </div>
      </div>
    ),
    header: () => (
      <div>
        <h1>role</h1>
      </div>
    ),
  }),

  columnHelper.accessor("created", {
    cell: (info) => (
      <div>
        {info.getValue()
          ? new Date(info.getValue()).toLocaleDateString("en-IN")
          : "N/A"}
        {}
      </div>
    ),
    header: () => <div>created</div>,
  }),
  columnHelper.accessor("status", {
    cell: (info) => (
      <div
        className={`p-2 rounded-full capitalize w-full font-semibold text-sm ${
          info.getValue() == "active"
            ? "bg-green-100 text-green-600"
            : info.getValue() == "suspend"
            ? "bg-orange-100 text-orange-600"
            : info.getValue() == "block"
            ? "bg-red-100 text-red-600"
            : ""
        } `}
      >
        {info.getValue() ? info.getValue() : "N/A"}
      </div>
    ),
    header: () => <div>status</div>,
  }),
  columnHelper.accessor("action", {
    cell: (info) => (
      <div className="flex items-center justify-center gap-4">
        <button className="p-2 rounded-full   text-white bg-green-700 text-xl">
          <Icon icon="bxs:edit" />
        </button>
        <button className=" p-2 rounded-full     bg-secondary text-white  text-xl">
          <Icon icon="material-symbols:pause-circle" />
        </button>
        <button className=" p-2 rounded-full   bg-red-600  text-white  text-xl">
          <Icon icon="fluent:delete-28-filled" />
        </button>
      </div>
    ),
    header: () => <div>action</div>,
  }),
];

const Users = () => {
  // const [user, refetch, isLoading, isError] = useAllUser();
  const axiosPublic = useAxiosPublic();

  const {
    data: user = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users-data"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "https://food-delivary-app-server.vercel.app/users"
      );
      return res.data;
    },
  });

  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState([]);

  const pageNumber = [5, 10, 20, 30, 40, 50];

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: user,
    columns,
    state: {
      sorting,
      pagination,
      globalFilter: filter,
    },

    initialState: {
      pagination: {
        pageSize: 10,
      },
    },

    getCoreRowModel: getCoreRowModel(),

    // for sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    // pagination
    onPaginationChange: setPagination,

    // filter
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setFilter,
  });

  if (isLoading) {
    return (
      <div className="h-screen  flex justify-center items-center">
        <Lottie
          className="w-1/4"
          animationData={loadingAnimation}
          loop={true}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-5 gap-5">
        <form action="" className=" relative flex items-center justify-end ">
          <input
            value={filter ?? ""}
            onChange={(e) => setFilter(e.target.value)}
            placeholder=" type here.."
            type="text"
            className="px-4 py-2 outline-none rounded-xl focus:ring-2 border-2  "
          />
          <button type="submit" className=" absolute  pr-4">
            <Icon className="text-2xl" icon="mingcute:search-line" />
          </button>
        </form>

        <div className="flex items-center gap-2">
          <p>Show</p>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border-2 border-slate-300 outline-none p-1 rounded-xl "
          >
            {pageNumber.map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <p>entries</p>
        </div>
      </div>
      <div className="overflow-auto  bg-white divide-y-2 rounded-t-3xl w-full ">
        <table className="w-full text-center ">
          <thead>
            {table.getHeaderGroups().map((headerGroups) => (
              <tr key={headerGroups.id}>
                {headerGroups.headers.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                    className=" py-4  capitalize text-sm  bg-primary text-white "
                  >
                    <div className="flex items-center  justify-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        {
                          asc: (
                            <Icon className="text-lg" icon="tabler:arrow-up" />
                          ),
                          desc: (
                            <Icon
                              className="text-lg"
                              icon="tabler:arrow-down"
                            />
                          ),
                        }[header.column.getIsSorted()]
                      }
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y-2  ">
            {table
              .getRowModel()
              .rows.slice(
                pagination.pageIndex * pagination.pageSize,
                (pagination.pageIndex + 1) * pagination.pageSize
              )

              .map((row) => (
                <tr key={row.id} className="hover:bg-primary/10 bg-white">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-3  text-center  ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {/* pagination footer  */}
      </div>
      <div className=" w-full">
        <div className="flex items-center justify-center gap-2 py-2 bg-primary/30 w-full  rounded-b-3xl">
          {/* left side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="p-2 hover:bg-primary/20 rounded-xl disabled:opacity-10"
            >
              <Icon className="text-3xl" icon="iconamoon:arrow-left-2" />
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="p-2 hover:bg-primary/20 rounded-xl disabled:opacity-10"
            >
              <Icon
                className="text-3xl"
                icon="fluent:arrow-circle-left-12-regular"
              />
            </button>
          </div>

          {/* center */}
          <div>
            <p>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </p>
          </div>

          {/* right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="p-2 hover:bg-primary/20 rounded-xl disabled:opacity-10"
            >
              <Icon
                className="text-3xl"
                icon="fluent:arrow-circle-right-12-regular"
              />
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className="p-2 hover:bg-primary/20 rounded-xl disabled:opacity-10"
            >
              <Icon className="text-3xl" icon="iconamoon:arrow-right-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
