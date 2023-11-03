import '../components/Catalog.css';
import React, { useState, useEffect } from 'react';

export default function Catalog({fetchData}) {
    const [data, setData] = useState([]);

    useEffect(() => {
       setData(fetchData);
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



