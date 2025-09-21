
interface InputProp {
    placeholder: string;
    type: string
}

export const Input = ({placeholder, type}:InputProp) => {
    return <input 
        placeholder={placeholder}
        type={type}
    />
}