import User from './components/User';

export default function App() {
  /* 
  부모 컴포넌트가 자식 컴포넌트에게 보낼 객체를 하나로 모아 
  props 라는 단일 객체로 전달 
  */
  // // return <User name='철수' age={20}/>;

  // const userObj = {
  //   name: '민수',
  //   age: 21
  // };
  
  // const clickHandler = () => {
  //   console.log('clicked')
  // };

  return (
    <>
      <User>
        <p><strong>test</strong> James</p>
        <p>20</p>
        <p>mail</p>
      </User>
    </>
  )
  //return <User userObj={userObj} clickHandler={clickHandler} />;
}

