import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { generatePath, Link, useHistory } from 'react-router-dom';

export const Houses = () => {
    const [houses, setHouses] = useState(undefined);
    const history = useHistory();

    const redirectToNewHouseForm = () => {
        history.push('/houses/add')
    }

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
            <button onClick={redirectToNewHouseForm}>Add house</button>
            <ul>
                {houses?.map(house => {
                    return (
                        <li key={house._id}>
                            <Link to={generatePath('/houses/:id', {id: house._id})}>{house.address}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}