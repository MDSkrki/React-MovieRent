import jwtDecode from "jwt-decode";
import { apiConsumer } from "./apiConsumer";
import { userLoginPath, userSignUpPath } from "./uri";

export const createUser = async (formData) => {
    try {
        const user = await apiConsumer('POST', userSignUpPath, formData);
        return user;
    } catch (error) {
        console.log('User registration failed!');
    }
}

export const loginUser = async (formData) => {
    try {
        const {token} = await apiConsumer('POST', userLoginPath, formData);
        if (token) return tokenDecoder(token);
    } catch (error) {
        console.log('User Login has failed');
    }
}

const tokenDecoder = (token) => {
    try {
        const user = jwtDecode(token);
        return user;
    } catch (error) {
        console.log(error);
    }
}