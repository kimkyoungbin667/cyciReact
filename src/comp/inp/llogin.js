import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { memberLogin } from '../api/member' 

export default function Study() {

    const navigate = useNavigate();

    const idRef = useRef('');
    const pwRef = useRef('');

    //페이지 접속했을때.
    useEffect(() => {
        localStorage.removeItem('userId');
    }, [])

    const loginAction = () => {
        const idValue = idRef.current.value;
        const pwValue = pwRef.current.value;
        
        let obj = new Object();
        obj.userId = idValue;
        obj.userPw = pwValue;

        memberLogin(obj)
        .then(res => {
            const data = res.data;
            if(data.code === '200' && data.data ==='Y') {
                //다음 페이지 이동
                console.log('로그인 성공');
                localStorage.setItem('userId', idValue); //권한 등록

                //UUID 64비트로 된 랜덤으로 주어진 값 (영어,숫자) -중복될 확률 로또3번 당첨확률
                localStorage.setItem('auto', 'random UUID JWT'); 

                //아이템 리스트 이동
                navigate('/itemList');

            }
            else{
                idRef.current.value = '';
                pwRef.current.value = '';
                idRef.current.focus();
                alert("아이디를 재입력 해주세요");

            }
            
        })
    }

    return (
        <div>
            <h1>로그인</h1>
            <input type ='text' placeholder="아이디 입력" ref={idRef}/> <br/>
            <input type='password' placeholder="패스워드 입력" ref={pwRef}/> <br/>

            <input type='button' value='회원가입' onClick={() => navigate("/join")}/>
            <input type='button' value='로그인' onClick={loginAction}/>
        </div>
    )
}