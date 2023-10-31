import '../components/Catalog.css';
import React, { useState, useEffect } from 'react';

export default function Catalog() {
    const [data, setData] = useState([]);

    const url = "http://localhost:3000/items";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Catalog</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.images[0].url}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}



