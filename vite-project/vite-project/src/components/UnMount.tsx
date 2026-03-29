import { useEffect } from "react"

export default function UnMount() {
    useEffect(() => {
        // Mount 동작 코드
        console.log("Mounted!")

        // UnMount 동작 코드
        // return에 작성된 함수는 Mount에서는 동작하지 않음
        return () => {
            console.log("UnMounted");
        }
    }, [])
  
    return <div>UnMount</div>
}