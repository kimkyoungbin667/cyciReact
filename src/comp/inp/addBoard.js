import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../css/AddBoard.css'; // 스타일 파일 import
import { addBoard } from '../api/board';

export default function AddBoard() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    function writeBoard() {
        const obj = new Object();
        obj.title = title;
        obj.content = content;
        obj.memberId = "hong"

        addBoard(obj)
        .then(res => {
            navigate("/listBoard")
        })
    }

    return (
        <div className="add-board-container">
            <h1 className="add-board-title">게시글 추가 페이지</h1>

            <div className="add-board-form">
                <input type="text" placeholder="제목" className="add-board-input" 
                value={title} onChange={e=>setTitle(e.target.value)}/>
                <textarea placeholder="내용" className="add-board-textarea" value={content}
                onChange={e=>setContent(e.target.value)}></textarea>
                <input type="button" value="글쓰기" className="add-board-button" onClick={writeBoard} />
            </div>
        </div>
    );
}
