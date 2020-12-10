import {FETCH_PROFILE_DATA, SAVE_PROFILE_DATA, saveProfileData} from "../modules/profile/profileActions";
import {getCardData, saveCardData} from "../../util/server/serverConversation";
import {getAuthToken} from "../modules/auth/authReducer";


export const profileMiddleware = (store) => (next) => async (action) => {
    const token = getAuthToken(store.getState());
    const payload = action.payload;

    if (action.type === SAVE_PROFILE_DATA) {
        payload.token = token;
        const response = await saveCardData(payload);

        if (response.success) {
            store.dispatch(saveProfileData(payload));
        }
    } else if (action.type === FETCH_PROFILE_DATA) {
        const response = await getCardData(token);

        if (response.success === undefined) {
            store.dispatch(saveProfileData(response));
        }
    }
    next(action);
}