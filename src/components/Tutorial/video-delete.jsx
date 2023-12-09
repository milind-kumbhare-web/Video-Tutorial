import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export function VideoDelete(){
    const[videos,setVideos]=useState([{id:0,title:'',url:'',views:0,likes:0,subscribed:false}]);
    const params=useParams();
    const navigator=useNavigate();
    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:5566/videos/${params.id}`
        }).then((response)=>{
            setVideos(response.data);
        })
         },[]);
        function handleDelete(){
        axios({
            method:"delete",
            url:`http://127.0.0.1:5566/deletevideo/${params.id}`
        })
        navigator("/manage");
     }
        return(
        <div>
        <h3>Delete Video? Are you sure<button className="btn btn-danger" onClick={handleDelete}>Yes</button><Link className="btn btn-warning" to="/manage">No</Link></h3>
        <div className="card w-50">
        <div className="card-header">
        <h3>{videos[0].title}</h3>
        </div>
        <div className="card-body">
         <iframe src={videos[0].url} width="100%" height="200"></iframe>

        </div>
        <div className="card-footer">
         <span className="bi bi-eye-fill"></span>[{videos[0].views}] Views
         <span className="bi bi-hand-thumbs-up"></span>[{videos[0].likes}] Likes
        </div>
        </div>
         
     </div>
    )
}