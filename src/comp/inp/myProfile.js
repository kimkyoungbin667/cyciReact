import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function MyProfile() {

    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [gender, setGender] = useState('');
    const [hobby, setHobby] = useState([]);
    const [birth, setBirth] = useState('');

    const hobbyList = [
        '배드민턴', '축구', '농구', '야구', '볼링'
    ]

    const yearList = [
        '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
        '2008', '2009', '2010'
    ]

    //hobby 체크하기
    function handleHobby(e) {

        //이미 체크 됐을떄
        if (hobby.includes(e.target.value)) {
            //2. 1번에서 제외된 리스트를 다시 hobby에 저장
            setHobby(
                //1. 체크된 결과값과 똑같은 값은 제외 처리
                hobby.filter(item => item !== e.target.value)
            )

            //체크 안돼있을떄
        } else {
            //마지막에 입력된 값을 추가
            setHobby([...hobby, e.target.value]);
        }
    }

    return (
        <div>
            <h1>회원가입하기</h1>
            <h4>아이디</h4>
            <input type='text' placeholder='id' value={id} onChange={e => setId(e.target.value)} />
            <h4>비밀번호</h4>
            <input type='password' placeholder='pw' value={pw} onChange={e => setPw(e.target.value)} />
            <h4>성별</h4>
            <input type='radio' name='gender' value='남자' onChange={e => setGender(e.target.value)} />남자
            <input type='radio' name='gender' value='여자' onChange={e => setGender(e.target.value)} />여자

            <h4>취미선택하기</h4>
            {hobbyList.map(
                (item, index) => {
                    return (
                        <div key={index}>
                            <input type='checkbox'
                                value={item}
                                onChange={handleHobby}
                            />{item}

                        </div>
                    )
                }
            )}
            <br />
            <h4>생년월일 년도</h4>
            <select onChange={e => setBirth(e.target.value)}>
                {yearList.map(
                    item => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        )
                    }
                )}
            </select>

            <br />
            <br />
            <input type='button' value='회원가입' onClick={e => {
                localStorage.setItem('id', id);
                localStorage.setItem('pw', pw);
                localStorage.setItem('gender', gender);
                localStorage.setItem('hobby', hobby);
                localStorage.setItem('birth', birth);
                navigate('/result');

            }} />
        </div>
    )
}