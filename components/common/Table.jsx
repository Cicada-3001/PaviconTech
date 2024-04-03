import { deleteCustomer } from "@/app/libs/customer";
import { useState } from "react";
import toast from 'react-hot-toast';





const TableRow = ({ row, onToggleMenu, isActive }) => {
  
  async function deleteRecord(id) {
    console.log(id);
    try {
      const response = await deleteCustomer(id);
      if (response.status === 200) {
        toast.success("Customer Deleted Successfully");
        window.location.reload();
      } else {
        setError("Error deleting customer");
        toast.error("Error creating customer");
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops something went wrong. Try again !");
    }
  }

  async function editRecord(id) {}

  return(
    <tr className="bg-white border-b   hover:bg-gray-50 ">
    <td className="w-4 p-4">
      <div className="flex items-center">
        <input
          id="checkbox-table-search-1"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2"
        />
        <label htmlFor="checkbox-table-search-1" className="sr-only">
          checkbox
        </label>
      </div>
    </td>
    <th
      scope="row"
      className="flex items-center px-6 py-4 capitalize text-grey-800  whitespace-nowrap "
    >
      <div className="relative border bg-grey-900 inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
        <span className="font-medium text-gray-600 uppercase">
          {row.firstName.charAt(0)} {row.lastName.charAt(0)}
        </span>
      </div>
      <div className="ps-3">
        <div className="text-base font-semibold">{row.firstName}</div>
      </div>
    </th>
    <td className="px-6 py-4 capitalize text-grey-800">{row.lastName}</td>
    <td className="px-6 py-4 capitalize text-grey-800">{row.age}</td>
    <td className="px-6 py-4 capitalize text-grey-800">{row.town}</td>
    <td className="px-6 py-4 capitalize text-grey-800">{row.gender}</td>
    <td className="px-6 py-4 capitalize text-grey-800 relative">
      <span onClick={() => onToggleMenu(row.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </span>

      {isActive && (
        <div
          id="dropdown"
          className="z-50 absolute top-10 -left-30 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-34 "
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            <li onClick={() => editRecord(row.id)} className="pointer">
              <span  className="block px-4 py-2 hover:bg-green-100">
                Edit
              </span>
            </li>
            <li onClick={() => deleteRecord(row.id)} className="pointer">
              <span className="block px-4 py-2 hover:bg-red-100">
                Delete
              </span>
            </li>
          </ul>
        </div>
      )}
    </td>
  </tr>

  )
  
  
      };

const Table = ({ title, columns, data }) => {
  // State to keep track of the active row's ID
  const [activeRowId, setActiveRowId] = useState(null);

  const toggleMenu = (id) => {
    // If the clicked row's menu is already active, deactivate it, otherwise activate it
    setActiveRowId((prevId) => (prevId === id ? null : id));
  };


  return (
    <div className="relative overflow-x-auto shadow-md">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-white">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 "
            type="button"
          >
            <span className="sr-only">Action button</span>
            Action
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
         
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block pt-2 ps-10 text-sm text-gray-900 border py-2 border-b border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for users"
          />
        </div>
      </div>
      <div className="scroll-container no-scrollbar">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 no-scrollbar">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2  "
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>

              {columns.map((column, index) => (
                <th key={column} scope="col" className="px-6 py-3 text-black">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <TableRow 
                  key={row.id}
                  row={row}
                  onToggleMenu={toggleMenu}
                  isActive={activeRowId === row.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
