import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/Input"
import { useBanner } from "../../hooks/useBanner"
import { createUser } from "../../services/userService"


export const SignUp = () => {

    // Hooks
    const banner = useBanner();
    const navigate = useNavigate();
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

    const formSubmit = async (e) => {
        e.preventDefault();
        const user = await createUser(form);
        if (user) {
            banner(user.username);
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