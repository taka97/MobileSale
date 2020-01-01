const initState = {
  name: "Nguyễn Văn A",
  phone: "0962345678",
  address: [
    "227 Nguyễn Văn Cừ, p4, q3, tp HCM",
    "Khu phố 6, Phường Linh Trung, Quận Thủ Đức, Hồ Chí Minh"
  ],
  addressActiveIndex: 0,
  paymentMethod: "ATM",
  order: []
};

export default function user(state = initState, action) {
  switch (action.type) {
    case "GET_GENERAL_INFO":
      return {
        ...state,
        name: action.payload.name,
        phone: action.payload.phone,
        address: action.payload.splice(0)
      };
    case "UPDATE_ACTIVE_ADDRESS_INDEX":
      return {
        ...state,
        addressActiveIndex: action.payload
      };
    case "UPDATE_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.payload
      };
    default:
      return state;
  }
}
