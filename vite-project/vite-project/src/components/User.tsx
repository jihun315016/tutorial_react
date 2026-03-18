// User.tsx
export default function User(props: { children: React.ReactNode }) {
    console.log(props);
    
    return (
        <>
            {props.children}
        </>
    );
}