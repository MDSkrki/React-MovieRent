import jwtDecode from "jwt-decode";

export const createUser = async (formData) => {
    try {
        const res = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const user = await res.json();
        return user;
    } catch (error) {
        console.log('User registration failed!');
    }
}

export const loginUser = async (formData) => {
    try {
        const res = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const {token} = await res.json();
        if (token) return tokenDecoder(token);
    } catch (error) {
        console.log('User Login has failed');
    }
}

const tokenDecoder = (token) => {
    try {
        const user = jwtDecode(token);
        return {id: user.id, username: user.username};
    } catch (error) {
        console.log(error);
    }
    
}