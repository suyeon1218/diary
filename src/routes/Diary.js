import { async } from "@firebase/util";
import React from "react";
import { useState, useEffect } from "react";
import { dBService } from "fbsetting";
import { Link } from "react-router-dom";

//!다이어리 여러개를 보여줌
const Diary = () => {
  const [diaries, setDiaries] = useState([]);

  useEffect(async() => {
    const dbDiary = await dBService.collection("nweets").get;

    dbDiary.forEach((document) => {
      const diaryObj = {
        ...document.data(),
        id:document.id
      };

      setDiaries((prev) => {
        prev = [diaryObj, ...prev];
        return prev;
      })
    })
  }, []);
  

  return(
    <>
    <Link tp='/write'>
      <button>Write</button>
    </Link>
    
    </>
  )
}

export default Diary;