"use client";
import { React, useState } from "react";
import Image from "next/image";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../../../public/assets/loading.json";
import EditUserModal from "../../../../components/admin/EditUserModal";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useResPayments from "@/hooks/useResPayments";

export default function Payments() {
    const [respayments, refetch, isLoading, isError] = useResPayments();
    const axiosPublic = useAxiosPublic();

    // modal
    const [openModal, setModal] = useState(false);
    const [modalUser, setModalUser] = useState("");

    const [sorting, setSorting] = useState([]);
    const [filter, setFilter] = useState([]);

    const pageNumber = [5, 10, 20, 30, 40, 50];

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("userEmail", {
            cell: (info) => (
                <div className="flex items-center justify-center font-medium">

                    {info.getValue()} {info.row.original.paymentData?.userEmail}
                </div>
            ),
            header: () => (
                <div>
                    <h1>User Email</h1>
                </div>
            ),
        }),

        columnHelper.accessor("userAddress", {
            cell: (info) => (
                <div className="flex items-center justify-center font-medium">

                    {info.getValue()} {info.row.original.paymentData?.userAddress}
                </div>
            ),
            header: () => (
                <div>
                    <h1>Address</h1>
                </div>
            ),
        }),

        columnHelper.accessor("userNumber", {
            cell: (info) => (
                <div className="flex items-center justify-center font-medium">

                    {info.getValue()} {info.row.original.paymentData?.userNumber}
                </div>
            ),
            header: () => (
                <div>
                    <h1>Number</h1>
                </div>
            ),
        }),

        columnHelper.accessor("totalAmount", {
            cell: (info) => <div>${info.getValue()} {info.row.original.paymentData?.totalAmount}</div>,
            header: () => (
                <div>
                    <h1>Amount</h1>
                </div>
            ),
        }),

        columnHelper.accessor("tran_id", {
            cell: (info) => <div>{info.getValue()}</div>,
            header: () => (
                <div>
                    <h1>transaction Id</h1>
                </div>
            ),
        }),
        columnHelper.accessor("status", {
            cell: (info) => <div>{info.getValue()}</div>,
            header: () => (
                <div>
                    <h1>Status</h1>
                </div>
            ),
        }),
        columnHelper.accessor("date", {
            cell: (info) => <div>{info.getValue()}</div>,
            header: () => (
                <div>
                    <h1>Date</h1>
                </div>
            ),
        }),

    ];

    const table = useReactTable({
        data: respayments,
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
        <div className="relative">
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
                <table className="w-full text-center min-h-[700px] ">
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
            {openModal && (
                <EditUserModal
                    closeModal={closeModal}
                    id={modalUser}
                    refetch={refetch}
                />
            )}
        </div>
    )
}
