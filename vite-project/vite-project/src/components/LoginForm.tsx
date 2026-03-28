import { useRef, useState } from "react";

export default function LoginForm() {
    // useRef: DOM 요소(input 태그)에 직접 접근하기 위한 수단
    // <HTMLInputElement>는 input 태그 전용임을 타입스크립트에게 알리는 것
    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    // 로그인 시도 횟수
    const loginAttemptCount = useRef(0);

    // 입력창의 값을 실시간으로 저장할 상태 변수
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // onChange 핸들러: 제어 컴포넌트 방식
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };


    // onChange 핸들러: 제어 컴포넌트 방식
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    // onSubmit 핸들러: 로그인 버튼을 눌렀을 때 실행
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        // 폼 제출 시 브라우저가 새로고침되는 기본 동작을 막음
        e.preventDefault(); 
        
        // 로그인 버튼을 누를 때마다 1씩 증가
        loginAttemptCount.current += 1;

        // 숫자는 올라가지만 화면은 다시 그려지지 않음
        console.log(`현재까지 로그인 시도 횟수: ${loginAttemptCount.current}`);

        // 유효성 검사 (이메일)
        if (email.trim() === "") {
            alert("이메일을 입력해주세요."); 
            // 비어있는 이메일 입력창으로 커서 이동
            idRef.current?.focus(); 
            return; 
        }

        // 유효성 검사 (비밀번호)
        if (password.trim() === "") {
            alert("비밀번호를 입력해주세요."); 
            // 비밀번호 입력창으로 커서 이동
            pwRef.current?.focus(); 
            return; 
        }

        // 모든 검사를 통과했을 때 최종 데이터 출력
        alert(`이메일: ${email}, 비밀번호: ${password}`);

        // 제출 성공 후 입력창을 다시 빈 칸으로 초기화
        setEmail(""); 
        setPassword(""); 
    };

    
    return (
    // <form>의 onSubmit은 엔터를 쳤을 때도 작동함
    <form onSubmit={submitHandler}>
      <label htmlFor="uid">
        <input
          ref={idRef} // input 태그를 idRef 변수와 연결
          type="text"
          id="uid"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={changeEmail}
        />
      </label>
      
      <label htmlFor="upw">
        <input
          ref={pwRef} // input 태그를 pwRef 변수와 연결
          type="password"
          id="upw"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={changePassword}
        />
      </label>

      {/* onSubmit 이벤트 발생 */}
      <button type="submit">로그인</button>
    </form>
  );
}