// 아이템 리스트 영역
import '../css/AreaBoard.css'; // CSS 파일 import

export default function AreaBoard(props) {
    const item = props.item;

    console.log('리스트:', props);

    return (
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
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.boardGood}</td>
                        <td>{item.memberId}</td>
                        <td>{item.createdAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
