export const initialUserState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
};

const registrationReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIRST_NAME':
            return {...state, firstName: action.payload};
        case 'UPDATE_LAST_NAME':
            return {...state, lastName: action.payload};
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload};
        case 'UPDATE_PHONE':
            return {...state, phoneNumber: action.payload};
        case 'UPDATE_PASSWORD':
            return {...state, password: action.payload};
        default:
            return {...state};
    }
}

export default registrationReducer;