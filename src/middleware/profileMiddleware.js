import {SAVE_PROFILE_DATA, saveProfileData} from "../actions/profileActions";
import {saveCardData} from "../util/server/serverConversation";


export const profileMiddleware = (store) => (next) => async (action) => {
    if (action.type === SAVE_PROFILE_DATA) {
        const response = saveCardData(action.payload);

        if (response.success) {
            store.dispatch(saveProfileData(action.payload));
        }
    }
    next(action);
}