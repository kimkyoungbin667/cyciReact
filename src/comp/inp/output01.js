import { useEffect, useState } from "react";


export default function OutStudy() {

    const [메세지, 변경메세지] = useState('');


    function start() {
        alert('start');
        const data = localStorage.getItem('study');

        if(data !== '' && data !== null) {
            변경메세지(data);
        }
        alert(data);
    }

    //처음 화면이 마운트되었을때 (java 이벤트 핸들러: onLoad와 비슷함)
    useEffect(() => {
        start();
    }, [])

    return (
        <div>
            <h1>Out Study</h1>
            {메세지}
        </div>
    )
}