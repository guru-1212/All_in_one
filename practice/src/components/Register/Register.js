import React from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'
function Register() {
  return (
    <div>
        <div class="container d-flex justify-content-center main-register">
    <form class="border-1 p-4 rounded register__form" style={{marginTop:'5%'}}>
        <h4 class="text-center Text__for__member default_color">Member Registration</h4>
        <div class="row mb-2">
            <div class="col-md-3">
                <div class="position-relative">
                   <dd>
                    <select name="" id="select_title" class="form-select ps-0">
                        <option value="Title*" selected hidden>Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                    </select>
                   </dd>
                    <span class="Err_msg">Title is required</span>
                </div>
            </div>
            <div class="col">
                <div class="position-relative">
                    <dd>
                        <input type="text" name="FName" id="" class="form-control ps-0" placeholder="First Name*"/>
                    </dd>
                    <span class="Err_msg">First Name is required</span>
                </div>
            </div>
        </div>



        <div class="row mb-2">
            <div class="col-md-12">
                <div class="position-relative">
                    <dd>
                        <input type="text" name="LName" id="" class="form-control ps-0" placeholder="Last Name*"/>
                    </dd>
                    <span class="Err_msg">Last Name is required</span>
                </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-12">
               <div class="position-relative">
                <dd>
                    <input type="email" name="Email" class="form-control ps-0" placeholder="Email address*"/>
                </dd>
                <span class="Err_msg">Email is required</span>
               </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-12">
               <div class="position-relative">
                <dd>
                    <input type="date" name="DateOfBirth" class="form-control ps-0"
                        placeholder="Date of birth (DD-MM-YY)"/>
                </dd>
                <span class="Err_msg">Date of Birth is required</span>
               </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-12">
               <div class="position-relative">
                <dd>
                    <select name="" id="select_Nationality" class="form-select ps-0">
                        <option value="none*" selected hidden>Nationality</option>
                    </select>
                </dd>
                <span class="Err_msg">Nationality is required</span>
               </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-12">
               <div class="position-relative">
                <dd>
                    <select name="" id="select_Nationality" class="form-select ps-0">
                        <option value="none*" selected hidden>Country of Residence *</option>
                    </select>
                </dd>
                <span class="Err_msg">Country of Residence is required</span>
               </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-12">
               <div class="position-relative">
                <dd>
                    <input type="text" name="city_town" class="form-control ps-0" placeholder="City/Town*"/>
                </dd>
                <span class="Err_msg">City/Town is required</span>
               </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-3">
                <div class="position-relative">
                   <dd>
                    <select name="" id="select_Code" class="form-select ps-0">
                        <option value="none*" selected hidden>Code</option>
                    </select>
                   </dd>
                    <span class="Err_msg">ISD code is required</span>
                </div>
            </div>
            <div class="col">
                <div class="position-relative">
                    <dd>
                        <input type="number" name="Number" id="" class="form-control ps-0" placeholder="Mobile Number*"/>
                    </dd>
                    <span class="Err_msg">Mobile Number is required</span>
                </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-12">
               <div class="position-relative">
                <dd>
                    <input type="password" name="password" class="form-control ps-0" placeholder="Password*"/>
                </dd>
                <span class="Err_msg">Password is required</span>
               </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-12">
               <div class="position-relative">
                <dd>
                    <input type="password" name="Cpassword" class="form-control ps-0" placeholder="Confirm password*"/>
                </dd>
                <span class="Err_msg">Confirm password is required</span>
               </div>
            </div>
        </div>
        
        <div class="text-center"><button type="submit"
                class="btn btn-primary button_default_bg_color border-0">Register</button><NavLink to={'/signin'} style={{cursor:"pointer"}}
                class="text-secondary sign-in ms-4">Login here </NavLink></div>
    </form>
</div>
    </div>
  )
}

export default Register