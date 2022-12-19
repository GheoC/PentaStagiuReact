import {useRegistrationReducer} from "../../containers/useRegistrationReducer";
import {createUser} from "../../containers/api";

function Registration() {
    const {firstName, lastName, email, phoneNumber, password, dispatch} = useRegistrationReducer();

    return <>
        <div>
            <label htmlFor="firstName">please enter first name: </label>
            <input value={firstName}
                   type='text'
                   id='firstName'
                   onChange={(event) => {
                       dispatch({type: 'UPDATE_FIRST_NAME', payload: event.target.value});
                   }}/>
        </div>
        <br/>
        <div>
            <label htmlFor="lastName">please enter last name: </label>
            <input value={lastName}
                   type='text'
                   id='lastName'
                   onChange={event => {
                       dispatch({type: 'UPDATE_LAST_NAME', payload: event.target.value});
                   }}/>
        </div>

        <br/>
        <div>
            <label htmlFor="email">please enter email: </label>
            <input value={email}
                   type='email'
                   id='email'
                   onChange={event => {
                       dispatch({type: 'UPDATE_EMAIL', payload: event.target.value});
                   }}/>
        </div>

        <br/>
        <div>
            <label htmlFor="phoneNumber">please enter phone number: </label>
            <input value={phoneNumber}
                   type='text'
                   id='phoneNumber'
                   onChange={event => {
                       dispatch({type: 'UPDATE_PHONE', payload: event.target.value});
                   }}/>
        </div>

        <br/>
        <div>
            <label htmlFor="password">please enter password: </label>
            <input value={password}
                   type='text'
                   id='password'
                   onChange={event => {
                       dispatch({type: 'UPDATE_PASSWORD', payload: event.target.value});
                   }}/>
        </div>

        <br/>
        <button onClick={() => createUser(firstName, lastName, email, phoneNumber, password)}>Register</button>
    </>
}

export default Registration;