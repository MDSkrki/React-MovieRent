import { useEffect, useState } from "react"
import { Input } from "../../components/Input/Input"


export const SignUp = () => {

    // Hooks
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        console.log(form);
    }, [form]);

    // Handlers
    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.name, e.target.value);
    }



    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <Input inputType='username' update={updateForm} />
                <Input inputType='email' update={updateForm} />
                <Input inputType='password' update={updateForm} />
            </form>
        </>
    )
}