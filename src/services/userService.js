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