import { ADD_USER_NAME, CHANGE_PENALTY_VALUE, CALCULATE_TOTAL } from "./actionTypes";

let nextUserId = 0;

export const addUserName = content => ({
  type: ADD_USER_NAME,
  userData: {
    id: ++nextUserId,
    content
  }
});

export const changePenaltyValue = penalty => ({
    type: CHANGE_PENALTY_VALUE,
    penalty
});

export const calculateTotal = total => ({
  type: CALCULATE_TOTAL,
  total
});

