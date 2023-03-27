import React, { useContext } from 'react';
import { AuthContext } from '../../Contaxts/AuthProvider';

const OrderModal = ({ order }) => {
    const { name, price } = order
    const { user } = useContext(AuthContext)
    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-5 mt-5'>

                        <span className="label-text font-bold">Select your preferred date</span>
                        <input type="date" name='date' className="input rounded-xl input-bordered w-full" />
                        <span className="label-text font-bold">Original Price</span>
                        <input type="text" name='price' disabled value={price} className="input rounded-xl input-bordered w-full" />
                        <span className="label-text font-bold">Email</span>
                        <input type="text" name='email' disabled defaultValue={user?.email} placeholder="Type here" className="input rounded-xl input-bordered w-full" />
                        <span className="label-text font-bold">Full name</span>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Type here" className="input rounded-xl input-bordered w-full" />
                        <span className="label-text font-bold">Mobile Number</span>
                        <input type="text" name='number' placeholder="phone number" className="input rounded-xl input-bordered w-full" />
                        <br />
                        <input className='w-full btn rounded-xl bg-pink-400 border-0 text-white' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;