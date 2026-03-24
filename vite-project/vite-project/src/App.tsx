import img from './assets/images/heibe.jpg'

export default function App() {
  return (
    <>
      {/* <img src={img} alt="" /> */}

      <div
        style={{width:'300px', height: '320px', background: `url(${img})`}}>

      </div>
    </>
  );
}