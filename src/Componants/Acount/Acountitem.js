import React from 'react'
import "./Acount.css"

function Acountitem() {
    return (
        <div className='acount '>
            <form className='form-info shadow p-5 mb-5 bg-body rounded mt-5 '>
                <h1>SIGN IN TO YOUR ACCOUNT</h1>
                <div className="form-outline mb-4 text-start">
                    <label className="form-label" for="form2Example1">User name</label>
                    <input type="text" id="form2Example1" className="form-control" />

                </div>


                <div className="form-outline mb-4 text-start">
                    <label className="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" />

                </div>


                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">

                        <a href="#!">Forgot password?</a>
                    </div>
                </div>


                <button type="button" class="btn btn-primary btn-block mb-4 px-5">Sign in</button>


                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Acountitem