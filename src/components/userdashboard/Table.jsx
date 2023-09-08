
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Table = () => {
    const data = [
        {
            id: 1,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 2,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 3,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 4,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 5,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 6,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id:7,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 8,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 9,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 10,
            checkbox: true,
            number: "PK09887",
            date: "12/09/2023",
            divContent: "AFO Standard ",
            fullName: "John Doe",
            role: "07",
            phone: "$120.00",
            status: "Delivered",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
    ];
    const [isDropdownOpen, setIsDropdownOpen] = useState(Array(data.length).fill(false));
    const toggleDropdown = (rowIndex) => {
        const updatedDropdownState = [...isDropdownOpen];
        updatedDropdownState[rowIndex] = !updatedDropdownState[rowIndex];
        setIsDropdownOpen(updatedDropdownState);
    };


    return (
        <div className="p-5 mt-5 md:mt-0 w-[330px]  bg-white md:w-full  shadow-lg overflow-scroll md:overflow-hidden">
            <table className="table-auto bg-white mt-5 w-full border-collapse ">
                <thead className="bg-[#1A9CDA0D]">
                    <tr className="px-4 py-4 h-10  text-start rounded-md">

                        <th className="font-[500] text-[#777777] text-[14px]">
                            ORDER ID
                        </th>
                        <th className="font-[500] text-[#777777] text-[14px]">
                            ORDER DATE
                        </th>
                        <th className="font-[500] text-[#777777] text-[14px]">
                            PRODUCT
                        </th>
                        <th className="font-[500] text-[#777777] text-[14px]">
                            CUSTOMER
                        </th>
                        <th className="font-[500] text-[#777777] text-[14px]">
                            SIZE
                        </th>
                        <th className="font-[500] text-[#777777] text-[14px]">
                            PRICE
                        </th>
                        <th className="font-[500] text-[#777777] text-[14px]">
                            STATUS
                        </th>
                        <th className="font-[500] text-[#777777] text-[14px]">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id} className="border-t text-[14px] font-[500]">

                            <td className="px-4  py-4">
                                {row.number}
                            </td>
                            <td className="px-4  py-2 ">{row.date}</td>
                            <td className="px-4 py-4">
                                <div className="flex gap-2">

                                    <h1 className=" mt-[0.4rem] ">
                                        {row.divContent}
                                    </h1>
                                </div>
                            </td>
                            <td className="px-4  py-4">
                                {row.fullName}
                            </td>
                            <td className="px-4  py-4">{row.role}</td>
                            <td className="px-4 py-4">

                                <h1 className=""> {row.phone}</h1>

                            </td>
                            <td className="px-4 py-4">
                                <div
                                    style={{ background: row.prncolor }}
                                    className="pt-1 pb-1 pl-4 pr-3  rounded-lg "
                                >
                                    <h1 className="font-poppins font-normal">{row.status}</h1>
                                </div>
                            </td>
                            <td className="px-10 py-4 relative">
                                <div className="cursor-pointer" onClick={() => toggleDropdown(index)}>
                                    <BsThreeDotsVertical size={20} />
                                </div>
                                {isDropdownOpen[index] && (
                                    <div className="absolute z-10 right-0 mt-2 bg-white  py-3 px-2 rounded-md shadow-lg">
                                        <ul>
                                            <li className="py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer">
                                                Update
                                            </li>
                                            <li className="py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer">
                                                Delete
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    <div className="mx-5 mt-5 flex font-[500] text-[14px] text-[#777777] s justify-between">
                        <p>
                            Showing 1 to 8 of 14 entries
                        </p>
                        <div className="flex items-center gap-5">
                            <button>
                                Previous
                            </button>
                            <button className="bg-[#00ADDF] text-white h-8 w-8 rounded-full">
                                1
                            </button>
                            <button>
                                2
                            </button>
                            <button>
                                Next
                            </button>
                        </div>
                    </div>
        </div>
    );
};

export default Table;
