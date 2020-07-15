import { takeEvery, select, call, put } from "redux-saga/effects";

import actionType from "../constant/constant";

async function UpdateLoginAsync() {
  try {
  } catch (error) {
    console.log("AsyncStorage error during token store:", error);
  }
}

export const _requestToCategory = () =>
  fetch(`http://localhost:8080/api/product/categories`);

export const _all_Catagory = function* (action) {
  try {
    const all_Category = yield call(_requestToCategory);
    const List_Of_All_Category = yield all_Category.json();

    yield put({
      type: actionType.ALL_CATEGORY_LOADED_FROM_API,
      categorie: List_Of_All_Category.data,
    });
  } catch (err) {
    console.log("ERROR IS _all_Catagory ", err);
  }
};
