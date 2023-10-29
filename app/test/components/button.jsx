import { useState } from "react";

export default function Button(props) {
    // const [counts, setCounts] = useState(0);

    const {onClick,text} = props;


    // function handleInc() {
    //     setCounts(counts + 1);
    // }

    // const onclick = () => alert("Clicked")
    return <button onClick={props.onClick}>Click {props.text}</button>
}