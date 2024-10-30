"use client"

import Image from "next/image";
import useAllRiders from "@/hooks/useAllRiders";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../../../public/assets/loading.json";
import {createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,} from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { useState } from "react";
import EditUserModal from "@/app/components/admin/EditUserModal";
import { MdDone } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";


const Users = () => {
 
  const [riders,refetch,isLoading] = useAllRiders()
  const [id,setId] = useState()
  const axiosPub = useAxiosPublic()
  // modal
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState([]);

  const pageNumber = [5, 10, 20, 30, 40, 50];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

   // Handle delete st
  
   // delivery man delete mutation
  const { mutateAsync } = useMutation({
    mutationKey: ["deliverMan"],
    mutationFn: async (id) => {
      const { data } = await axiosPub.delete(`/delivery-man/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.success("You have successfully removed this rider.");
      setIsModalOpen(false);
      refetch();
    },
  });

   const handleDelete = (id) => {
    setId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    mutateAsync(id);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };
  // Handle delete end

  // handle accept rider st
   const {mutateAsync:updateStatus} = useMutation({
    mutationKey : ['deliveryBoy'],
    mutationFn : async(upData)=>{
    const {data} = await axiosPub.patch("/delivery-man/status",upData)
    return data
    },
    onSuccess: () => {
      toast.success("This rider request is accepted.");
      
      refetch();
    },
   })
  
   const handleStatus = (email) => {
    const upData = {
      email : email
    }
    updateStatus(upData)
   }
 
  // handle accept rider end

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("riderId", {
      cell: (info) => (
        <div>{info.getValue() ? `${info.getValue()}` : "N/A"}</div>
      ),
      header: () => <div>Number</div>,
    }),
    columnHelper.accessor("name", {
      cell: (info) => (
        <div className="flex items-center justify-center font-medium">
         
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
      cell: (info) => 
        <div className="h-8 w-8 rounded-full overflow-hidden">
      {info.row.original.image ? (
        <Image
          className="w-full h-full"
          src={info.row.original.image}
          height={1000}
          width={1000}
          alt={info.row.original.name}
        />
      ) : (
        <Image
          className="w-full h-full"
          src="https://icon-library.com/images/admin-user-icon/admin-user-icon-5.jpg"
          height={1000}
          width={1000}
          alt={info.row.original.name}
        />
      )}
    </div>,
      header: () => (
        <div>
          <h1>image</h1>
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

    columnHelper.accessor("number", {
      cell: (info) => <div>{info.getValue()}</div>,
      header: () => (
        <div>
          <h1>phone</h1>
        </div>
      ),
    }),

  

   
    columnHelper.accessor("status", {
      cell: (info) => (
        <div
          className={`p-2 rounded-full  w-full font-semibold text-sm ${
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
    columnHelper.accessor("id", {
      cell: (info) => (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              handleStatus(info.row.original?.email)
            }}
            className="p-2 rounded-full   text-white bg-green-700 text-xl"
          >
           <MdDone/>
          </button>

         
          <button onClick={()=>handleDelete(info.row.original?._id)} className=" p-2 rounded-full   bg-red-600  text-white  text-xl">
            <Icon icon="fluent:delete-28-filled" />
          </button>
        </div>
      ),
      header: () => <div>action</div>,
    }),
  ];

  const table = useReactTable({
    data: riders,
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
  const closeModal = () => setModal(false);
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row items-center justify-between py-5 gap-5">
        <form action="" className=" relative flex items-center justify-end ">
          <input
            value={filter ?? ""}
            onChange={(e) => setFilter(e.target.value)}
            placeholder=" type here.."
            type="text"
            className="px-4 py-2 outline-primaryLight rounded-xl  border-2  "
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
       {/* Modal */}
      {isModalOpen && (
        <div className="fixed px-5 lg:px-0 z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <h2 className="text-lg font-semibold">Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white rounded px-4 py-2"
              >
                Confirm
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 rounded px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
