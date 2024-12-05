import api from '../ax/axiosSetting'

/**
 * 아이디 중복 체크
 * @param {id: 검사 아이디} obj
 * @returns 
 */
export const memberIdCheck = (obj) => {
    //post로 보낼땐 JSON.stringify() 써야함
    return api.post('/member/findId', JSON.stringify(obj),
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
}

/**
 * 로그인
 * @param {id: 아이디, pw: 비밀번호} obj
 * @returns 
 */
export const login = (obj) => {
    //post로 보낼땐 JSON.stringify() 써야함
    return api.post('/member/login', JSON.stringify(obj),
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
}

/**
 * 지역 리스트 불러오기
 * @returns
 */
export const areaList = () => {
    return api.get('/area/list');
}

/**
 * 회원가입 기능
 * @param {
 'userId' : 아이디,
'userPw' : password,
'userName' : name,
'email' : email,
'gender' : gender,
'birth' : birth,
'areaIdx' : areas
 * }
 * @returns 
 */
export const memberRegist = (obj) => {
    return api.post('/member/regist', JSON.stringify(obj))
}

export const memberLogin = (obj) => {
    return api.post('member/login', JSON.stringify(obj))
}