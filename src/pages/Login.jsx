import { useState } from "react"

export function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form className="flex flex-col gap-y-4 max-w-56 mx-auto" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formData.username} className="border border-black p-2" type="text" name="username" placeholder="username" />
            <input onChange={handleChange} value={formData.password} className="border border-black p-2" type="password" name="password" placeholder="password"/>
            <button className="px-4 py-2 bg-slate-200">Submit</button>
        </form>
    )
}