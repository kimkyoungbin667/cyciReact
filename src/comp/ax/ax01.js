import axios from 'axios'
import { useState, useRef } from 'react';

export default function Ax1() {

    const [지역, 변경지역] = useState([]);
    const text = useRef(); //변수를 가상 dom에만 저장, 랜더 현상은 없음
    
    // 사용자에게 변화되는 데이터를 보여줄 필요가 없지만, 데이터는 저장해야할때

    const text2 = useRef();

    function axios01() {
        console.log('==== axios get 방식 ====');
        //Promise와 비슷함
        //ES 6문법
        axios.get('http://localhost:8080/api/area/list')
            .then(res => {
                console.log(res);

                //받은 데이터안에 코드가 200일떄(성공일떄)
                if (res.data.code === '200') {
                    //res.data.data ->지역 리스트
                    변경지역(res.data.data);
                }
            })
    }

    //useRef
    function axios2() {
        console.log(text.current.value);
        
        const obj = {
            'id': text.current.value
        }

        console.log(obj);

        axios.get('http://localhost:8080/api/area/byId', {params: {
            id: '1'
        }})
        .then(res => {
            console.log(res);
        })
    }

    function axios3() {
        axios.post('http://localhost:8080/api/member/list')
        .then(res => {
            console.log(res);
        })
    }

    function axios4() {
        
        const obj = {
            "id": text2.current.value
        } // {"id": "Hello World"}

        axios.post('http://localhost:8080/api/member/findId', JSON.stringify(obj))
        ,{
            headers: {
                'Content-Type': 'application/json'
            }
        }
        .then(res => {
            console.log(res);
        })
    }


    return (
        <div>
            <h1>Axios 연습</h1>
            <input type='button' value='get방식' onClick={axios01} /> <br/>
            <input type='text' ref={text}></input>
            <input type='button' onClick={axios2} value="get 방식2"/>

            <h4>Post 방식</h4>
            {/* method // 전송방법: method, GET, POST (TOMCAT은 GET과 POST만 지원) */}

            <input type='button' onClick={axios3} value='post 방식' /> <br/>
            <input type='text' ref={text2}/>
            <input type='button' onClick={axios4} value='post 방식 2'/> 
        </div>
    )
}