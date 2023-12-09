import { Link, useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import { useCookies } from "react-cookie";
import axios from "axios";
export function TutorialLogin(){
    const [cookies,setCookie,removeCookie]=useCookies();
const navigate=useNavigate(); 
const formik=useFormik({
    initialValues:{
        "UserId":"",
        "Password":""
    },
    onSubmit:(customer)=>{
     axios({
        method:"get",
        url: "http://127.0.0.1:5000/customer"
     })
     .then(response=>{
        for(var user of response.data){
            if(user.UserId==customer.UserId && user.Password==customer.Password)
            {
                setCookie("userid",customer.UserId,{expires:new Date('2023-12-4 23:33:24')});
                 navigate("/video");
                 break;
             
            }else{
                navigate("/error");
                
            }
        }
     })
    }
})

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
               <dl>
                <dt>User Id</dt>
                <dd><input type="text"  name="UserId" onChange={formik.handleChange}/></dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
                </dl> 
                <button className="btn btn-primary">Login</button>
                <p>
                    <Link to="/register">New User Register</Link>
                </p>
            </form>
        </div>
    )
}