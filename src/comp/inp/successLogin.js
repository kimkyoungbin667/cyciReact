import { useState } from "react"
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Result() {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    function start() {
        
        const id = localStorage.getItem('userId');
        const pw = localStorage.getItem('userPw');

        if(id !== '' && id !== null, pw !== '' && pw !== null) {
            setId(id);
            setPw(pw);
        }
    }

        //처음 화면이 마운트되었을때 (java 이벤트 핸들러: onLoad와 비슷함)
        useEffect(() => {
            start();
        }, [])
    
    return (
        <div>
            <h1>로그인 성공!</h1>
            입력한 아아디 : {id} <br/>
            입력한 비밀번호 : {pw} <br/>
        </div>
    )
}