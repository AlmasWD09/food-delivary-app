"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import mockData from "./data.json";
import { Icon } from "@iconify/react";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center">ID</span>,
  }),

 columnHelper.accessor("date", {
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center"> date</span>,
  }),
  columnHelper.accessor("amount", {
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center"> amount</span>,
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center"> status</span>,
  }),
  columnHelper.accessor("orderMode", {
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center"> orderMode</span>,
  }),
  columnHelper.accessor("action", {
    cell: (info) => info.getValue(),
    header: () => <span className="flex items-center"> action</span>,
  }),
];

const Orders = () => {
  // data
  const [data, setTable] = useState([...mockData]);

  // sorting state
  const [sorting, setSorting] = useState([]);

  // filter state
  const [globalFilter, setGlobalFilter] = useState([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    // header group data
    getCoreRowModel: getCoreRowModel(),

    onPaginationChange: setPagination,
    // sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    // filter
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setGlobalFilter,
  });

  const pageNumbers = [5, 10, 20, 30, 40, 50, 60];
  return (
    <div className="h-full">
      <h1>Table Design</h1>
      {/* search btn  */}
      <div className=" flex items-center w-full  max-w-2xl   border-2 rounded-2xl  ">
        <input
          type="text"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search food or restaurant"
          className="pl-16 py-3 w-full outline-none rounded-2xl  bg-white  "
        />
        <button
          className="absolute px-6 py-3  -left-2 text-gray-500"
          type="submit"
        >
          {" "}
          <Icon className=" text-3xl" icon="uil:search" />
        </button>
      </div>

      {/* table design  */}
      <div className="flex justify-center">
        <table className="divide-y-2 ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                    className="p-4 "
                  >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y-2">
            {table
              .getRowModel()
              .rows.slice(
                pagination.pageIndex * pagination.pageSize,
                (pagination.pageIndex + 1) * pagination.pageSize
              )
              .map((row) => (
                <tr key={row.id} className="hover:bg-slate-200">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-4">
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

      {/* footer design  */}
      <div>
        <div className="flex items-center gap-2">
          <p className="capitalize text-xl font-semibold">item per page</p>
          <select
            value={table.getState().pagination.pageSize}
            className="p-2 bg-yellow-100"
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {pageNumbers.map((pageSize) => (
              <option value={pageSize} key={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-yellow-100 disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <Icon icon="gg:arrow-left-r" />
          </button>
          <button
            className="p-2 hover:bg-yellow-100 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Icon icon="mdi:arrow-left" />
          </button>

          <span className="flex items-center">
            <input
              min={1}
              max={table.getPageCount()}
              type="number"
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="p-2 bg-yellow-100"
            />

            <span className="ml-1">of {table.getPageCount()}</span>
          </span>
          <button
            className="p-2 hover:bg-yellow-100 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <Icon icon="ph:arrow-right" />
          </button>
          <button
            className="p-2 hover:bg-yellow-100 disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <Icon icon="fluent-emoji-high-contrast:right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
