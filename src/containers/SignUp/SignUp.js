import { useState } from "react"
import { Input } from "../../components/Input/Input"


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
        console.log(e.target.name, e.target.value);
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4000/api/user/register', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const user = await res.json();
            console.log(user);
        } catch (error) {
            console.log('User registration failed!');
        }
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