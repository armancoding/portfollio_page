
import React from 'react';
import './Planets.css';

const Planets = () => {
    return (
        <>
        <div className="sun" />
        <div className="planet mercury" />
        <div className="planet venus" />
        <div className="planet earth" />
        <div className="planet mars" />
        <div className="planet jupiter" />
        <div className="planet saturn">
            <div className="saturn-ring" />
        </div>
        <div className="planet uranus" />
        <div className="planet neptune" /> 
        </>
    );
}

export default Planets;