import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';

export const Houses = () => {
    const [houses, setHouses] = useState(undefined);

    const getHouses = async() => {
        try {
            const response = await axios.get('http://mr-test-backend.sadek.usermd.net/houses');
            setHouses(response.data.houses)
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getHouses()
    }, [])

    return (
        <div>
            <h1>Houses</h1>
            {houses?.map(house => {
                return (
                    <Link to={generatePath('/houses/:id', {id: house._id})} key={house._id}>{house.address}</Link>
                )
            })}
        </div>
    )
}