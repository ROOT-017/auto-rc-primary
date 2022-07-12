import React from "react";

const TeacherLogin =()=>{
    return(
        <div class="form-container">
        <form action="">
          <div class="ui labeled input name-input">
            <div class="ui custom label">ID</div>
            <input
              type="text"
              class="teacher-name"
              name="id"
              placeholder="ID"
              id="teacher-name"
            />
          </div>
          <div class="password-input">
            <div class="ui labeled input">
              <div class="ui custom label">Password</div>
              <input
              type="password"
                class="teacher-password"
                name="password"
                placeholder="Password"
                id="teacher-name"
              />
            </div>
            <div class="forgot-password"><h6>Forgot Password</h6></div>
          </div>

          <div class="button-container">
            <button class="ui button">LOGIN</button>
            <h5 class="new-student-log-in">
              New Teacher? <span>Register</span>
            </h5>
          </div>
        </form>
      </div>
    )
}

export default TeacherLogin