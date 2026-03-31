// FallbackComponents는 내부적으로 오류와 다시 시도하는 함수에 대한 정보가
// 자동으로 들어간다. 
export default function Fallback({error, resetErrorBoundary}:{
    error: Error,
    resetErrorBoundary: () => void
}) {
    return (
        <>
        <div role='alert'>
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>retry</button>
        </div>
        </>
    )
}