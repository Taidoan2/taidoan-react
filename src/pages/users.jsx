import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";




const UsersPage = () => {
    return (
   
            <div style={{padding: "30px"}}>
                <UserForm/>
                <UserTable/>
            </div>
       
    )

}

export default UsersPage;