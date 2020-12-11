export const UPLOAD_PROFILE_DATA = "loft-taxi/profile/UPLOAD_PROFILE_DATA";
export const FETCH_PROFILE_DATA = "loft-taxi/profile/FETCH_PROFILE_DATA";
export const UPDATE_PROFILE_DATA = "loft-taxi/profile/UPDATE_PROFILE_DATA";

export const uploadProfileData = (cardData) => ({
    type: UPLOAD_PROFILE_DATA,
    payload: cardData
});

export const fetchProfileData = () => ({type: FETCH_PROFILE_DATA});

export const updateProfileData = (cardData) => ({
    type: UPDATE_PROFILE_DATA,
    payload: cardData
});