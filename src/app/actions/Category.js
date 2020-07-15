import actionType from "../constant/constant";

//
export function init_category() {
  return {
    type: actionType.INIT_CATEGORY,
  };
}

export function letast_wallet(data) {
  return {
    type: actionType.WALLET_CARD,
    result: data,
  };
}

export function Init_Wallet() {
  return {
    type: actionType.ADD_WALLET_CARD_SUCCESSFULLY,
  };
}
