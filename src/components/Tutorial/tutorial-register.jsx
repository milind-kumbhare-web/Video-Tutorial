import { useState } from "react";
import { useFormik} from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Formik,Form,Field,ErrorMessage} from "formik";
import { BrowserRouter, Routes,Route,Link } from "react-router-dom";
import * as yup from "yup";
export function TutorialRegister(){
        
    const [colorClass,setColorClass]=useState('');
    const [userError,setUserError]=useState('');
    const [users,setUsers]=useState([]);
    const navigate= useNavigate();
    const formik= useFormik({
    initialValues:{
        "UserId":"",
        "UserName":"",
        "Password":"",
        "Age":0,
        "Email":"",
        "Mobile":""
        },
        onSubmit:(values)=>{
          axios({
            method: "post",
            url:"http://127.0.0.1:5000/registercustomer",
            data:values
        }) ,

        alert("Registered Successfully..");
        navigate("/login");
        },
        validationSchema:yup.object({
            "UserId":yup.string()
            .required("UserId is required"),
            "Username":yup.string()
            .required("UserName is required")
            .min(4,"Name is too short")
            .max(10,"Name too long"),
            "Password":yup.string()
            .required("Password is required")
            .min(4,"Name is too short")
            .max(10,"Name too long"),
            "Age":yup.number()
            .required("Age is required"),
            "Email":yup.string()
            .required("Email is required"),
            "Mobile":yup.string()
            .required("Mobile is required")
            .matches(/\+91\d{10}/,"Invalid mobile number")
            
         })

    })

    function VerifyUserId(e){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/customer"
        })
        .then(response=>{
            setUsers(response.data);
            for(var user of users){
                if(user.UserId===e.target.value){
                    setUserError('User id taken -try another');
                    setColorClass('text-danger')
                    break;
                } else{
                    setUserError('User id Available');
                    setColorClass('text-success');
                }  
            }

        })
    }
    return(
        <div>
            <h2>Register User</h2>
       <form onSubmit={formik.handleSubmit}>
    <dl>
        <dt>User Id</dt>
        <dd><input type="text" onKeyUp={VerifyUserId} name="UserId" onChange={formik.handleChange}/></dd>
        <dd className={colorClass}>{userError}</dd>
        <dd className="text-danger">{formik.errors.UserId}</dd>
        <dt>User Name</dt>
        <dd><input type="text" name="UserName" onChange={formik.handleChange}/></dd>
        <dd className="text-danger">{formik.errors.Username}</dd>
        <dt>Password</dt>
        <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
        <dd className="text-danger">{formik.errors.Password}</dd>
        <dt>Age</dt>
        <dd><input type="number" name="Age" onChange={formik.handleChange}/></dd>
        <dd className="text-danger">{formik.errors.Age}</dd>
        <dt>Email</dt>
        <dd><input type="email" name="Email" onChange={formik.handleChange}/></dd>
        <dd className="text-danger">{formik.errors.Email}</dd>
        <dt>Mobile</dt>
        <dd><input type="text" name="Mobile" onChange={formik.handleChange}/></dd>
        <dd className="text-danger">{formik.errors.Mobile}</dd>
    </dl>
    <button  className="btn btn-primary">Register</button>
    <p>
        <Link to="/login">Existing User Login</Link>
    </p>
    </form>
    </div>
    )
}