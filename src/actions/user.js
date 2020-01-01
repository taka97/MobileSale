// load general info from user
// includes: name, phone, address
export const getGeneralInfo = () => ({
  type: "GET_GENERAL_INFO"
});

export const updateActiveAddress = index => ({
  type: "UPDATE_ACTIVE_ADDRESS_INDEX",
  payload: index
});

export const updatePaymentMethod = method => ({
  type: "UPDATE_PAYMENT_METHOD",
  payload: method
});
