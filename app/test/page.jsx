"use client"
import Button from '@/app/test/component/button';
import { useState } from 'react';
export default function Test() {

    const [counts, setCounts] = useState(0);
    function handleInc() {
        setCounts(counts + 1);
    }
    function handleDec() {
        setCounts(counts - 1);
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <Button />
            <br />
            <h3>{counts}</h3>
            <button onClick={handleInc}>Add the number</button>
            <button onClick={handleDec}>Reduce the number</button>
        </div>);

}