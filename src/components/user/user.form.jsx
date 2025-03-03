
import { Button,Input, notification} from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';





const UserForm = () => {

    const [fullName,setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhoneNumber] = useState("")

   
    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName,email,password,phone);
        
        if(res.data){
            notification.success({
                message: "creat user",
                description: "Tạo user thành công"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        
        console.log("check state",res.data)
    }

    return (
        <div className="user-form" style={{margin: "20px 0"}}>
            <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
                <div>
                    <span>FullName</span>
                    <Input 
                    value={fullName}
                    onChange={(event)=>{ setFullName(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input 
                    value={email}
                    onChange={(event) => {setEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                    value={password}
                    onChange={(event) => { setPassWord(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input 
                    value={phone}
                    onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>
                <div>
                    <Button 
                    onClick={handleClickBtn}
                    type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )

}

export default UserForm