import FormLogin from "../../components/FormLogin/FormLogin"

export default function LoginPage(){
    const localStorage = window.localStorage;

    const adminUsers = [
        {email: import.meta.env.VITE_ADMIN1_USER, password: import.meta.env.VITE_ADMIN1_PASS},
        {email: import.meta.env.VITE_ADMIN2_USER, password: import.meta.env.VITE_ADMIN2_PASS}
    ]

    localStorage.setItem('admin_users', JSON.stringify(adminUsers));

    return(
        <div>
            <FormLogin adminUsers={adminUsers}/>
        </div>
    )
}