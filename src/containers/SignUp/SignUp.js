import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/Input"
import { createUser } from "../../services/userService"
import { actionCreator } from "../../store/actionCreator"
import { OPEN_BANNER } from "../../store/types"


export const SignUp = () => {

    // Hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        username: '',
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

    const openBanner = (user) => {
        dispatch(actionCreator(OPEN_BANNER, `${user.username} has been registered successfully`))
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const user = await createUser(form);
        if (user) {
            openBanner(user);
            navigate('/login');
        };
    }
    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={formSubmit}>
                <Input inputType='username' update={updateForm} />
                <Input inputType='email' update={updateForm} />
                <Input inputType='password' update={updateForm} />
                <button>Submit</button>
            </form>
        </>
    )
}