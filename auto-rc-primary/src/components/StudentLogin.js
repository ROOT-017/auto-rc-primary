import React from "react";
import Styles from "./Styles/Styles.css"

const StudentLogin = () => {
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
        <div class="form-container">
          <form action="">
            <div class="ui labeled input name-input">
              <div class="ui label">STD Name</div>
              <input
                type="text"
                class="custom std-name"
                placeholder="Name"
                name="name"
                id="std-name"
              />
            </div>
            <div class="password-input">
              <div class="ui labeled input">
                <div class="ui label">STD Password</div>
                <input
                  type="password"
                  class="custom std-password"
                  name="password"
                  placeholder="Password"
                  id="std-password"
                />
              </div>
              <div class="forgot-password">
                <h6>Forgot Password</h6>
              </div>
            </div>

            <div class="button-container">
              <button class="ui button log-in">LOGIN</button>
              <h5 class="new-student-log-in">
                New Student? <span>Register</span>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
