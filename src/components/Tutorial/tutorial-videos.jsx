import { useNavigate } from "react-router-dom";

export function TutorialVideos(){
const navigate=useNavigate();
function handleSignout(){
    navigate("/login");
}
    return(
        <div>
            <h2 className="mt-3">Videos Home<span><button onClick={handleSignout} className="btn btn-link">signout</button></span></h2>
            <div className="d-flex mt-3">
                <div className="me-3">
                <iframe src="https://www.youtube.com/embed/vDWSdBN9Fu4" width="200" height="200" ></iframe>
                </div>
                <div className="me-3">
                <iframe src="https://www.youtube.com/embed/ekPbZqPvCRA" width="200" height="200" ></iframe>
                </div>
                <div className="me-3">
                <iframe src="https://www.youtube.com/embed/Sqa8Zo2XWc4" width="200" height="200" ></iframe>
                </div>
                <div className="me-3">
                <iframe src="https://www.youtube.com/embed/Tn6-PIqc4UM" width="200" height="200" ></iframe>
                </div>
                </div>
            
        </div>
    )
}