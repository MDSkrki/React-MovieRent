import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/Input"
import { loginUser } from "../../services/userService"
import { actionCreator } from "../../store/actionCreator"
import { OPEN_BANNER, USER_LOGGED } from "../../store/types"

export const Login = () => {

    // Hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    // Handlers
    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const openBanner = () => {
        dispatch(actionCreator(OPEN_BANNER, `Login was successful!`));
    }

    const logUser = (id) => {
        dispatch(actionCreator(USER_LOGGED, id))
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const userId = await loginUser(form);
        if (userId) {
            logUser(userId);
            openBanner();
            navigate('/');
        }
    }

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={formSubmit}>
                <Input inputType='email' update={updateForm} />
                <Input inputType='password' update={updateForm} />

                <button>Login</button>
            </form>
        </>
    )
}