import Image from "next/image";

const productData = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/images/product/product-02.png",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/images/product/product-03.png",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/images/product/product-04.png",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const Table = ({title, columns, data}) => {
  return (
        
    <div className="relative overflow-x-auto shadow-md">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-4 bg-white">
            <div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                    <span className="sr-only">Action button</span>
                    Action
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44  dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 0" aria-labelledby="dropdownActionButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Reward</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Promote</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Activate account</a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  ">Delete User</a>
                    </div>
                </div>
            </div>
            <label for="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="table-search-users" className="block pt-2 ps-10 text-sm text-gray-900 border py-2 border-b border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for users"/>
            </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2  "/>
                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>

                    {
                      columns.map((column, index) =><th  key={column} scope="col" className="px-6 py-3">
                        {column}
                    </th>)
                    }   
                  
                </tr>
            </thead>
            <tbody>
              {
                data.map((row, index)=> {
                  return(
                    <tr className="bg-white border-b   hover:bg-gray-50 ">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2"/>
                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                                <span className="font-medium text-gray-600">JL</span>
                            </div>
                            <div className="ps-3">
                                <div className="text-base font-semibold">{row.firstName} {row.lastName}</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td className="px-6 py-4">
                            {row.age}
                        </td>
                        <td className="px-6 py-4">
                            {row.town}
                        </td>
                        <td className="px-6 py-4">
                            {row.gender}
                        </td>
                    </tr>
                  )
                
              }
                  
                )
              }
                




               
              
            </tbody>
        </table>
        {/* Edit user modal */}
        <div id="editUserModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <form className="relative bg-white rounded-lg shadow ">
                    {/* Modal header */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Edit user
                        </h3>
                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="editUserModal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                                <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Bonnie" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                                <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." placeholder="Green" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." placeholder="example@company.com" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                                <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." placeholder="e.g. +(12)3456 789" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="department" className="block mb-2 text-sm font-medium text-gray-900 ">Department</label>
                                <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." placeholder="Development" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="company" className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
                                <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." placeholder="123456" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="current-password" className="block mb-2 text-sm font-medium text-gray-900 ">Current Password</label>
                                <input type="password" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." placeholder="••••••••" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="new-password" className="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                                <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2." placeholder="••••••••" required=""/>
                            </div>
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b ">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

  );
};

export default Table;