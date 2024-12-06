import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { detailBoard, deleteBoard, goodBoard } from '../api/board';
import { useLocation } from "react-router";
import '../css/DetailBoard.css';

export default function DetailBoard() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [writer, setWriter] = useState('');
    const [like, setLike] = useState();
    const [boardId, setBoardId] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location; // location에서 state 가져오기

    const nowMemberId = localStorage.getItem('memberId');

    function startDetail() {

        const obj = { boardId: state.boardId + 1 }; // 객체 생성
        detailBoard(obj)
            .then(res => {
                if (res.data.code == '200') {
                    console.log(res.data.data);
                    setTitle(res.data.data.title);
                    setContent(res.data.data.content);
                    setWriter(res.data.data.memberId);
                    setLike(res.data.data.boardGood);
                    setBoardId(res.data.data.boardId);
                }
            })
    }

    function deleteAction(boardId) {
        const obj = new Object();
        obj.boardId = boardId;

        deleteBoard(obj)
            .then(res => {
                navigate("/listBoard");
            })
    }

    function goReviseBoard(boardId) {
        navigate('/reviseBoard', { state: { boardId: boardId } }); // 객체로 전달
    }

    function goodUp(boardId) {
        console.log(boardId);
    }

    //게시글 추천하기
    function changeItem(boardId) {
        //const copyItems = [...items];
        //copyItems[boardId - 1] = { ...copyItems[boardId - 1], good: copyItems[boardId - 1].good + 1 };
        //setItems(copyItems);

        let obj = new Object();
        obj.boardId = boardId;

        goodBoard(obj);
    }
    useEffect(() => {
        startDetail();
    }, [])

    return (
        <div className="detail-container">
            <h1 className="detail-title">게시글 상세보기</h1>
            <p className="detail-text">작성자 : {writer}</p>
            <div className="detail-content">
                <h2 className="detail-heading">{title}</h2>
                <p className="detail-text">{content}</p>
                <a onClick={
                    e => {
                        e.preventDefault();
                        goodUp(boardId);
                    }
                }>👍 추천 </a>{like}
                {/* 조건부 렌더링 */}
                {writer === nowMemberId && (
                    <div>
                        <button className="detail-button" onClick={() => goReviseBoard(state.boardId + 1)}>
                            수정
                        </button>
                        <button className="detail-button" onClick={() => deleteAction(state.boardId + 1)}>
                            삭제
                        </button>
                    </div>
                )}
            </div>
            <button className="detail-button" onClick={() => navigate("/listBoard")}>
                목록으로
            </button>
        </div>
    );
}
