import React from 'react';
import './Signin.css'
import { NavLink , Link} from 'react-router-dom';

function Signin() {
    return (
        <div className='container'>
            <div class="container d-flex justify-content-center main-register">
                <div class="border-1 p-4 rounded register__form form" style={{marginTop:"5%"}}>
                    <h4 class="text-center Text__for__member default_color">Login</h4>
                    <dt class="default_color">Email</dt>
                    <dd><input type="email" name="email" id="" class="form-control" placeholder="Enter Email" /></dd>
                    <dt class="default_color">Password</dt>
                    <dd><input type="password" name="password" class="form-control" placeholder="Enter Password" /></dd>
                    <div class="text-center"><Link to={'/Home'} class="btn btn-primary button_default_bg_color border-0">Login</Link><NavLink to={'/register'} style={{cursor:"pointer"}}  class="text-secondary  ms-4">Register here </NavLink></div>
                </div>
            </div>

        </div>
    )
}

export default Signin