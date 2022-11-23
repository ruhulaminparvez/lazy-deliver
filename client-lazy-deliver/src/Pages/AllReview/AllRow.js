import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllRow = ({ review }) => {
    const { _id, serviceName, email, message, customer, price, service, status } = review;
    console.log(review);
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://lazy-deliver-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost'>{_id}</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Price: ${price}</span>
            </td>
            <td>{message}</td>
            <th>
                <Link to={`/edit-review/${review._id}`}>
                    <button 
                        className="btn btn-ghost btn-xs">{status ? status : 'Edit Review'}
                    </button>
                </Link>
            </th>
        </tr>
    );
};

export default AllRow;