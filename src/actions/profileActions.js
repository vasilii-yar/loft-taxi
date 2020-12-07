export const SAVE_PROFILE_DATA = "SAVE_PROFILE_DATA";

export const saveProfileData = ({cardData}) => ({
    type: SAVE_PROFILE_DATA,
    payload: cardData
});