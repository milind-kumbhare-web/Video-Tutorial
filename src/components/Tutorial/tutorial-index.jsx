import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import { TutorialVideos } from "./tutorial-videos";
import { TutorialHome } from "./tutorial-home";
import { TutorialRegister } from "./tutorial-register";
import { TutorialLogin } from "./tutorial-login";
import { TutorialError } from "./tutorial-error";
import { TutorialManage } from "./tutorial-manage";
import { VideoDetails } from "./video-details";
import { AddVideo } from "./video-add";
import { VideoDelete } from "./video-delete";


export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className=" bg-dark text-white text-center p-1">
             <h1>React video tituriaal</h1>  
            </header>
            <section className="mt-2 row">
 <nav className="col-3">
 <div>
   <Link to="home">Home</Link>
   </div>
   <div>
    <Link to="register">Register</Link>
   </div>
   <div>
    <Link to="login">Login</Link>
   </div>
   <div>
    <Link to="video">Videos</Link>
   </div>
   <div>
    <Link to="manage">Manage Videos</Link>
   </div>
</nav>
<main className="col-9">
<Routes>
<Route path="/" element={<TutorialHome/>}></Route>
     <Route path="home" element={<TutorialHome/>}></Route>
    <Route path="login" element={<TutorialLogin/>}></Route>
    <Route path="register" element={<TutorialRegister/>}></Route>
    <Route path="video" element={<TutorialVideos/>}></Route>
    <Route path="error" element={<TutorialError/>}></Route>
    <Route path="manage" element={<TutorialManage/>}></Route>
    <Route path="details/:id" element={<VideoDetails/>}></Route>
    <Route path="addvideo" element={<AddVideo/>}></Route>
    <Route path="delete/:id" element={<VideoDelete/>}></Route>
</Routes>
</main>
 </section>
 </BrowserRouter>
 </div>
    )
}