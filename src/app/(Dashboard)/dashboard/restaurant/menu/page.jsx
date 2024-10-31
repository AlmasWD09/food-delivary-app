"use client"

import useAxiosPublic from "@/hooks/useAxiosPublic";
import useMenus from "@/hooks/useMenus";
import { Icon } from "@iconify/react";
import {createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,} from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import loadingAnimation from "../../../../../../public/assets/loading.json";
import Lottie from "lottie-react";
import { MdCreate } from "react-icons/md";
import AddMenuModal from "@/app/components/AddMenuModal";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const RestaurantMenus = () => {
    const [menuData, refetch, loading] = useMenus()
    const filterMenu = menuData.filter(menu => menu.restaurant === "Spice Paradise")
    const [id,setId] = useState()
    const axiosPub = useAxiosPublic()
    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModal,setDeleteModal] = useState(false)
   const [sorting, setSorting] = useState([]);
   const [filter, setFilter] = useState([]);

   const pageNumber = [5, 10, 20, 30, 40, 50];
   const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // delete menu item
  const { mutateAsync } = useMutation({
    mutationKey: ["deleteMenu"],
    mutationFn: async (id) => {
      const { data } = await axiosPub.delete(`/menus/delete-menu/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.success("You have successfully removed this item.");
      setDeleteModal(false);
      refetch();
    },
  });

  const handleDeleteMenu = (id) => {
    setId(id);
    setDeleteModal(true);
  }

  const confirmDelete = () => {
  mutateAsync(id)
  };

  const cancelDelete = () => {
    setDeleteModal(false);
  };
  // Handle delete end

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("riderId", {
      cell: (info) => (
        <div>{info.getValue() ? `${info.getValue()}` : "N/A"}</div>
      ),
      header: () => <div>Number</div>,
    }),
    columnHelper.accessor("title", {
      cell: (info) => (
        <div className="flex items-center justify-center font-medium">
         
          {info.getValue()} {info.row.original.title}
        </div>
      ),
      header: () => (
        <div>
          <h1>title</h1>
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
    columnHelper.accessor("MRP", {
      cell: (info) => <div>${info.getValue()}</div>,
      header: () => (
        <div>
          <h1>MRP</h1>
        </div>
      ),
    }),
    columnHelper.accessor("price", {
      cell: (info) => <div>${info.getValue()}</div>,
      header: () => (
        <div>
          <h1>price</h1>
        </div>
      ),
    }),

    columnHelper.accessor("id", {
      cell: (info) => (
        <div className="flex items-center justify-center gap-4">
          <button
            
            className="p-2 rounded-full   text-white bg-green-700 text-xl"
          >
          <Icon icon="bxs:edit" />
          </button>

         
          <button onClick={()=>handleDeleteMenu(info.row.original?._id)}  className=" p-2 rounded-full   bg-red-600  text-white  text-xl">
            <Icon icon="fluent:delete-28-filled" />
          </button>
        </div>
      ),
      header: () => <div>action</div>,
    }),
  ];

  const table = useReactTable({
    data: filterMenu,
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

  if (loading) {
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
          
            <div className="flex justify-center lg:justify-start">
                <button onClick={()=>setIsModalOpen(true)} className="px-3 shadow-xl rounded-lg cursor-pointer uppercase mt-5 text-center py-2 bg-primaryLight text-white">Add menu</button>
                
            </div>
            <div className="flex  flex-col lg:flex-row items-center justify-between py-5 gap-5">
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
            {/* add modal */}
            {
                    isModalOpen && <AddMenuModal refetch={refetch} setIsModalOpen={setIsModalOpen}/>
                }
                 {/* delete Modal */}
                {deleteModal && (
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

export default RestaurantMenus;