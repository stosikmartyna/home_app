import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const HouseDetails = () => {
    const [houseDetails, setHouseDetails] = useState(undefined);
    const {id} = useParams();
    const history = useHistory();

    const getHouseDetails = useCallback(async() => {
        try {
            const response = await axios.get(`http://mr-test-backend.sadek.usermd.net/houses/${id}`);
            setHouseDetails(response.data)
        } catch (err) {
            console.warn(err);
        }
    }, []);

    const redirectToHouses = () => {
        history.push('/houses');
    };

    useEffect(() => {
        getHouseDetails();
    }, [getHouseDetails])

    return (
        <>
            <h1>House Details</h1>
            {houseDetails && (
                <ul>
                    <li>Address: {houseDetails.address}</li>
                    <li>Area: {houseDetails.area}</li>
                    <li>Owner: {houseDetails.owner}</li>
                    <li>Price: {houseDetails.price}</li>
                </ul>
            )}

            <button onClick={redirectToHouses}>Go back</button>
        </>
    )
}