import React from "react";
import StudentLogin from "./StudentLoginForm";
import StudentSignin from "./StudentSignin";
import TeacherLogin from "./TeacherLogin";
import TeacherSignin from "./TeacherSignin";

const LoginLayOut = () => {
  return (
    <div class="container">
      <div class="sub-container">
        <div class="header-container">
          <div class="header">
            <div class="logo">
              <span
                class="iconify"
                data-icon="noto:graduation-cap"
                data-width="150"
                data-height="140"
              ></span>
            </div>
            <div class="ellipsis">
              <span
                class="iconify"
                data-icon="entypo:dots-three-vertical"
                data-width="25"
                data-height="25"
              ></span>
            </div>
          </div>
          <div class="school-name">
            <div>COMMUNIRTY SCHOOL</div>
            <div>STUDENT LOGIN</div>
          </div>
        </div>
        {<TeacherSignin />}
      </div>
    </div>
  );
};

export default LoginLayOut;
