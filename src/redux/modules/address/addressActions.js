export const TRY_FETCH_ADDRESS_LIST = "loft-taxi/address/TRY_FETCH_ADDRESS_LIST";
export const FETCH_ADDRESS_LIST_SUCCESS = "loft-taxi/address/FETCH_ADDRESS_LIST_SUCCESS";

export const tryFetchAddress = () => ({type: TRY_FETCH_ADDRESS_LIST});
export const fetchAddressSuccess = (addressList) => ({
    type: FETCH_ADDRESS_LIST_SUCCESS,
    payload: addressList
});