import { _get, _post } from "../../api";
import { createGet, createPost } from "../../api/dispatch";
import { beginCallApi, apiCallFail, apiCallSuccess } from "../../store/Api/ApiAction";

const getAllProduct = (_callback) => async dispatch => {
    await createGet(dispatch, 'GET_ALL_PRODUCT', 'product/recommendation/483ab3a966d5a03d?product_id=39&page_size=20', _callback)
}

const getProductById = (_params, _callback) => async dispatch => {
    await createGet(dispatch, 'get_all_product', 'product', _params, _callback)
}

export { getAllProduct, getProductById }