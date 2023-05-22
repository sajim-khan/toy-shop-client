import React from 'react';
import useTitle from '../../Hooks/Titile';

const About = () => {
useTitle("About");
    return (
        <div>
            <h1>This is about page</h1>
        </div>
    );
};

export default About;