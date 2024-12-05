import api from '../ax/axiosSetting'

/**
 * 아이템 리스트 or 카테고리별 아이템
 * @param {} obj 
 * @returns 
 */
export const itemList = (param) => {
    console.log('test : ', param);
    return api.get('/item/all', { 
        params: param
    });
}

/**
 * 추천 아이템
 * @param {} obj 
 * @returns 
 */
export const itemGood = (obj) => {
    return api.get('/item/good', {
        params: obj
    }
    );
}


