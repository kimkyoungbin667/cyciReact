import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { boardList } from '../api/board';
import BoardArea from './boardArea'

export default function ListBoard() {

    const [boards, setBoards] = useState([]);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    function startItemList(findTitle) {

        localStorage.setItem('memberId', 'hong');

        boardList(findTitle)
            .then(res => {
                setBoards(res.data.data);
            })
    }

    function detailBoard(idx) {
        navigate('/detailBoard', { state: { boardId: idx } }); // 객체로 전달
    }

    function findKeyword() {
        let param = new Object();
        param.keyword = keyword;

        startItemList(param); // 게시글 검색
    }
    
    useEffect(() => {
        startItemList();
    }, [])

    useEffect(() => {
        findKeyword();
    }, [keyword]);

    return (
        <div>
            <h1>게시글 목록 페이지</h1>

            <input style ={
                {
                    'padding' : '10px',
                    'fontSize' : '20sp'
                }
            }
                type="text"
                placeholder='제목 검색하기'
                value={keyword}
                onChange={
                    e => setKeyword(e.target.value)
                } />

            <div className="table-container">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>추천수</th>
                            <th>작성자</th>
                            <th>생성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boards.map(
                            (item, index) => {
                                return (
                                    <tr key={index} onClick={e => { detailBoard(item.boardIdx - 1) }}>
                                        <td>{item.title}</td>
                                        <td>{item.boardGood}</td>
                                        <td>{item.memberId}</td>
                                        <td>{item.createdAt}</td>
                                    </tr>
                                )

                            }
                        )}
                    </tbody>
                </table>
            </div>

            <input type='button' value='글쓰기' onClick={() => navigate("/addBoard")} />
        </div >
    )
}