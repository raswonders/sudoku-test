import { useState } from "react"

const regex= new RegExp("^[1-9]+$")

export default function Cell( { name } ) {

    const [number, setNumber] = useState("");

    var condition = "";

    const handleChange = (e) => {
        e.preventDefault();

        setNumber(e.target.value);

    }

    return (
        <input type="text" pattern="^[1-9]+$" value={number} className="w-10 h-10 border border-1 border-slate-400 text-center " onChange={(e) => handleChange(e)}></input>
    )
}
