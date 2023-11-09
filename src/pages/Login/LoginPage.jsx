import FormLogin from "../../components/FormLogin/FormLogin"

export default function LoginPage(){
    const localStorage = window.localStorage;

    const adminUsers = [
        {email: "dcueto14.info@gmail.com", password: '1234abcd'},
        {email: "mat.rib.lima@gmail.com", password: '1234abcd'}
    ]

    localStorage.setItem('admin_users', JSON.stringify(adminUsers));

    return(
        <div>
            <FormLogin adminUsers={adminUsers}/>
        </div>
    )
}