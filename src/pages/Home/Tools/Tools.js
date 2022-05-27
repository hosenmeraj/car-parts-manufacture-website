import React, { useEffect, useState } from 'react';
import PurchasePage from '../Home/PurchasePage/PurchasePage';
import Service from './Service';

const Tools = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className='py-8'>
            <h2 className='text-center text-primary text-4xl font-bold'>Our Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Tools;