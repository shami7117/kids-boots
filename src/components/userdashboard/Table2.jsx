// components/DataTable.js
import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Table2 = () => {
    // Sample data for each row (you can replace this with actual data)
    const data = [
        {
            id: 1,
            img: "/images/shoe1.png",
            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "Enable",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 2,
            img: "/images/shoe2.png",

            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "Waiting",
            color: "#7146CC36",
            prncolor: "#7146CC36",
        },
        {
            id: 3,
            img: "/images/shoe3.png",

            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "On Hold",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 4,
            img: "/images/shoe1.png",
            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "Enable",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 5,
            img: "/images/shoe2.png",

            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "Waiting",
            color: "#7146CC36",
            prncolor: "#7146CC36",
        },
        {
            id: 6,
            img: "/images/shoe3.png",

            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "On Hold",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 7,
            img: "/images/shoe1.png",
            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "Enable",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },
        {
            id: 8,
            img: "/images/shoe2.png",

            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "Waiting",
            color: "#7146CC36",
            prncolor: "#7146CC36",
        },
        {
            id: 9,
            img: "/images/shoe3.png",

            checkbox: true,
            number: "ClubFoot",
            date: "ClubFoot",
            divContent: "AFO Standard ",
            fullName: "07",
            role: "1",
            phone: "PRICE",
            status: "On Hold",
            color: "#46CC6B36",
            prncolor: "#46CC6B36",
        },


        // Add more rows here if needed
    ];
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(Array(data.length).fill(false));

    const handleSelectAll = () => {
        setSelectAll(!selectAll);

        if (!selectAll) {
            setSelectedRows(data.map((row) => row.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleRowSelect = (rowId) => {
        if (selectedRows.includes(rowId)) {
            setSelectedRows(selectedRows.filter((id) => id !== rowId));
        } else {
            setSelectedRows([...selectedRows, rowId]);
        }
    };
    const toggleDropdown = (rowIndex) => {
        const updatedDropdownState = [...isDropdownOpen];
        updatedDropdownState[rowIndex] = !updatedDropdownState[rowIndex];
        setIsDropdownOpen(updatedDropdownState);
    };


    return (
        <div className=" p-5 mt-5 md:mt-0 bg-white  w-full shadow-lg overflow-scroll md:overflow-hidden ">
            <table className="table overflow-scroll md:overflow-hidden  mt-5 w-full border-collapse ">
                <thead className="bg-[#1A9CDA0D] ">
                    <tr>
                        <th className="px-4 py-4 h-10  text-start rounded-md">
                            {" "}
                            <input type="checkbox" className="w-5 h-5" checked={selectAll}
                                onChange={handleSelectAll}
                            />
                        </th>
                        <th className="px-4    font-[500] text-[14px] py-4 h-10 text-start">
                            IMAGE
                        </th>
                        <th className="px-4  font-[500] text-[14px] py-4 h-10 text-start">
                            CATEGORY
                        </th>
                        <th className="px-4  font-[500] text-[14px] py-4 h-10 text-start">
                            PRODUCT
                        </th>
                        <th className="px-4  font-[500] text-[14px] py-4 h-10 text-start">
                            SIZE
                        </th>
                        <th className="px-4  font-[500] text-[14px] py-4 h-10 text-start">
                            QUANTITY
                        </th>
                        <th className="px-4  font-[500] text-[14px] py-4 h-10 text-start">
                            PRICE
                        </th>
                        <th className="px-4  font-[500] text-[14px] py-4 h-10 text-start">
                            STATUS
                        </th>
                        <th className="px-4  font-[500] text-[14px] py-4 h-10 text-start">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id} className="border-t ">
                            <td className="px-4 py-4">
                                <input type="checkbox" className="w-5 h-5" checked={selectedRows.includes(row.id)}
                                    onChange={() => handleRowSelect(row.id)} />
                            </td>
                            <td>
                                <Image
                                    src={row.img}
                                    height={200}
                                    width={200}
                                    alt="phone"
                                    className="w-[40px] h-[40px]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        objectFit: 'contain', // You can use other values like 'cover', 'contain', etc.
                                    }}
                                />
                            </td>
                            <td className="px-2  text-[14px] font-[500] py-2">{row.date}</td>
                            <td className="px-2 py-4">
                                <div className="">

                                    <h1 className="text-[14px] font-[500]">
                                        {row.divContent}
                                    </h1>
                                </div>
                            </td>
                            <td className="px-5 text-[14px] font-[500] py-4">
                                {row.fullName}
                            </td>
                            <td className="px-10 text-[14px] font-[500] py-4">{row.role}</td>
                            <td className="px-4 py-4">

                                <h1 className=""> {row.phone}</h1>

                            </td>
                            <td className="px-4 py-4">
                                <div
                                    style={{ background: row.prncolor }}
                                    className="pt-1 pb-1 pl-4 pr-3  rounded-lg "
                                >
                                    <h1 className="font-poppins font-normal ">{row.status}</h1>
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

export default Table2;
