import { useEffect, useState } from "react";
import { BrowserRouter,Link, Routes } from "react-router-dom";
import axios from "axios";

export function TutorialManage(){
    const[videos,setVideos]=useState([]);
useEffect(()=>{
    axios({
        method:'get',
        url:'http://127.0.0.1:5566/videos'
    }).then((response)=>{
        setVideos(response.data);
    })
},[]);
    return(
        <div className="container-fluid">
            <h2>Manage Videos</h2>
            <div className="mb-2">
                <Link to="/addvideo" className="btn btn-info">Add New Video</Link>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Actions</th>
                    </tr>
                </thead>
               <tbody>
               {
                 videos.map(video=>
                   <tr key={video.id}>
                    <td>{video.title}</td>
                    <td>
                        <iframe width="100" height="100" src={video.url}></iframe>
                    </td>
                    <td>
                        <Link to={`/details/${video.id}`} className="btn btn-primary">
                            <span className="bi bi-eye"></span>Details
                        </Link>
                        <Link to={`/delete/${video.id}`} className="btn btn-danger ms-2">
                            <span className="bi bi-trash"></span>Delete
                        </Link>
                    </td>
                   </tr>
                    )
               }
               </tbody>
            </table>
        </div>
    )
}