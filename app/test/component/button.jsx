export default function Button() {
    const onclick = () => alert("Clicked")
    return <button onClick={onclick}>Click Me</button>
}