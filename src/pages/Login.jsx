import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate()

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem("isSignedIn", true)
        navigate("/favoriteMovies", {replace: true})
    }

    return (
        <form className="flex flex-col gap-y-4 max-w-56 mx-auto" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formData.username} className="border border-black p-2" type="text" name="username" placeholder="username" />
            <input onChange={handleChange} value={formData.password} className="border border-black p-2" type="password" name="password" placeholder="password"/>
            <button className="px-4 py-2 bg-slate-200">Submit</button>
        </form>
    )
}