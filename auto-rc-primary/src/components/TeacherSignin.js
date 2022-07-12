import React from "react";

const TeacherSignin =()=>{
    return (
        <div class="form-container">
        <form action="">
          <div class="ui labeled input name-input">
            <div class="ui custom label">Name</div>
            <input
              type="text"
              class="std-name"
              placeholder="Name"
              name="name"
              id="std-name"
            />
          </div>
          <div class="ui labeled input name-input">
            <div class="ui custom label">ID</div>
            <input
              type="text"
              class="std-name"
              placeholder="Name"
              name="name"
              id="std-name"
            />
          </div>
          <div class="ui labeled input name-input">
            <div class="ui custom label">Email</div>
            <input
              type="email"
              class="std-name"
              name="name"
              placeholder="Email"
              id="std-name"
            />
          </div>
          <div class="ui labeled input password-input">
            <div class="ui custom label">Password</div>
            <input
              type="password"
              class="std-name"
              placeholder="Password"
              name="name"
              id="std-name"
            />
          </div>

          <div class="ui labeled input confrim password-input">
            <div class="ui custom label">Password</div>
            <input
              type="password"
              class="std-password"
              name="name"
              placeholder="Confirm Password"
              id="std-name"
            />
          </div>

          <div class="">
            <div class="ui labeled input class-input">
              <div class="ui custom label">Class</div>
              <input
                type="text"
                class="std-class"
                placeholder="Class"
                name="name"
                id="std-name"
              />
            </div>
            <h5 class="new-student-log-in">
              Already have an account? <span>Log in</span>
            </h5>
          </div>

          <div class="button-container">
            <button class="ui button log-in">SIGNIN</button>
          </div>
        </form>
      </div>
    )
}

export default TeacherSignin