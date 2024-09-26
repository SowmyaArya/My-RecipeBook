import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Tables() {
    const host = "http://localhost:5000";

const [data,setData]=useState([]);


useEffect(()=>{
    axios.get(`${host}/api/user/Getuser`)
    .then((res) => {
        setData(res.data)
    })
    .catch((err) => {
        console.log(err)                                //
    })

},[])
    
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th rowSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td><button>Update</button> <button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}





