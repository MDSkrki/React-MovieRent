import './Input.css';

export const Input = ({ inputType, update }) => {

    const [placeholder, id, name] = Array(3).fill(inputType);
    
    const type = () => {
        if (inputType === 'password') return 'password'
        return 'text';
    }

    return (
        <>
            <div className='Input'>
                <label htmlFor={id}>{id}: </label>
                <input type={type()} id={id} placeholder={placeholder} name={name} onBlur={update} />
            </div>
        </>
    )
}