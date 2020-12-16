import {logIn, TRY_AUTH, TRY_REGISTERING} from "../modules/auth/authActions";
import {doLogin, doRegister} from "../../util/server/serverConversation";


export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === TRY_AUTH) {
        const {email, password} = action.payload;
        const response = await doLogin(email, password);

        if (response.success) {
            store.dispatch(logIn(response.token));
        }
    } else if (action.type === TRY_REGISTERING) {
        const {email, password, name, surname} = action.payload;
        const response = await doRegister(email, password, name, surname);

        if (response.success) {
            store.dispatch(logIn());
        }
    }
    next(action);
}