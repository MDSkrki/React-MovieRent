export const createUser = async (formData) => {
    try {
        const res = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        //const user = await res.json(); Commented line because i might need the registered user later
    } catch (error) {
        console.log('User registration failed!');
    }
}