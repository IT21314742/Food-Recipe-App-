import React, { useEffect, useState } from 'react';

const Popular = () => {

    const [Popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("API error:", error);
        }
    };

    return (
        <div>
            <h2>Popular Recipes</h2>
            {/* You can map through and display data here later */}
        </div>
    );
};

export default Popular;





















