import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/Input"
import { useBanner } from "../../hooks/useBanner"
import { loginUser } from "../../services/userService"
import { actionCreator } from "../../store/actionCreator"
import { USER_LOGGED } from "../../store/types"

export const Login = () => {

    // Hooks
    const banner = useBanner();
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

    const logUser = (user) => {
        dispatch(actionCreator(USER_LOGGED, user))
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(form);
        logUser(user);
        banner('You have successfully logged in!');
        navigate('/');
        } catch (error) {
            console.log(error);
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