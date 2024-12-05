import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { boardList } from '../api/board';
import BoardArea from './boardArea'

export default function ListBoard() {

    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

    function startItemList() {
        boardList()
            .then(res => {
                console.log(res);
                setBoards(res.data.data);
            })
    }

    function detailBoard() {
        
    }

    useEffect(() => {
        startItemList();
    }, [])

    return (
        <div>
            <h1>게시글 목록 페이지</h1>

            {/** 게시글 리스트 */}
            {boards.map(
                (item, index) => (
                    <BoardArea key={index} item={item} index={index}
                    onClick={e=>detailBoard(e.target.value)}
                    ></BoardArea>
                )
            )}

            <input type='button' value='글쓰기' onClick={() => navigate("/addBoard")} />
        </div>
    )
}