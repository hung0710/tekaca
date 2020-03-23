import React, { useState, useEffect } from 'react'

//
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import actionAuth from '@actions/auth';

//css
import 'react-toastify/dist/ReactToastify.css';


function Login(props) {

    const [state, setState] = useState({
        email: '',
        password:''
    })

    const submitLogin = (e)=>{
        e.preventDefault();
        props.onLogin(state.email, state.password);
    }

    return (
        <section className="login_register">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="login-container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <form>
                                        <div className="login-form">
                                            <div className="login-logo">
                                                {/* <a href="#"><img src={Logo} alt="" /></a> */}
                                            </div>
                                            <div className="social-btns">
                                                <button className="facebook-btn"><i className="fab fa-facebook-f" />Đăng nhập bằng Facebook</button>
                                                <button className="google-btn"><i className="fab fa-google" />Đăng nhập bằng google</button>
                                            </div>
                                            <div className="or">
                                                <p> Hoặc </p>
                                            </div>
                                            <div className="form-group">
                                                <input onChange={(event)=>setState({...state, email:event.target.value})} type="text" className="video-form" id="emailphonenumber" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={(event)=>setState({...state, password:event.target.value})} type="password" className="video-form" id="yourPassword" placeholder="Mật khẩu" />
                                            </div>
                                            <button onClick={submitLogin} className="login-btn btn-link">Đăng nhập</button>
                                            <div className="forgot-password">
                                                <a href="#">Quên mật khẩu?</a>
                                                <p>Bạn có tài khoản chưa? <a href="signup.html"><span style={{ color: '#ffa803' }}>- Đăng ký ngay</span></a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(connect(state => {
	return {
		
	}
}, {
	onLogin: actionAuth.onLogin,
})(Login))