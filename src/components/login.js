const login = {
  render: () => {
    return `
        <div class="container-fluid m-0 p-0">
            <div id="login-form" class="row justify-content-center m-0 p-0">
                <div class="col-sm-7 col-md-8 col-lg-8 p-0 visible-lg-block hidden-lg"></div>
                <div class="col-sm-5 col-md-4 col-lg-4 m-0 p-0 min-vh-100 no-gutters" id="registration-form">
                    <form>
                        <div class="row justify-content-center">
                            <div class="col-10 text-center mt-5 mb-4">
                                <div class="display-4">LinkedPic</div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-10 mb-2">
                                <div class="h5">Log In</div>
                            </div>
                        </div>
                        <div class="row justify-content-center pb-2 pt-2">
                            <div class="col-10">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="usernameinput" placeholder="Username">
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center pb-2 pt-2">
                            <div class="col-10">
                                <div class="form-group">
                                    <input type="password" class="form-control" id="passwordlogininput"
                                        placeholder="Password">
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center pb-2 pt-2">
                            <div class="col-10 text-center">
                                <button type="submit" class="btn btn-primary w-100">Log In</button>
                            </div>
                        </div>
                        <hr>
                        <div class="row justify-content-center pt-2">
                            <div class="col-10 text-center">
                                <p>Need to make an account?</p>
                            </div>
                        </div>
                        <div class="row justify-content-center pb-2">
                            <div class="col-10 text-center">
                                <a id="register-button" href="#/register" type="button" class="btn btn-primary">Register</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
  },
};
