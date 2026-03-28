import { useState } from "react";

// "text", "checkbox", "radio" 세 가지 문자열만 가진다.
// 그리고 이것을 string이 아니라 Input이라는 타입으로 명명한다.
// 기본값은 text
type InputType = "text" | "checkbox" | "radio";

// useInput 훅에 전달한 props의 타입 정의
interface UseInputProps<T> {
    initialValue: T; 
    validateFn: (value: T) => string | undefined;
    type?: InputType; // 입력 필드 타입
}

// JS와 TS에서 등호의 왼쪽 또는 함수의 매개 변수자리에 쓰이면
// 구조 분해 할당을 한다는 의미
// 구조 분해 할당 : 객체나 배열의 속성을 해제하여 개별 변수로 사용하는 방식
export default function useInputEx<T>({
    initialValue,
    validateFn,
    type = "text"
}: UseInputProps<T>) {
    const [value, setValue] = useState<T>(initialValue);
    const [error, setError] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // as unknown as T
        // * unknown는 TS의 최상위 타입 중 하나
        // TS는 전혀 연관없는 타입끼리 가뿔 수 없음
        // e.target.checked는 boolean이므로 unknown 타입으로 한 번 변환 후 다시 T 타입으로 변환
        // e.target.value에서 TS 컴파일러는 T는 string으로 사용되는 경우가 많아 unknown 안 써도 허용
        const newValue = type === "checkbox" ? 
            e.target.checked as unknown as T 
            : e.target.value as T;
        
        setValue(newValue);
        setError("");
    }

    const validate = (): boolean => {
        const validationError = validateFn(value);
        setError(validationError || "");
        return !validationError;
    };

    const reset = () => {
        setValue(initialValue);
        setError("");
    };

    return {
        value,      // 현재 입력 값
        error,      // 유효성 검사 오류 메시지
        onChange,   // 입력 이벤트 핸들러
        validate,   // 유효성 검사 함수
        reset,      // 상태 초기화 함수
    };
}