import {logIn, TRY_AUTH, TRY_REGISTERING} from "../actions/authActions";
import {doLogin, doRegister} from "../util/server/serverConversation";


export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === TRY_AUTH) {
        const {email, password} = action.payload;
        const response = await doLogin(email, password);

        if (response.success) {
            store.dispatch(logIn());
        }
    } else if (action.type == TRY_REGISTERING) {
        const {email, password, name, surname} = action.payload;
        const response = await doRegister(email, password, name, surname);

        if (response.success) {
            store.dispatch(logIn());
        }
    } else {
        next(action);
    }
}