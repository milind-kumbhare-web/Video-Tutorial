import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function AddVideo()
{
    var navigator=useNavigate();
const formik=useFormik({

    initialValues:{
        id:0,
        title:'',  
        url:'',
        likes:0,
        views:0,
       subscribed:false
    },
    onSubmit:(values)=>{
        axios({
            method:'post',
            url:"http://127.0.0.1:5566/addvideo",
            data:values
        })
        alert(`Video Added Successfully`);
        navigator("/manage");
    }
      
});
    return(
        <div>
            <h2>Add New Video</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="text" name="id" onChange={formik.handleChange}/></dd>
                    <dt>Title</dt>
                    <dd><input type="title" name="title" onChange={formik.handleChange}/></dd>
                    <dt>Url</dt>
                    <dd><input type="text" name="url" onChange={formik.handleChange}/></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" name="likes" onChange={formik.handleChange}/></dd>
                    <dt>Views</dt>
                    <dd><input type="number" name="views" onChange={formik.handleChange}/></dd>
                    <dt>Subscriber</dt>
                    <dd className="form-switch">
                        <input  className="form-check-input" type="checkbox" name="subscribed" onChange={formik.handleChange}/>
                        </dd>
                </dl>
                <button className="btn btn-primary">Add Video</button>
            </form>
        </div>
    )
}