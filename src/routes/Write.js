import React from "react";
import { useState } from "react";
import { dBService } from "fbsetting";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [main, setMain] = useState("");

  const onChange = (event) => {
    const {target:{name, value}} = event;

    if(name === "main_title") {
      setTitle((current) => {
        current = value;
        return current;
      })
    }

    else if(name === "sub_title") {
      setSubTitle((current) => {
        current = value;
        return current;
      })
    }

    else if(name === "main") {
      setMain((current) => {
        current = value;
        return current;
      })
    }
  }

  const onSubmit = async(event) => {
    // ! sweetalert2 확인 창 
    Swal.fire({
      title: '포스트를 발해하시겠습니까?',
      icon: 'question',
      showCancelButton:true,
      confirmButtonColor: '#4B088A',
      cancelButtonColor:'#01DF01',
      confirmButtonText:'발행',
      cancelButtonText:'취소'
    }).then((result) => {
      if(result.value) {
        dBService.collection('nweets').add({
          title,
          subTitle,
          main,
          createdAt : Date.now()
        });

        Swal.fire(
          '발행 완료',
          '포스트를 발행했습니다',
          'success'
        );

        const dbDiary = await dBService.collection("nweets").get;

        const currentIndex = dbDiary.length();
        
        navigate(`/read-diray/${currentIndex}`);
      }
    })
    

    // 발행 완료 후 이 페이지로 돌아가기 (Redirect?)
  }

  return(
    <>
    <form onSubmit={(e) => {e.preventDefault();}}>
      <input
        name="main_title"
        id="main_title"
        type={"text"}
        required
        value={title}
        onChange={onChange}
      />
      <input
        name="sub_title"
        id="sub_title"
        type={"text"}
        value={subTitle}
        onChange={onChange}
      />
      <input
        name="main"
        id="main"
        type={"text"}
        required
        value={main}
        onChange={onChange}
      />
      <input 
        id="diary_submit"
        className="submit_button"
        type={"submit"}
        onSubmit={onSubmit}
      />
    </form>
    </>
  )
}

export default Write;