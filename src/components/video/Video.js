import React ,{useState,useEffect} from "react";

function Video() {
  const[videos,setVideos] =useState([])

  useEffect(() => {
    fetch("videoData.json")
    .then(response => response.json())
    .then(data => setVideos (data))
    .catch(error => console.error("problem with fetching data!!",error))
  },[])

  return (
    <div className="container">...
      <div className="row">
        {
          videos.map((video,key) => (

          <div  key={key} className="col-md-4">
          <a href={`https://youtube.com/watch?v=${video.img_id}`}>
              <div className="card" >
  <img
   src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`} 
   alt={video.title}
   />
  <div className="card-body">
    <h5 className="card-title">{video.title}</h5>
    <p className="card-text">{video.channelName}</p>
    <small>
      {video.viewCount} views - {video.likesCount} likes -{""}
      {video.duration}map
    </small>
  </div>
</div>
</a>
        </div>
       
          ))
        }
      </div>
    </div>
  );
}

export default Video;
