"use client"
import Button from '@/app/test/components/button';
import { useState } from 'react';

export default function Test() {

    const [counts, setCounts] = useState(0);
    // let counts = 0;
    function handleInc() {
        setCounts(counts + 1);
    }

    // function getAlert() {
    //     alert("Meletus");
    // }

    return (
        <div>
            <h1>Hello World!</h1>
            <Button onClick={handleInc} text={"Increment"} />
            <Button onClick={()=> alert("Mel!!!") } text={"Alert"}/>
            <br />
            <h3>{counts}</h3>

        </div>);

}