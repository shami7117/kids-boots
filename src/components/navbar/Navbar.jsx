import Image from 'next/image'
import React from 'react'
import UpperHeader from './UpperHeader'
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'
import { RiArrowDropDownLine, RiFileSearchLine } from "react-icons/ri";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from "/public/images/logoo.png";
// import Button from "../shared/button/Button";
import { MdKeyboardArrowDown, } from "react-icons/md";
import { BsArrowRight, BsBell, BsCart3, BsDot } from "react-icons/bs";
import { FiSearch } from "react-icons/fi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import BottomHeader from './BottomHeader'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOp, setIsOp] = useState(false);

    const [nav, setNav] = useState(false);
    const [hoverIsOpen, hoverSetIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCategoryHover = () => {
        setShowDropdown(true);
    };

    const handleCategoryLeave = () => {
        setShowDropdown(false);
    };

    const handleNavbar = () => {
        setNav(!nav);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown2 = () => {
        hoverSetIsOpen(!hoverIsOpen);
    };
    const closeMenu = () => {
        setNav(false);
    };
    return (
        <div>
            <UpperHeader />
            <div className='bg-white'>
                <Wrapper>
                    <div className="text-lg flex  justify-between  text-primary-color-text items-center ">
                        {/* left section */}
                        <div className=''>
                            <Link href={"/"}>
                                <Image
                                    src={Logo}
                                    alt="eshop"
                                    width={600}
                                    height={600}
                                    className='w-[194px] h-[77px] ' style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        objectFit: 'contain', // You can use other values like 'cover', 'contain', etc.
                                    }}
                                />
                            </Link>


                        </div>
                        {/* right section */}
                        <div className="lg:flex flex-col hidden">
                            <ul className="flex-col text-[16px] font-medium pb-6 flex md:flex-row space-x-12 items-center mt-6">
                                <div className='flex gap-6 items-center'>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="h-[50px] focus:outline-none  w-[200px] md:w-[440px] bg-[#F4F6F8]  px-5 py-2 rounded-[5px]"
                                            placeholder="Search Product here.."
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.7204 10.1978H10.0429L9.80274 9.96959C10.6723 8.97546 11.1502 7.70629 11.1492 6.39369C11.1492 5.30691 10.8223 4.24453 10.2097 3.3409C9.59719 2.43727 8.72655 1.73297 7.70793 1.31708C6.6893 0.901185 5.56843 0.792367 4.48706 1.00439C3.40569 1.21641 2.41239 1.73975 1.63277 2.50822C0.853145 3.27669 0.322215 4.25579 0.107117 5.32169C-0.107981 6.3876 0.00241539 7.49243 0.424345 8.49649C0.846274 9.50055 1.56079 10.3587 2.47753 10.9625C3.39427 11.5663 4.47206 11.8886 5.57462 11.8886C6.9554 11.8886 8.2247 11.3898 9.2024 10.5614L9.43396 10.7981V11.4659L13.7221 15.6843L15 14.4247L10.7204 10.1978ZM5.57462 10.1978C3.43911 10.1978 1.71527 8.49866 1.71527 6.39369C1.71527 4.28873 3.43911 2.58954 5.57462 2.58954C7.71012 2.58954 9.43396 4.28873 9.43396 6.39369C9.43396 8.49866 7.71012 10.1978 5.57462 10.1978Z" fill="#777777" />
                                            </svg>
                                        </div>
                                    </div>
                                    <button>
                                        <Link href="/product-listing" className='flex items-center gap-3'>
                                            <Image src={'/images/price.png'} alt="" width={300} height={300} className='h-[22px] w-[22px]' style={{
                                                objectFit: 'contain',
                                            }} />
                                            <li className=" ">
                                                Best Offers
                                            </li>
                                        </Link>
                                    </button>


                                    <Link href="/seller-registration" className='flex items-center gap-3'>
                                        <Image src={'/images/sales.png'} alt="" width={300} height={300} className='h-[22px] w-[22px]' style={{
                                            objectFit: 'contain',
                                        }} />
                                        <li className=" ">
                                            Sell on site
                                        </li>
                                    </Link>

                                </div>
                                <div className="flex text-[black] gap-6 cursor-pointer ">
                                    <div className='p-2 rounded-full border border-[#0076AE1F] hover:bg-[#0076AE1F]'>
                                        <BsBell size={21} />
                                        <p className="bg-primary-pink-color h-[10px] w-[10px] border border-white rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.3rem] ml-[0.5rem]">

                                        </p>
                                    </div>
                                    <div>
                                        <Link href={'/profile'}>
                                            <Image src={'/images/men.jpeg'} alt='' width={200} height={200} className='w-[40px] h-[40px] rounded-full' style={{
                                                width: '100%',
                                                maxWidth: '100%',
                                                objectFit: 'contain', // You can use other values like 'cover', 'contain', etc.
                                            }} />
                                        </Link>
                                    </div>
                                    <Link href={'/cart-checkout'} className='p-2 rounded-full border border-[#0076AE1F] hover:bg-[#0076AE1F]'>
                                        <BsCart3 size={21} />
                                        <p className="bg-primary-pink-color h-[10px] w-[10px] border border-white rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.3rem] ml-[0.9rem]">

                                        </p>
                                    </Link>
                                </div>



                            </ul>
                        </div>

                        {/* mobile menu  */}
                        <div
                            onClick={handleNavbar}
                            className=" block lg:hidden  items-center py-5  cursor-pointer z-50"
                        >
                            {nav ? (
                                <RxCross1 size={35} className="text-primary-purple-text fixed top-6 right-7" />
                            ) : (
                                <CgMenuRightAlt size={35} className="text-primary-purple-text " />
                            )}
                        </div>
                        <div
                            className={
                                nav
                                    ? "lg:hidden fixed top-0 right-0 shadow-md  bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-0"
                                    : "lg:hidden fixed top-0 right-0 shadow-md  bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-full"
                            }
                        >

                            <div className="absolute mt-[-3.5rem]">
                                <h3 className="font-black text-lg  text-primary-green-text">
                                    Menu
                                </h3>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <div className="flex flex-col basis-[50%]">
                                    <ul className="flex-col  justify-between text-[16px] font-medium pb-6 flex md:flex-row space-x-12 items-center mt-6">
                                        <div className='flex-col gap-6 '>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="h-[50px]  bg-[#F4F6F8]  px-5 py-2 rounded-[5px]"
                                                    placeholder="Search Product here.."
                                                />
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.7204 10.1978H10.0429L9.80274 9.96959C10.6723 8.97546 11.1502 7.70629 11.1492 6.39369C11.1492 5.30691 10.8223 4.24453 10.2097 3.3409C9.59719 2.43727 8.72655 1.73297 7.70793 1.31708C6.6893 0.901185 5.56843 0.792367 4.48706 1.00439C3.40569 1.21641 2.41239 1.73975 1.63277 2.50822C0.853145 3.27669 0.322215 4.25579 0.107117 5.32169C-0.107981 6.3876 0.00241539 7.49243 0.424345 8.49649C0.846274 9.50055 1.56079 10.3587 2.47753 10.9625C3.39427 11.5663 4.47206 11.8886 5.57462 11.8886C6.9554 11.8886 8.2247 11.3898 9.2024 10.5614L9.43396 10.7981V11.4659L13.7221 15.6843L15 14.4247L10.7204 10.1978ZM5.57462 10.1978C3.43911 10.1978 1.71527 8.49866 1.71527 6.39369C1.71527 4.28873 3.43911 2.58954 5.57462 2.58954C7.71012 2.58954 9.43396 4.28873 9.43396 6.39369C9.43396 8.49866 7.71012 10.1978 5.57462 10.1978Z" fill="#777777" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-3 mt-3'>

                                                <div className='flex flex-col justify-start items-start text-left gap-3'>
                                                    <Link href="/" >
                                                        <li
                                                            onClick={handleCategoryHover}
                                                            onMouseLeave={handleCategoryLeave}
                                                        >
                                                            Categories
                                                            {showDropdown && (
                                                                <div className='flex gap-3 z-10 flex-col absolute bg-white text-black py-4 px-4 rounded-md shadow-md '
                                                                >
                                                                    <Link href='/product-listing' onClick={closeMenu}>Buy AFO System</Link>
                                                                    <Link href='/product-listing' onClick={closeMenu}>Buy Abduction Bar</Link>

                                                                </div>
                                                            )}
                                                        </li>
                                                    </Link>
                                                    <Link href="/" onClick={closeMenu}>
                                                        <li className=" ">
                                                            Home
                                                        </li>
                                                    </Link>
                                                    <Link href="/contact-us" onClick={closeMenu}>
                                                        <li className=" ">
                                                            Contact
                                                        </li>
                                                    </Link>
                                                    <Link href="/product-listing" onClick={closeMenu}>
                                                        <li className=" ">
                                                            Buy New Products                                                    </li>
                                                    </Link>

                                                </div>
                                                <button onClick={closeMenu}>
                                                    <Link href="/product-listing" className='flex items-center gap-3'>
                                                        <Image src={'/images/price.png'} alt="" width={22} height={22} />
                                                        <li className=" ">
                                                            Best Offers
                                                        </li>
                                                    </Link>
                                                </button>

                                                <button onClick={closeMenu}>
                                                    <Link href="/seller-registration" className='flex items-center gap-3'>
                                                        <Image src={'/images/sales.png'} alt="" width={22} height={22} />
                                                        <li className=" ">
                                                            Sell on site
                                                        </li>
                                                    </Link>
                                                </button>
                                            </div>
                                            <div className='flex gap-3 items-center cursor-pointer mt-3'>

                                                <HiOutlineLocationMarker size={21} />
                                                <p>
                                                    United States, New York
                                                </p>
                                                <MdKeyboardArrowDown size={21} />
                                            </div>
                                        </div>
                                        <div className="mt-[7rem] flex text-[black] gap-6 cursor-pointer  ">
                                            <div className='p-2 rounded-full border border-[#0076AE1F] hover:bg-[#0076AE1F]'>
                                                <BsBell size={21} />
                                                <p className="bg-primary-pink-color h-[10px] w-[10px] border border-white rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.3rem] ml-[0.5rem]">

                                                </p>
                                            </div>
                                            <div >
                                                <Link href={'/profile'} onClick={closeMenu}>
                                                    <Image src={'/images/men.jpeg'} alt='' width={200} height={200} className='w-[40px] h-[40px] rounded-full' style={{
                                                        width: '100%',
                                                        maxWidth: '100%',
                                                        objectFit: 'contain', // You can use other values like 'cover', 'contain', etc.
                                                    }} />
                                                </Link>
                                            </div>
                                            <div className='p-2 rounded-full border border-[#0076AE1F] hover:bg-[#0076AE1F]'>
                                                <BsCart3 size={21} />
                                                <p className="bg-primary-pink-color h-[10px] w-[10px] border border-white rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.3rem] ml-[0.9rem]">

                                                </p>
                                            </div>
                                        </div>



                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>


                </Wrapper>
            </div>
            <BottomHeader />
        </div>
    )
}

export default Navbar