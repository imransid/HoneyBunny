import { takeEvery, select, call, put } from "redux-saga/effects";
import actionType from "../constant/constant";
import { _all_Catagory } from "../saga_actions/Category";

const rootSaga = function* () {
  yield takeEvery(actionType.INIT_CATEGORY, _all_Catagory);
};

export default rootSaga;
