import ListItem from "./components/ListItem";

export default function App() {
  const items = ['사과', '바나나', '딸기'];

  return (
    <>
      {/* JSX 요소 반복 렌더링 */}
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>


      {/* 컴포넌트 반복 렌더링 */}
      <ul>
        {items.map((item, index) => {
          return <ListItem key={index} text={item} />
        })}
      </ul>
    </>
  )
}