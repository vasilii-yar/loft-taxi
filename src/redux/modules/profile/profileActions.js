export const SAVE_PROFILE_DATA = "loft-taxi/profile/SAVE_PROFILE_DATA";
export const FETCH_PROFILE_DATA = "loft-taxi/profile/FETCH_PROFILE_DATA";

export const saveProfileData = (cardData) => ({
    type: SAVE_PROFILE_DATA,
    payload: cardData
});

export const fetchProfileData = () => ({type: FETCH_PROFILE_DATA});