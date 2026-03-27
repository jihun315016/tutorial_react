import React, { useState } from "react";

export default function TextArea2() {
    const [formState, setFormState] = useState({
        desc: '',
        introduce: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormState((formState) => ({
            ...formState,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <>
        <form>
            <textarea name="desc" id={formState.desc} onChange={handleChange}></textarea>
            <p>desc : {formState.desc}</p>

            <textarea name="introduce" id={formState.introduce} onChange={handleChange}></textarea>
            <p>desc : {formState.introduce}</p>
        </form>
        </>
    )
}