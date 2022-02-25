import React, { useState, useEffect } from 'react';
import { getRequests } from '../api/Api';
import Header from '../components/Header';


const Request = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        getRequests()
        .then((e) => {
            let result = []
            for(var i in e) {
                console.log(i)
                result.push(e[i]);
            }
            setRequests(result);
            console.log(requests);
        })

    },[]);


    return (
        <>
        <Header />
<div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 container mx-auto">
            <div class="lg:grid grid-rows-2 w-full gap-4">

                {
                    requests && requests.map((item, index) => {
                        return (
                            <div tabindex={index} aria-label="card 1" class="focus:outline-none lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                            <div class="flex items-center border-b border-gray-200 pb-6">
                                <div class="flex items-start justify-between w-full">
                                    <div class="pl-3 w-full">
                                        <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">{item.title}</p>
                                        <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500 ">{item.category}</p>
                                    </div>
                                    {/* <div role="img" aria-label="bookmark">
                                        <svg  class="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                            <div class="px-2">
                                <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">{item.message}</p>
                                <div tabindex="0" class="focus:outline-none flex">
                                    <div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100 mr-2">{item.location}</div>
                                    <div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-200 mr-2"><a href={`tel:${item.phone}`}>{item.phone}</a></div>
                                    <div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Alternative contact: {item.alternativeContact}</div>
                                </div>
                            </div>
                        </div>
                        );
                    })
                }
            </div>
          
        </div>
        </>
    )
}

export default Request;