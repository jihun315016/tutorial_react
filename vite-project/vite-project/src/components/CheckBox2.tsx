import React, { useState } from "react";

export default function CheckBox2() {
    const [formState, setFormState] = useState({
        agree1: false, 
        agree2: false, 
        agree3: false
    });

    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((formState) => ({
            ...formState,
            [event.target.name]: event.target.checked
        }));
    };

    return (
        <>
        <form>
            <input type="checkbox" id="ag1" name="agree1" checked={formState.agree1} onChange={handleCheckBoxChange} />
            <label htmlFor="ag1">동의1({formState.agree1 ? "선택" : "미선택"})</label>
            <input type="checkbox" id="ag2" name="agree2" checked={formState.agree2} onChange={handleCheckBoxChange} />
            <label htmlFor="ag2">동의2({formState.agree2 ? "선택" : "미선택"})</label>
            <input type="checkbox" id="ag3" name="agree3" checked={formState.agree3} onChange={handleCheckBoxChange} />
            <label htmlFor="ag3">동의3({formState.agree3 ? "선택" : "미선택"})</label>
        </form>
        </>
    )
}