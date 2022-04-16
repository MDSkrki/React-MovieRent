export const apiConsumer = async (method, uri, body) => {
    const options = {
        method,
    }
    if (method === 'POST') {
        options.body = JSON.stringify(body);
        options.headers = {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await fetch(uri ,options);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}