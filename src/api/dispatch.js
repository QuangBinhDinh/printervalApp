import { beginCallApi, apiCallFail, apiCallSuccess } from "../store/Api/ApiAction";
import { _get } from "./axios";

//thunk function

/**
 * Hàm chung cho các api get
 * @param {*} dispatch 
 * @param {string} key Tên api dược gọi gọi (định danh)
 * @param {string} _url 
 * @param {function} _callback callback function duoc goi khi co data tra ve
 */
export const createGet = async (dispatch, key, _url, _callback = () => { }) => {
    let data;
    dispatch(beginCallApi(key, { url: _url }))
    try {
        data = await _get(_url);
        if (data.status == "successful") {
            dispatch(apiCallSuccess(key, { data }));
            _callback(data.result);//lay ket qua tra ve
        }
    } catch (err) {
        console.log("key : " + key + " " + err);
        dispatch(apiCallFail(key, { url: _url }))
    }
}

/**
 * Hàm chung cho các api post
 * @param {*} dispatch 
 * @param {string} key Tên api dược gọi gọi (định danh)
 * @param {string} _url 
 * @param {object} _data Body truyền lên (Object)
 * @param {function} _callback callback function duoc goi khi co data tra ve
 */
const createPost = async (dispatch, key, _url, _data, _callback = () => {
}) => {
    let payload = {
        url: _url,
        data: _data
    }
    dispatch(beginCallApi(key, payload))
    try {
        let response = await _post(_url, _data);
        dispatch(apiCallSuccess(key));
        _callback(response);
    } catch (err) {
        //console.log("key : " + key);
        dispatch(apiCallFail(key))
    }
}

// export { createGet2, createPost }