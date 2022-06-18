import React from "react";
import { useState } from "react";
import { authService } from "fbsetting";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPass, setAgainPass] = useState("");
  const [passEqaul, setPassEqaul] = useState(null);

 // ! 정규식들 
  function email_check(email) { 
    const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g;

    return(reg.test(email));
  }

  function nickname_check(name) {
    const reg = /[a-zA-Z0-9가-힣]{2,8}/;

    return(reg.test(name));
  }

  function password_check(password) {
    const reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-_])[a-zA-Z\d!@#$%^&*-_]{8,20}/i;

    return(reg.test(password));
  }
  // ! 정규식들 ------


  // ? onChange 함수
  const onChange = (event) => {
    const {target:{name, value}} = event;

    if(name === "nickname") {
      setNickName((current) => {
        current = value;
        return current;
      })
    }

    else if (name === "email") {
      setEmail((current) => {
        current = value;
        return current;
      })
    }

    else if (name === "password") {
      setPassword((current) => {
        current = value;
        return current;
      })
    }

    else if (name === "confirm_password"){
      setAgainPass((current) => {
        current = value;
        return current;
      })

      if(password === value) {
        setPassEqaul((current) => {
          current = true;
          return current;
        })
      }
  
      else {
        setPassEqaul((current) => {
          current = false;
          return current;
        })
      }
    }

  } // ? onChange함수 끝

  
  // ? onSubmit 함수
  const onSubmit = async(event) => {
    event.preventDefault();
    const nickConfirm = nickname_check(nickName);
    const emailConfirm = email_check(email);
    const passConfirm = password_check(password);
    console.log(`닉네임:${nickName} 이메일:${email} 비밀번호:${password}`);
    console.log(`각 정규식 : ${nickConfirm, emailConfirm, passConfirm}`);

    if(nickConfirm && emailConfirm && passConfirm && passEqaul) {
      const auth = authService;
      const data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data);
    }

    else {
      alert('입력하신 정보를 다시 확인 해주세요.');
    }
  }

  return(
    <>
    <form onSubmit={onSubmit}>
      <label htmlFor="nickname">닉네임</label>
      <p>2~8글자의 영문자, 한글, 숫자만 사용 가능합니다.</p>
      <input 
        autoFocus
        type="text"
        id="nickname"
        name="nickname"
        required
        value={nickName}
        onChange={onChange}
        placeholder="닉네임"
      />

      <label htmlFor="email">이메일</label>
      <p>아이디로 사용할 이메일을 입력해주세요.</p>
      <input 
        type="text"
        id="email"
        name="email"
        required
        value={email}
        onChange={onChange}
        placeholder="이메일"
      />

      <label htmlFor="password">비밀번호</label>
      <p>8~20글자의 영문자, 숫자, 특수기호를 포함해야 합니다.</p>
      <input 
        type="password"
        id="password"
        name="password"
        required
        value={password}
        onChange={onChange}
        placeholder="비밀번호"
      />

      <label htmlFor="confirm_password">비밀번호 확인</label>
      <p>비밀번호를 한번 더 입력해주세요</p>
      <input 
        type="password"
        id="confirm_password"
        name="confirm_password"
        required
        value={againPass}
        onChange={onChange}
        placeholder="설정한 비밀번호를 입력해주세요"
      />

      <div className={passEqaul === null ? "hide" : "show"}>
        {passEqaul ? (<>
          <p> 비밀번호가 일치합니다. </p>
        </>) :
        (<>
          <p> 비밀번호가 일치하지 않습니다.</p>
        </>)
        }
      </div>
      

      <input 
        type="submit"
        value="계정생성"
        onSubmit={onSubmit}
      />
    </form>
    </>
  )
}

export default SignUp;