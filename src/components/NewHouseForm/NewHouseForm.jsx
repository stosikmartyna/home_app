import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const NewHouseForm = () => {
    const [newHouse, setNewHouse] = useState({
        address: '',
        area: '',
        owner: '',
        price: ''
    })

    const history = useHistory();

    const handleInputChange = (event) => {
        setNewHouse({...newHouse, [event.target.id]: event.target.value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            await axios.post('http://mr-test-backend.sadek.usermd.net/houses', newHouse);
            alert('Sent correctly');
            history.push('/houses');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <>
            <h1>House Form</h1>
            <form>
                <input id={'address'} placeholder={'Address'} onChange={handleInputChange} /> 
                <input id={'area'} placeholder={'Area'} type={'number'} onChange={handleInputChange} /> 
                <input id={'owner'} placeholder={'Owner'} onChange={handleInputChange} /> 
                <input id={'price'} placeholder={'Price'} onChange={handleInputChange} /> 
                <button type={'submit'} onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}