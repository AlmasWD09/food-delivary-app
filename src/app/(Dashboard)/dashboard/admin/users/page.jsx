"use client";
import { React, useState } from "react";
import ComingSoon from "../../../../../../public/comingsoon.svg";
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
import useMenus from "@/hooks/useMenus";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const columnHelper = createColumnHelper();

const columns = [
  // columnHelper.accessor("image", {
  //   cell: (info) => (
  //     <div className="h-10 w-10 rounded-full overflow-hidden">
  //       <Image
  //         className="w-full h-full"
  //         src={info.getValue()}
  //         height={1000}
  //         width={1000}
  //         alt={info.row.original.firstName}
  //       />
  //     </div>
  //   ),
  //   header: () => (
  //     <div>
  //       <h1>Image</h1>
  //     </div>
  //   ),
  // }),

  columnHelper.accessor("firstName", {
    cell: (info) => (
      <div className="flex items-center justify-start gap-2 ">
        <div className="h-10 w-10 rounded-full overflow-hidden">
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
        <h1>NAME</h1>
      </div>
    ),
  }),

  columnHelper.accessor("email", {
    cell: (info) => <div>{info.getValue()}</div>,
    header: () => (
      <div>
        <h1>EMAIL</h1>
      </div>
    ),
  }),

  columnHelper.accessor("phoneNumber", {
    cell: (info) => <div>{info.getValue()}</div>,
    header: () => (
      <div>
        <h1>PHONE</h1>
      </div>
    ),
  }),

  columnHelper.accessor("role", {
    cell: (info) => (
      <div className="flex justify-center items-center">
        <div
          className={`p-2 rounded-full capitalize w-fit  ${
            info.getValue() == "admin"
              ? "bg-red-100 text-red-700"
              : info.getValue() == "rider"
              ? "bg-orange-100 text-orange-700"
              : info.getValue() == "restaurant"
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
          } `}
        >
          {info.getValue()}
        </div>
      </div>
    ),
    header: () => (
      <div>
        <h1>ROLE</h1>
      </div>
    ),
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
        <button className=" p-2 rounded-full   bg-red-500  text-white  text-xl">
          <Icon icon="fluent:delete-28-filled" />
        </button>
      </div>
    ),
    header: () => <div>ACTION</div>,
  }),
];

const Users = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: user = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  console.log(user.length);
  console.log(user);

  // const [user, setUser] = useState([...UsersData]);
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

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-5 gap-5">
        <form action="" className="  border-2 border-secondary w-fit ">
          <input
            value={filter ?? ""}
            onChange={(e) => setFilter(e.target.value)}
            placeholder=" type here.."
            type="text"
            className="p-2 outline-none  focus-within:bg-yellow-100   "
          />
          <button
            type="submit"
            className="p-2 bg-secondary   focus-within:bg-secondary text-white"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-2">
          <p>Show</p>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border-2 border-slate-300 outline-none "
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
      <div className="overflow-auto">
        <table className="w-full text-center  ">
          <thead>
            {table.getHeaderGroups().map((headerGroups) => (
              <tr key={headerGroups.id}>
                {headerGroups.headers.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                    className=" py-4 bg-secondary text-white "
                  >
                    <div className="flex items-center  justify-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        {
                          asc: (
                            <Icon className="text-2xl" icon="tabler:arrow-up" />
                          ),
                          desc: (
                            <Icon
                              className="text-2xl"
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
                <tr key={row.id} className="hover:bg-slate-200/20 bg-white">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-4  text-center text-sm">
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
      </div>

      {/* pagination footer  */}

      <div lassName="border-2">
        <div className="flex items-center justify-center gap-2  border-2 bg-slate-200">
          {/* left side  */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="p-2 hover:bg-slate-300"
            >
              <Icon className="text-3xl" icon="iconamoon:arrow-left-2" />
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="p-2 hover:bg-slate-300"
            >
              <Icon
                className="text-3xl"
                icon="fluent:arrow-circle-left-12-regular"
              />
            </button>
          </div>

          {/* center  */}
          <div>
            <p>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </p>
          </div>

          {/* right  */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="p-2 hover:bg-slate-300"
            >
              <Icon
                className="text-3xl"
                icon="fluent:arrow-circle-right-12-regular"
              />
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className="p-2 hover:bg-slate-300"
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
