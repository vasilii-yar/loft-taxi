export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const TRY_AUTH = "TRY_AUTH";
export const TRY_REGISTERING = "TRY_REGISTERING";

export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
export const tryAuth = (email, password) => ({
    type: TRY_AUTH,
    payload: {
        email,
        password
    }
});
export const tryRegistering = (email, password, name, surname) => ({
   type: TRY_REGISTERING,
   payload:  {
       email,
       password,
       name,
       surname
   }
});