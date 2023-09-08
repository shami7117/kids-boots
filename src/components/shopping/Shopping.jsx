import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useQuery, useMutation, QueryClient, useQueryClient } from "@tanstack/react-query";
import CartApi from "@/lib/cart";
import FavoriteApi from "@/lib/favorite";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { getAuth } from "firebase/auth";
import ProductApi from '@/lib/product';
import { useRouter } from 'next/router';


import { AiOutlineHeart } from 'react-icons/ai'






const Shopping = ({ cart }) => {
    const router = useRouter();

    const queryClient = useQueryClient();
    const [cartItems, setCartItems] = useState(cart);
    const [quantityInput, setQuantityInput] = useState({}); // State to manage user input for quantity

    console.log("QUANTITY", cartItems)

    const handleQuantityChange = (index, newQuantity) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = newQuantity;
        setCartItems(updatedCart);
    };
    const handleInputChange = (index, newValue) => {
        // Update the user input for quantity in the state
        setQuantityInput(prevInput => ({ ...prevInput, [index]: newValue }));
    };



    const addMutation = useMutation(
        ["FavoriteAdded"],
        async (data) => {
            console.log("MUTATION", data)
            return await FavoriteApi.addFavorite(data);
        },
        {
            onError: (data) => { },
            onSuccess: (data) => {

                queryClient.invalidateQueries(["FavoriteAdded"]);
                if (data?.code === 1) {
                    NotificationManager.success("Added in Favorite successfully!");
                    // router.push("/shopping");

                } else {
                    NotificationManager.info("Product is already available in Favorite");
                    // router.push("/shopping");

                }

            },
        }
    );

    const updateMutation = useMutation(
        ["CartAdded",],
        async (id) => {
            console.log("MUTATION", id)
            return await CartApi.updateHeart(id);
        },
        {
            onError: (data) => { },
            onSuccess: (data) => {

                queryClient.invalidateQueries(["CartAdded"]);
                // if (data?.code === 1) {
                //   NotificationManager.success("Added in Favorite successfully!");
                //   // router.push("/shopping");

                // } else {
                //   NotificationManager.info("Product is already available in Favorite");
                //   // router.push("/shopping");

                // }

            },
        }
    );


    const deleteMutation = useMutation(
        ["FavoriteAdded"],
        async (id) => {
            console.log("delete MUTATION", id)
            await FavoriteApi.deleteFavorite(id);
        },
        {
            onError: (data) => { },
            onSuccess: () => {
                queryClient.invalidateQueries(["FavoriteAdded"]);



            },
        }
    );
    const deleteCartMutation = useMutation(
        ["CartAdded"],
        async (id) => {
            console.log("delete MUTATION", id)
            await CartApi.deleteCart(id);
        },
        {
            onError: (data) => { },
            onSuccess: () => {
                queryClient.invalidateQueries(["CartAdded"]);

                NotificationManager.success("Product deleted from cart successfully!");


            },
        }
    );



    let userId
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        userId = user.uid
        console.log("USER ID ", userId);


    } catch (error) {
        console.log("USER ID ERROR", error);
    }




    const { data, isLoading, isError } = useQuery(
        ['CartAdded'],
        async () => {

            const response = await CartApi.getCarts();
            return response;// Assuming your API returns data property

        }
    );
    console.log("carts", data)


    let totalPrice = 0;

    data?.forEach((item) => {
        const userInputQuantity = quantityInput[item.id] || 1; // Use the user input if available, else use 0
        totalPrice += parseInt(item.price) * (userInputQuantity);
    });


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error</h1>
    }
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-10'>
                <NotificationContainer />

                <div className='flex flex-col md:basis-[80%] rounded-md border px-5 py-7'>
                    <div className='flex justify-between md:justify-normal '>

                        <p>
                            Products
                        </p>
                        <p className=' md:pl-[28.5rem]'>
                            Quantity
                        </p>

                    </div>

                    {data?.map((item) => {


                        return <div key={item.id}>
                            <div className='flex md:justify-between  items-center mt-3 '>
                                <div className='flex gap-5 justify-center items-start md:items-center'>
                                    <div className=' py-5 md:py-0 px-5 md:px-0 md:h-[125px] w-[123px] rounded-md bg-[#D14D721A] md:mt-5'>
                                        <Image src={item.file} alt='' width={76} height={67} className='mx-auto md:py-5' />
                                    </div>
                                    <div>
                                        <p className='md:max-w-[280px] text-[14px] md:text-[16px] text-[#1A9CDA] font-[500] pr-4'>
                                            <span className='uppercase'>{item.category}</span> ({item.type})({item.color})
                                        </p>
                                        <p className='text-[12px] md:text-[16px]'>
                                            {item.side} : {item.size}
                                        </p>
                                        <p className='text-[12px] md:text-[16px]'>
                                            Color: {item.color}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        min="1"
                                        value={quantityInput[item.id] || ''}
                                        onChange={e => handleInputChange(item.id, parseInt(e.target.value))}
                                        defaultValue={1}
                                        type="number" className='md:pl-10 border py-2 pl-3  max-w-[40px] md:max-w-[90px] rounded-md ' placeholder='1' />

                                    <span className='hidden'>  x ${parseInt(item.price).toFixed(2)} = ${(parseInt(item.price) * (item.quantity + (quantityInput[item.id] || 0))).toFixed(2)}</span>

                                </div>
                                <div className='hidden md:flex gap-5'>
                                    <button
                                        className={`${item.isHeartFilled ? "bg-primary-pink-color" : "bg-primary-pink-color"} h-[40px] w-[47px] flex justify-center items-center  rounded-md text-white`}>
                                        {item.isHeartFilled ? (
                                            <AiFillHeart
                                                size={20}
                                                className='text-[red] cursor-pointer'
                                                onClick={() => {

                                                    updateMutation.mutate(item.id)
                                                    deleteMutation.mutate(item.id)

                                                }}

                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={20}
                                                className='text-white cursor-pointer'
                                                onClick={() => {
                                                    updateMutation.mutate(item.id)

                                                    data['userId'] = userId
                                                    addMutation.mutate(item)

                                                }
                                                }
                                            />
                                        )}
                                    </button>
                                    <button onClick={() => {

                                        deleteCartMutation.mutate(item.id)

                                    }} className='bg-primary-pink-color h-[40px] w-[100px] justify-center items-center rounded-md text-white'>
                                        Remove
                                    </button>

                                </div>


                            </div>
                            <div className='flex md:hidden justify-center gap-5 my-5 border-b pb-4'>
                                <button className='bg-primary-pink-color h-[40px] w-[47px] flex justify-center items-center  rounded-md text-white'>
                                    <AiFillHeart size={20} />
                                </button>
                                <button className='bg-primary-pink-color h-[40px] w-[100px] justify-center items-center rounded-md text-white'>
                                    Remove
                                </button>
                            </div>
                        </div>
                    })}




                </div>
                <div className='flex flex-col  basis-[20%] gap-10 mb-32 '>
                    <div className='md:w-[287px] w-full h-[146px] rounded-md border p-5'>
                        <p>
                            Have Coupon?
                        </p>
                        <div className="flex mt-5 justify-center ">
                            <input
                                type="text"
                                placeholder="Code"
                                className="  border border-[#1A9CDA] text-[14px] w-[150px] px-5 h-[40px] bg-transparent rounded-l-md"
                            />
                            <button
                                type="button"
                                className="bg-[#1A9CDA] text-[14px] text-white px-2  py-2  rounded-r-md"
                            >
                                Apply
                            </button>
                        </div>{" "}

                    </div>
                    <div className='md:w-[287px] w-full h-[171px] flex flex-col gap-5 p-5 border rounded-md'>
                        <div className='flex justify-between'>
                            <p className='text-[#777777] text-[18px] font-[500]'>
                                Total Price:
                            </p>
                            <p className='text-[18px] font-[500] text-left'>
                                USD   ${totalPrice.toFixed(2)}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[#777777] text-[18px] font-[500]'>
                                Discount:
                            </p>
                            <p className='text-[18px] font-[500] text-left '>
                                USD 00.00
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[#777777] text-[18px] font-[500]'>
                                Total:
                            </p>
                            <p className='text-[18px] font-[500] text-left'>
                                USD                                 ${totalPrice.toFixed(2)}

                            </p>
                        </div>
                        <div className='flex flex-col gap-6 justify-center items-center mt-10'>
                            <button
                                onClick={() => {
                                    const itemsJSON = JSON.stringify(
                                        data.map((item) => {
                                            const userInputQuantity = quantityInput[item.id] || 1;
                                            return { item: item.category, price: item.price, quantity: userInputQuantity, type: item.type, color: item.color };
                                        })
                                    );

                                    router.push({
                                        pathname: '/cart-checkout',
                                        query: { items: itemsJSON, amount: totalPrice },
                                    });
                                }}
                                className='bg-primary-pink-color text-[16px] w-[287px] h-[50px] text-white rounded-md'
                            >
                                CheckOut
                            </button>

                            <Link href={'/product-listing'}>
                                <button className='bg-[#00ADDF] text-[16px] w-[287px] h-[50px] text-white rounded-md'>
                                    Continue Shopping
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Shopping