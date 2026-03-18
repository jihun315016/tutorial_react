export default function App() {
  const handleCapture = () => {
    console.log('parent');
  }
  
  const handleBubble = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('child');
    e.stopPropagation();
  }

  return (
    <>
      <div
        // onClickCapture={handleCapture}
        onClick={handleCapture}
        style={{ padding: '50px', backgroundColor: '#f0f000'}}
        >
          Parent
          <button onClick={handleBubble}>click</button>
      </div>
    </>
  )
}