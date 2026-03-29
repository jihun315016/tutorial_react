import { useEffect } from "react";

export default function ScrollTracker() {
    useEffect(() => {
        const handleScroll = () => {
            console.log('현재 스크롤 위치: ', window.scrollY);
        };

        // 스크롤 이벤트 등록
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return <div style={{ height: '200vh' }}>스크롤 해보세요.</div>
}