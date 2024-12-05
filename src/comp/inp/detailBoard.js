import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { detailBoard } from '../api/board';
import { useLocation } from "react-router";
import '../css/DetailBoard.css'; 

export default function DetailBoard() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    //const [like, setLike] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    function startDetail() {
        const { state } = location; // location에서 state 가져오기

        const obj = { boardId: state.boardId + 1 }; // 객체 생성
        detailBoard(obj)
            .then(res => {
                if (res.data.code == '200') {
                    setTitle(res.data.data.title);
                    setContent(res.data.data.content);
                }
            })
    }


    useEffect(() => {
        startDetail();
    }, [])

    return (
        <div className="detail-container">
            <h1 className="detail-title">게시글 상세보기</h1>
            <div className="detail-content">
                <h2 className="detail-heading">{title}</h2>
                <p className="detail-text">{content}</p>
            </div>
            <button className="detail-button" onClick={() => navigate("/listBoard")}>
                목록으로
            </button>
        </div>
    );
}
