import axios from 'axios'
import { useState } from 'react';

export default function Ax1() {

    const [지역, 변경지역] = useState([]);

    function axios01() {
        console.log('==== axios get 방식 ====');
        //Promise와 비슷함
        //ES 6문법
        axios.get('http://localhost:8080/api/area/list')
            .then(res => {
                console.log(res);

                //받은 데이터안에 코드가 200일떄(성공일떄)
                if (res.data.code === 200) {
                    //res.data.data ->지역 리스트
                    변경지역(res.data.data);
                }
                

            })





    }

    return (
        <div>
            <h1>Axios 연습</h1>
            <input type='button' value='get방식' onClick={axios01} />
        </div>
    )
}