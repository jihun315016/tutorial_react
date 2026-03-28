import { useState } from "react";

export default function Input3() {
    const [formState, setFormState] = useState({
        id: '',
        password: '',
        date: ''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((formState) => ({
          ...formState,
          [e.target.name]: e.target.value
          // [e.target.name]은 input 태그의 name 값
          // ex) 
          // name이 id인 input 태그에 Hello를 입력하면
          // id: 'Hello'와 같은 효과를 준다.
        }));
      }
    
      return (
        <>
        <form>
            <h1>
                ID: {formState.id} / password: {formState.password} / Date: {formState.date}
            </h1>
    
            {/* 한 줄 입력 요소 */}
            <input type="text" name='id' value={formState.id} onChange={handleChange} />
            <input type="password" name='password' value={formState.password} onChange={handleChange} />
            <input type="date" name='date' value={formState.date} onChange={handleChange} />
        </form>
        </>
      )
}