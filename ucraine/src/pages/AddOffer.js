import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const AddOffer = () => {

    const [title, setTitle] = useState('');
    const [message, setMesage] = useState('');
    const [alternativeContact, setAlternativeContact] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // request la API
        console.log(e);
    }

    return (
        <>
            <Header />
            <div className="focus:outline-none py-8 container mx-auto">
            <div className="lg:grid grid-rows-2 gap-4">
                <div className="form-offer">
                <form onSubmit={handleSubmit}>
                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Titlu"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Telefon de contact"
                        value={phone}
                        onChange={(e) => {setPhone(e.target.value)}}
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Contact alternativ (facebook/instagram etc)"
                        value={alternativeContact}
                        onChange={(e) => {setAlternativeContact(e.target.value)}}
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Locatie"
                        value={title}
                        onChange={(e) => {setLocation(e.target.value)}}
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <select
                        value={category}
                        onChange={(e) => {setCategory(e.target.value)}}
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        >
                            <option value="Cazare" >Cazare</option>
                            <option value="Transport">Transport</option>
                            <option value="Altele" >Altele</option>
                            </select>
                  </div>
                  <div class="mb-6">
                     <textarea
                        rows="6"
                        placeholder="Mesaj"
                        value={message}
                        onChange={(e) => {setMesage(e.target.value)}}
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        class="
                        w-full
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                        >
                     Send Message
                     </button>
                  </div>
               </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddOffer;