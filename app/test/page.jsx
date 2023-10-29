"use client"
import Button from '@/app/test/component/button';
import { useState } from 'react';
export default function Test() {

    const [counts, setCounts] = useState(0);
    function handleClicks() {
        setCounts(counts + 1);
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <Button />
            <br />
            <h3>{counts}</h3>
            <button onClick={handleClicks}>Add the number</button>
        </div>);

}