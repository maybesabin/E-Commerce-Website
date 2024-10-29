interface userData {
    firstName: string,
    email: string,
    password: string
}

export const saveUserToLocalStorage = (userData: userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
}

export const getUserFromLocalStorage = () => {
    const data = localStorage.getItem("user")
    return data ? JSON.parse(data) : null;
}
