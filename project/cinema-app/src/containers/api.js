export const createUser = async (firstName, lastName, email, phoneNumber, password) => {
    debugger;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        })
    }
    const response = await fetch('http://localhost:8080/api/v1/users', requestOptions);
    const data = await response.json();
    console.log(data);
}

//export default createUser;