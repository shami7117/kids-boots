import React, { useState } from 'react';
import Wrapper from '../shared/Wrapper'
import { IoBagAdd } from 'react-icons/io5'
import { BsBoxFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import AddedProducts from './AddedProducts';
import SoldItems from './SoldItems';
import ProfilePage from './ProfilePage';

const Topbar = () => {
    const [activeItem, setActiveItem] = useState("window1");

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };
    return (
        <div>
            <Wrapper>
                <div className="bg-[#1A9CDA0D] h-[40px]  items-center w-full  py-8 px-3 rounded-md text-black flex md:hidden">
                    <div className="flex justify-center mx-3">
                        <ul className=" flex items-center">
                            <button
                                className={`flex px-7 text-[18px] font-[500]   rounded-md h-12 py-3  ${activeItem === "window1" ? 'activeBar' : ''}`}
                                onClick={() => setActiveItem("window1")}
                            >
                                <IoBagAdd size={20} className='' />
                                <span className='md:flex hidden'>Added Products</span>
                            </button>
                            <button
                                className={`flex px-7 text-[18px] font-[500]   rounded-md h-12 py-3 ${activeItem === "window2" ? 'activeBar' : ''}`}
                                onClick={() => setActiveItem("window2")}
                            >
                                <BsBoxFill size={20} />
                                <span className='md:flex hidden'>Sold Items</span>
                            </button>
                            <button
                                className={`flex px-7 text-[18px] font-[500]   rounded-md h-12 py-3 ${activeItem === "window3" ? 'activeBar' : ''}`}
                                onClick={() => setActiveItem("window3")}
                            >
                                <FaUser size={20} />
                                <span className='md:flex hidden'>Profile Page</span>
                            </button>
                        </ul>
                    </div>

                </div>
            </Wrapper>
            <div className='md:w-full md:hidden block'>
                {activeItem === "window1" && <AddedProducts />}
                {activeItem === "window2" && <SoldItems />}
                {activeItem === "window3" && <ProfilePage />}
            </div>
        </div>
    )
}

export default Topbar