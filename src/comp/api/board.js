import api from '../ax/axiosSetting'

/**
 * 게시글 목록 갖고오기
 * @param {} obj 
 * @returns 
 */
export const boardList = (param) => {
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
    return api.post('/board/regist', JSON.stringify(obj))
}

/**
 * 게시글 상세보기
 * @param {} obj 
 * @returns 
 */
export const detailBoard = (param) => {
    return api.get('/board/find', { 
        params: param
    });
};

/**
 * 게시글 삭제하기
 * @param {*} obj 
 * @returns 
 */
export const deleteBoard = (obj) => {
    console.log('deleteBoard 실행');
    return api.post('/board/remove', JSON.stringify(obj))
}

/**
 * 게시글 수정하기
 * @param {*} obj 
 * @returns 
 */
export const reviseBoard = (obj) => {
    return api.post('/board/modify', JSON.stringify(obj))
}

/**
 * 게시글 좋아요하기
 * @param {*} obj 
 * @returns 
 */
export const goodBoard = (obj) => {
    return api.post('/board/good', JSON.stringify(obj))
}