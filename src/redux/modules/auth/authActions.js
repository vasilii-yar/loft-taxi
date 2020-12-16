export const LOG_IN = "loft-taxi/auth/LOG_IN";
export const LOG_OUT = "loft-taxi/auth/LOG_OUT";
export const TRY_AUTH = "loft-taxi/auth/TRY_AUTH";
export const TRY_REGISTERING = "loft-taxi/auth/TRY_REGISTERING";

export const logIn = (token) => ({
    type: LOG_IN,
    payload: token
});
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