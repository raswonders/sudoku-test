
import { useEffect, useState } from "react"

const INP_REGEX = /^(?:[1-9]|)$/;

export default function Cell() {

    const [number, setNumber] = useState('');
    const [validInput, setValidInput] = useState(true);

    useEffect(() => {
        setValidInput(INP_REGEX.test(number));
    }, [number])

    const handleChange = (e) => {
        e.preventDefault();

        setNumber(e.target.value);

    }

    return (
        <input type="number" value={number} className={`border border-1 border-slate-400 text-center ${validInput ? "" : "bg-red-400"}`} onChange={(e) => handleChange(e)}></input>
    )
}
