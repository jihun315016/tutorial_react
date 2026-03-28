import useInput from "../hooks/useInput";

export default function LoginForm3() {
    // 자바스크립트 객체 구조 분해 할당 문법 : 변수에 별칭을 만듦 -> { 원래키 : 바꿀이름 }
    // 이메일 상태와 핸들러 생성
    const {
        value: email,
        onChange: changeEmail
    } = useInput('');

    // 비밀번호 상태와 핸들러 생성
    const { 
        value: password
        , onChange: changePassword 
    } = useInput("");

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("---")
        console.log(email, password);
    }

    return (
        <form onSubmit={submitHandler}>
      <label htmlFor="uid">
        <input
          type="text"
          id="uid"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={changeEmail}
        />
      </label>
      <label htmlFor="upw">
        <input
          type="password"
          id="upw"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={changePassword}
        />
      </label>
      <button type="submit">로그인</button>
    </form>
    )
}