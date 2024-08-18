import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MusicCart from "../Components/MusicCart";

export default function Music() {
  const [musicData, setMusicData] = useState([]);

  const navigate = useNavigate();

  const getAllMusic = () => {
    axios
      .get("http://103.104.74.215:3003/api/get_music")
      .then((response) => {
        setMusicData(response.data.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getAllMusic();
   
  }, [0]);

  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
          <div className="row">
            {musicData.map((musicInfo) =>
              musicInfo.music &&
              musicInfo.music.length > 1 &&
              musicInfo.music[1]?.filename ? (
                <MusicCart musicInfo={musicInfo}/>
               
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
