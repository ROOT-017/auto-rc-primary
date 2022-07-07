
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="form-container">
        <form action="TestConnect.php" method="post">
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
            <div class="ui custom label">Email</div>
            <input
              type="email"
              class="std-name"
              name="std-name"
              placeholder="Email"
              id="std-email"
            />
          </div>
          <div class="ui labeled input password-input">
            <div class="ui custom label">Password</div>
            <input
              type="password"
              class="std-name"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
  
          <div class="ui labeled input confrim password-input">
            <div class="ui custom label">Password</div>
            <input
              type="password"
              class="std-password"
              name="confirm-password"
              placeholder="Confirm Password"
              id="confirm-password"
            />
          </div>
  
          <div class="">
            <div class="ui labeled input class-input">
              <div class="ui custom label">Class</div>
              <input
                type=""
                class="std-class"
                placeholder="Class"
                name="std-class"
                id="std-class"
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
</body>
</html>

