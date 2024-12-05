import api from '../ax/axiosSetting'

/**
 * 게시글 목록 갖고오기
 * @param {} obj 
 * @returns 
 */
export const boardList = (param) => {
    console.log('boardList 호출 : ', param);
    return api.get('/board/list', { 
        params: param
    });
}

/**
 * 게시글 작성하기
 * @param {} param 
 * @returns 
 */
export const addBoard = (obj) => {
    console.log('addBoard 호출 : ');
    return api.post('/board/regist', JSON.stringify(obj))
}