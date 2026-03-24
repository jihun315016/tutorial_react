import styles from 'styled-components';

const Button1 = styles.button`
  background: transparent;
  border-radius: 3px;
  color: #bf4f74;`

// primary라는 사용자 속성을 만들어
// 
const Button2 = styles.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: ${props => props.$primary ? "black" : "#bf4f74"};`

export default function App() {
  return(
    <>
    <Button1>Click Me1</Button1>
    <Button2>Click Me2</Button2>

    {/* 속성 이름만 주면 true */}
    <Button2 $primary>Click Me3</Button2>
    </>
  )
}