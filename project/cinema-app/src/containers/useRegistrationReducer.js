import {useReducer} from "react";
import registrationReducer, {initialUserState} from "./registrationReducer";

export function useRegistrationReducer() {
    const [state, dispatch] = useReducer(
        registrationReducer,
        {...initialUserState},
        () => ({...initialUserState})
    );

    return {...state, dispatch};
}