import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../shared/Loading';
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const { id } = useParams()
    console.log(id)
    const [tools, setTools] = useState({})
    const [user] = useAuthState(auth)
    const [reload, setReload] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [purchase, setPurchase] = useState(false);
    const [orderQuantity, setOrderQuantity] = useState(0);
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTools(data)
                setOrderQuantity(data.minOrderQuantity)
                setIsLoading(false)

            })
    }, [id, reload])
    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, img, availableQuantity, minOrderQuantity, description, price } = tools
    const handleQuantity = event => {
        let order = event.target.value
        const numOder = parseFloat(order)
        setOrderQuantity(numOder)
        if ((numOder) < minOrderQuantity || (numOder) > availableQuantity || isNaN(numOder)) {
            return setPurchase(true)
        }
        setPurchase(false)
    }
    const handleOrder = event => {
        event.preventDefault()
        const totalPrice = parseFloat(orderQuantity) * parseFloat(price)
        const orderSummary = {
            userName: user.displayName,
            productName: name,
            price: parseFloat(totalPrice),
            productQuantity: orderQuantity,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        const newQuantity = { availableQuantity: parseFloat(availableQuantity) - parseFloat(orderQuantity) }
        fetch('http://localhost:5000/order', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderSummary)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Order place successFully")
                event.target.reset()
            })
        fetch(`http://localhost:5000/service/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReload(!reload)
            })
    }

    return (
        <>
            <h1 className='text-3xl font-bold text-primary text-center pt-12'>Order <span className='text-orange-600'>{name}</span> from this page</h1>
            <div className="hero min-h-screen max-w-6xl mx-auto">
                <div className="hero-content gap-x-32 flex-col lg:flex-row-reverse">
                    <div className="card text-center lg:text-left shadow-xl image-full">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className='text-2xl font-bold text-yellow-400'>{name}</h1>
                            <h1 className='text-white text-xl'>Minimum Order Quantity: <span className='text-rose-500 font-bold'>{minOrderQuantity}</span></h1>
                            <h1 className='text-xl text-white'>Available Quantity: <span className='text-orange-400 font-bold'>{availableQuantity}</span></h1>
                            <p className='text-lg text-slate-200'>{description}</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-2xl font-bold text-center'>Order Info</h1>
                            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
                                <input name='name' disabled type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" value={user?.displayName || ''} />

                                <input name='email' disabled value={user?.email || ''} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />

                                <input onChange={handleQuantity} value={orderQuantity} name='quantity' type="number" placeholder={tools.minOrderQuantity} className="input input-bordered w-full max-w-xs" />

                                <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                                <input name='address' type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                <button disabled={purchase} type='submit' className={`btn ${purchase ? 'btn-accent' : 'btn-secondary'} w-full max-w-xs`}>Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchasePage;