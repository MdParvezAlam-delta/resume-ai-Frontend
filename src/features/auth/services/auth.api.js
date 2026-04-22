import axios from "axios"


const api = axios.create({
    baseURL: "https://resume-ai-backend-dh0x.onrender.com",
    withCredentials: true                                                                             // Axios by default doesn't give access to cookies .if we make it true then when we request to backend via the axios then the server has the access the cookies to read and set the data .
})

// Create the register Api for interaction frontend to backend
export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        return response.data

    } catch (err) {

        console.log(err)

    }

}

// Create the login Api for interaction frontend to backend
export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })

        return response.data

    } catch (err) {
        console.log(err)
    }

}

// Create the logout Api for interaction frontend to backend
export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        return response.data

    } catch (err) {

    }
}


// Create the getme Api for interaction frontend to backend
export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log(err)
    }

}