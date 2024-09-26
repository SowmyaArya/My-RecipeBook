


import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../../config';

export default function Viewrecipetable() {
    // const host = "http://localhost:5000";

    // -----------
    const host = config.host

const [data,setData]=useState([]);


useEffect(()=>{
    axios.get(`${host}/api/recipe/Getrecipe`)
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

                        <th>recipe name</th>
                        <th>recipe_description</th>
                        <th>recipe_Ingredients</th>
                        <th>recipe_method</th>
                        <th>recipe_image</th>
                        {/* <th rowSpan={2}>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.recipe_name}</td>
                            <td>{item.recipe_description}</td>
                            <td>{item.recipe_Ingredients}</td>
                            <td>{item. recipe_method}</td>
                            {/* <td>{item. recipe_image}</td> */}
                            <td><img src={`http://localhost:5000/api/image/${item. recipe_image}`}  style={{ width: '250px', height: '250px' }} /></td>
                            {/* <td><button>Update</button> <button>Delete</button></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}





