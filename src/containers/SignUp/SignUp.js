import { useState } from "react"
import { Input } from "../../components/Input/Input"
import { createUser } from "../../services/userService"


export const SignUp = () => {

    // Hooks
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
        await createUser(form);
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