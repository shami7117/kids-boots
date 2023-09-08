import React, { useState } from 'react';
import Wrapper from '../shared/Wrapper'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsArrowDown } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'

const BottomHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCategoryHover = () => {
        setShowDropdown(true);
    };

    const handleCategoryLeave = () => {
        setShowDropdown(false);
    };
    return (
        <div className='bg-primary-purple-color text-white h-[54px] md:flex hidden'>
            <Wrapper>
                <div className='flex justify-between gap-[40rem] py-4'>
                   <div>
                   <ul className='flex gap-6 items-center cursor-pointer'>
                        <Link href="/">
                            Home
                        </Link>
                   <li
                                onClick={handleCategoryHover}
                                onMouseLeave={handleCategoryLeave}
                            >
                                Categories
                                {showDropdown && (
                                    <div className='flex gap-3 z-10 flex-col absolute bg-white text-black py-4 px-4 rounded-md shadow-md ' 
                                    >
                                        <Link href='/product-listing'>Buy AFO System</Link>
                                        <Link href='/product-listing'>Buy Abduction Bar</Link>
                                       
                                    </div>
                                )}
                            </li>
                        <Link href="/product-listing">
                          Buy New Products
                        </Link>
                       
                       
                    </ul>
                   </div>
                    <div className='hidden gap-3 items-center cursor-pointer xl:flex'>

                        <HiOutlineLocationMarker size={21} />
                        <p>
                            United States, New York
                        </p>
                        <MdKeyboardArrowDown size={21} />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default BottomHeader