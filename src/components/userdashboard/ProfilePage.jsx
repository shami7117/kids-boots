"use client";
import Head from "next/head";
import Image from "next/image";
// import { toast } from "react-toastify";

// import { useState, useEffect } from "react";
const ProfilePage = () => {
  // const [showProductModal, setShowProductModal] = useState(false);
  // const [formattedDateTime, setFormattedDateTime] = useState("");
  // useEffect(() => {
  //   const currentDateAndTime = new Date();
  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true
  //   };
  //   const newFormattedDateTime = currentDateAndTime.toLocaleString("en-US", options);
  //   setFormattedDateTime(newFormattedDateTime.replace(" at", ""));
  // }, []);

  const admin = {
    name: "James William",
    first: "James",
    last: "Williams",
    email: "james@email.com",
    phone: "1234567",
    country: "USA",
    city: "New York",
    password: "abcd123",
    address: "333 St Paun, New York , USA",
  };

  // const [formData, setFormData] = useState({
  //   firstName: admin.first,
  //   lastName: admin.last,
  //   email: admin.email,
  //   phone: admin.phone,
  //   country: admin.country,
  //   city: admin.city,
  //   password: admin.password,
  //   address: admin.address,
  // });

  // const [isFormEdited, setIsFormEdited] = useState(false);
  // Handle input change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   setIsFormEdited(true);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!isFormEdited) {
  //     toast.success("Information is up to date!", {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     return;
  //   }

  //   admin.first = formData.firstName;
  //   admin.last = formData.lastName;
  //   admin.email = formData.email;
  //   admin.phone = formData.phone;
  //   admin.country = formData.country;
  //   admin.city = formData.city;
  //   admin.password = formData.password;
  //   admin.address = formData.address;

  //   setFormData({
  //     firstName: admin.first,
  //     lastName: admin.last,
  //     email: admin.email,
  //     phone: admin.phone,
  //     country: admin.country,
  //     city: admin.city,
  //     password: admin.password,
  //     address: admin.address,
  //   });
  // };

  return (
    <div className="max-w-[890px] overflow-hidden">
      <div className="flex flex-col md:flex-row ">
        <div className=" w-[325px] mx-auto md:mx-0  md:w-80 flex md:flex-col flex-wrap order-last  rounded-md  ">
          <div className="flex flex-col flex-grow  items-center bg-[#FFFFFF] shadow-md border rounded-md px-3 py-5 md:h-[280px] md:w-[260px] ">
            <div className="flex items-center justify-center mt-1">
              <div className="w-30 h-28 rounded-full  overflow-hidden">
                <Image
                  src="/images/userrrr.png"
                  width={400}
                  height={400}
                  alt="Admin Image"
                  className="w-[100px] h-[100px]"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain', // You can use other values like 'cover', 'contain', etc.
                  }}
                />
              </div>
            </div>

            <h1 className="font-semibold mt-4 text-[18px]">James williams</h1>
            <h1 className="font-normal mt-1 text-[#777777]">Businessmen</h1>
            <div className="flex gap-2">
              <Image
                src={"/images/location.svg"}
                width={10}
                height={10}
                alt="dd"
              ></Image>
              <h1 className="font-normal mt-1 text-[#1A9CDA]">New, York USA</h1>
            </div>
            <div className="mt-8 w-full flex flex-col gap-5">
              <button className="w-full bg-[#1A9CDA] text-white py-2 rounded-[5px] text-[16px] font-[500]">
                Log Out
              </button>
              <button className="w-full border py-2 rounded-[5px] text-[16px] font-[500]">
                Delete Account
              </button>
            </div>
          </div>
          <div className="w-full flex flex-grow flex-1 flex-wrap mt-5 md:mt-0">
            <div className="bg-[#FFFFFF] flex flex-col md:h-[150px]  border justify-around  shadow-md md:w-[260px] rounded-lg py-3 px-5 sm:ml-3   md:ml-0 md:my-3 w-full   h-full overflow-hidden">
              <div className="flex items-start my-2 ">
                <div className="relative w-5 h-5 mr-3">
                  <Image
                    src="/images/email.svg" // Replace with the path to your email icon image
                    layout="fill"
                    objectFit="contain"
                    alt="Email Icon"
                  />
                </div>
                <p className="md:text-[14px] text-[12px] font-[400]">admin@example.com</p>
              </div>
              <div className="flex items-center my-2">
                <div className=" relative w-5 h-5 mr-3">
                  <Image
                    src="/images/phone.svg" // Replace with the path to your phone icon image
                    layout="fill"
                    objectFit="contain"
                    alt="Phone Icon"
                  />
                </div>
                <p className="md:text-[14px] text-[12px] font-[400]">+1 123-456-7890</p>
              </div>
              <div className="flex items-center my-2">
                <div className="relative w-5 h-5 mr-3">
                  <Image
                    src="/images/address.svg" // Replace with the path to your location icon image
                    layout="fill"
                    objectFit="contain"
                    alt="Location Icon"
                  />
                </div>
                <p className="md:text-[14px] text-[12px] font-[400]">
                  123 Main Street, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[325px] mt-5 md:mt-0 md:w-full md:flex-row flex flex-col ">
          <div className="w-[325px] md:w-full   px-6 ">
            <form className="">
              <div className=" xl:flex xl:justify-between">
                <div>
                  <label className="block mb-3">
                    <span className="text-[16px] font-[500] text-[#000000]">
                      First Name*
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="block    w-[280px]   my-3       md:w-[281px]  xl:mb-0 rounded-md p-2 bg-[#B4C7ED0D] border-[#1A9CDA26]  border-2"
                      placeholder="John"
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-3">
                    <span className="text-[16px] font-[500] text-[#000000]">
                      Last Name*
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="block    w-[280px]      my-3    md:w-[281px]  xl:mb-0 rounded-md p-2 bg-[#B4C7ED0D] border-[#1A9CDA26]  border-2"
                      placeholder="Doe"
                    />
                  </label>
                </div>
              </div>
              <div className=" xl:flex xl:justify-between">
                <div>
                  <label className="block mb-3">
                    <span className="text-[16px] font-[500] text-[#000000]">
                      Email Address*
                    </span>
                    <input
                      type="email"
                      name="name"
                      className="block    w-[280px]    my-3      md:w-[281px]  xl:mb-0 rounded-md p-2 bg-[#B4C7ED0D] border-[#1A9CDA26]  border-2"
                      placeholder="John57@gmail.com"
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-3">
                    <span className="text-[16px] font-[500] text-[#000000]">
                      Phone Number*
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="block    text-[#777777]   w-[280px]      mt-3 md:w-[281px]  xl:mb-0 rounded-md p-2 bg-[#B4C7ED0D] border-[#1A9CDA26]  border-2"
                      placeholder="+91 4555555 33"
                    />
                  </label>
                </div>
              </div>

              <div></div>
              <div className=" ">
                <label
                  htmlFor="country"
                  className="text-[16px] font-[500] my-3"
                >
                  Country
                </label>
                <select
                  id="city"
                  name="city"
                  // value={formData.city}
                  // onChange={handleChange}
                  className="md:w-full text-[#777777] w-[280px] my-3 py-2 px-3 bg-[#B4C7ED0D] border-[#1A9CDA26]  border-2 rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                >
                  <option value="">Select Country</option>
                  <option value="New York">abc</option>
                  {/* Add more city options as needed */}
                </select>
              </div>
              <div className="md:w-full flex flex-col">
                <label
                  for=""
                  className="text-[16px] font-[500] text-[#000000] "
                >
                  Address*
                </label>
                <input
                  id=""
                  name=""
                  rows="4"
                  placeholder="Write your complete address here"
                  cols="50"
                  className="bg-[#B4C7ED0D] pb-20 h-[123px] text-[#777777] md:w-full w-[280px] mt-3 border-[#1A9CDA26] focus:outline-none focus:border-blue-500 hover:border-blue-300 border-2 rounded-md p-3"
                />
              </div>
              <div className="flex md:justify-between my-3 flex-col md:flex-row ">
                <div>
                  <label className="block mb-3">
                    <span className="text-[16px] font-[500] text-black">
                      Town/City*
                    </span>

                    <select
                      name="product"
                      required
                      className="
            block
            md:w-[281px]
            w-[280px]
            xl:mb-0
            mt-3
             p-2  bg-[#B4C7ED0D] text-[#777777] border-[#1A9CDA26] border-2
            rounded-md"
                    >
                      <option value="cake">New York</option>
                      <option value="cat">France</option>
                      <option value="meme">saas</option>
                      <option value="zoom">sasa</option>
                    </select>
                  </label>
                </div>
                <div className="md:mt-0 mt-3">
                  <label className="block mb-3">
                    <span className="text-[16px] font-[500] text-black">
                      Zip/Postal Code*
                    </span>

                    <select
                      name="product"
                      required
                      className=" text-[#777777]
            block
         md:w-[281px]
         w-[280px]
            xl:mb-0
            mt-3
             p-2  bg-[#B4C7ED0D] border-[#1A9CDA26] border-2
            rounded-md"
                    >
                      <option value="cake">09</option>
                      <option value="cat">10</option>
                      <option value="meme">11</option>
                      <option value="zoom">12</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="flex mt-6  items-center gap-2 md:gap-5 mb-5">
                <button className="font-[500] text-[14px] md:text-base px-4 py-3 md:px-6 rounded transition duration-300 hover:bg-red-600 hover:text-white ">
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" bg-primary-pink-color px-4 text-[14px] md:text-base  text-white py-3 md:px-4 rounded transition duration-300 hover:bg-primary-pink-color/90"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
