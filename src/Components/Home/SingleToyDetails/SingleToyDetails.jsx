import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {

const data = useLoaderData()
console.log(data);

    return (
        <div>
            <h1>This is a single details</h1>
        </div>
    );
};

export default SingleToyDetails;