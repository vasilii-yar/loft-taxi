export const SHOW_ERROR = "loft-taxi/error/SHOW_ERROR";
export const CLOSE_ERROR = "loft-taxi/error/CLOSE_ERROR";

export const showError = (errorMessage) => ({
    type: SHOW_ERROR,
    payload: errorMessage
});

export const closeError = () => ({type: CLOSE_ERROR});