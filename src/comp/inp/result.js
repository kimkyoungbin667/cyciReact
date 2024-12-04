import { useState } from "react"
import React, { useEffect } from 'react';

export default function Result() {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [gender, setGender] = useState('');
    const [hobby, setHobby] = useState([]);
    const [birth, setBirth] = useState('');
    
    function start() {
        
        const id = localStorage.getItem('id');
        const pw = localStorage.getItem('pw');
        const gender = localStorage.getItem('gender');
        const hobby = localStorage.getItem('hobby');
        const birth = localStorage.getItem('birth');


        if(id !== '' && id !== null, pw !== '' && pw !== null, gender !== '' && gender !== null,
            birth !== '' && birth !== null) {
            setId(id);
            setPw(pw);
            setGender(gender);
            setHobby(hobby);
            setBirth(birth);
        }

    }

        //처음 화면이 마운트되었을때 (java 이벤트 핸들러: onLoad와 비슷함)
        useEffect(() => {
            start();
        }, [])
    
    return (
        <div>
            <h1>나의 정보 결과</h1>
            아아디 : {id} <br/>
            비밀번호 : {pw} <br/>
            성별 : {gender} <br/>
            취미 : {hobby} <br/>
            생일 : {birth} <br/>
        </div>
    )
}