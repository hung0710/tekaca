import { useState } from 'react'

//images
import Feature from '@images/feature.png'
import Course from '@images/course/2.png'
import Course2 from '@images/course/3.png'
import Course5 from '@images/course/5.png'

function Dashboard(props) {
    return (
        <div className="page-content">
            <div className="home-hero" data-src="../assets/images/home-hero.png">
                <div className="uk-width-1-1">
                    <div className="page-content-inner uk-position-z-index">
                        <h1>Learn HTML , CSS , iphone <br /> Apps &amp; More</h1>
                        <h4 className="my-lg-4"> Learn how to build websites &amp; apps <br /> write a code or start a business
              </h4>
                        <a href="#" className="btn btn-default">Free trailer </a>
                    </div>
                </div>
            </div>
            {/* Content
        ================================================== */}
            <div className="section">
                <div className="page-content-inner">
                    <div className="section-small text-md-left text-center">
                        <div className="uk-child-width-1-2@m uk-gird-large uk-flex-middle uk-grid" uk-grid>
                            <div className="uk-first-column">
                                <img src={Feature} alt="" />
                            </div>
                            <div>
                                <h2>Learn to code anytime <br /> and everywhere </h2>
                                <p> Get started with just your name and your email adress . It’s as simple <br /> as
                    that
                    -- no payments or credit card information required. </p>
                                <a href="#" className="btn btn-soft-light"> Get started </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-small delimiter-top">
                <div className="container-small">
                    <div className="text-center mb-5">
                        <h3> Check out our newest </h3>
                        <h5> With our growing catalog of over 30 Nanodegree programs from beginner to advanced</h5>
                    </div>
                    <div className="course-grid-slider mt-lg-5 uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container pb-3">
                            <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                <li tabIndex={-1} className="uk-active">
                                    <a href="course-intro.html">
                                        <div className="course-card">
                                            <div className="course-card-thumbnail ">
                                                <img src={Course} />
                                                <span className="play-button-trigger" />
                                            </div>
                                            <div className="course-card-body">
                                                <div className="course-card-info">
                                                    <div>
                                                        <span className="catagroy">Angular</span>
                                                    </div>
                                                    <div>
                                                        <i className="icon-feather-bookmark icon-small" />
                                                    </div>
                                                </div>
                                                <h4>Learn Angular Fundamentals </h4>
                                                <p> Learn how to build and launch React web applications using .. </p>
                                                <div className="course-card-footer">
                                                    <h5> <i className="icon-feather-film" /> 12 Lectures </h5>
                                                    <h5> <i className="icon-feather-clock" /> 64 Hours </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li tabIndex={-1} className="uk-active">
                                    <a href="course-intro.html">
                                        <div className="course-card">
                                            <div className="course-card-thumbnail ">
                                                <img src={Course2} />
                                                <span className="play-button-trigger" />
                                            </div>
                                            <div className="course-card-body">
                                                <div className="course-card-info">
                                                    <div>
                                                        <span className="catagroy">JavaScript</span>
                                                    </div>
                                                    <div>
                                                        <i className="icon-feather-bookmark icon-small" />
                                                    </div>
                                                </div>
                                                <h4>The Complete JavaScript </h4>
                                                <p> JavaScript is how you build interactivity on the web page... </p>
                                                <div className="course-card-footer">
                                                    <h5> <i className="icon-feather-film" /> 14 Lectures </h5>
                                                    <h5> <i className="icon-feather-clock" /> 55 Hours </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li tabIndex={-1} className="uk-active">
                                    <a href="course-intro.html">
                                        <div className="course-card">
                                            <div className="course-card-thumbnail ">
                                                <img src={Course2} />
                                                <span className="play-button-trigger" />
                                            </div>
                                            <div className="course-card-body">
                                                <div className="course-card-info">
                                                    <div>
                                                        <span className="catagroy">HTML</span>
                                                    </div>
                                                    <div>
                                                        <i className="icon-feather-bookmark icon-small" />
                                                    </div>
                                                </div>
                                                <h4>Ultimate Web Developer Course </h4>
                                                <p> HTML is the building blocks of the web. It gives pages structure ..
                          </p>
                                                <div className="course-card-footer">
                                                    <h5> <i className="icon-feather-film" /> 33 Lectures </h5>
                                                    <h5> <i className="icon-feather-clock" /> 26 Hours </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li tabIndex={-1} className>
                                    <a href="course-intro.html">
                                        <div className="course-card">
                                            <div className="course-card-thumbnail ">
                                                <img src={Course5} />
                                                <span className="play-button-trigger" />
                                            </div>
                                            <div className="course-card-body">
                                                <div className="course-card-info">
                                                    <div>
                                                        <span className="catagroy">HTML</span>
                                                    </div>
                                                    <div>
                                                        <i className="icon-feather-bookmark icon-small" />
                                                    </div>
                                                </div>
                                                <h4>Ultimate Web Developer Course </h4>
                                                <p> HTML is the building blocks of the web. It gives pages structure ..
                          </p>
                                                <div className="course-card-footer">
                                                    <h5> <i className="icon-feather-film" /> 34 Lectures </h5>
                                                    <h5> <i className="icon-feather-clock" /> 54 Hours </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover slidenav-prev uk-invisible" href="#" uk-slider-item="previous" />
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover slidenav-next" href="#" uk-slider-item="next" />
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-soft-light btn-small btn-circle"> View More Courses</a>
                    </div>
                </div>
            </div>
            <div className="section text-center">
                <div className="page-content-inner">
                    <h2 className="mb-4"> We've got the technical stuff covered. </h2>
                    <img src="../assets/images/feature-2.png" alt="" className="my-lg-5" />
                </div>
            </div>
            <div className="section bg-white">
                <div className="container-small">
                    <h2 className="text-center my-lg-6"> Try Courseplus free for 14 days </h2>
                    <form className="uk-grid-small d-flex align-items-end uk-grid" uk-grid>
                        <div className="uk-width-1-3@s uk-first-column">
                            <div className="uk-form-label">Email </div>
                            <input className="uk-input" type="text" placeholder="Enter your email address" />
                        </div>
                        <div className="uk-width-1-3@s">
                            <div className="uk-form-label">Password </div>
                            <input className="uk-input" type="password" placeholder="******" />
                        </div>
                        <div className="uk-width-1-3@s">
                            <button className="btn  btn-light btn-lg"> Start free trailer </button>
                        </div>
                        <div className="uk-width-1-1@s uk-grid-margin uk-first-column">
                            <label>
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="customCheck1" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        <span className="checkmark uk-text-small"> I agree to the </span>
                                        <a href="pages-terms.html" target="_blank" className="uk-text-bold uk-text-small uk-link-reset">
                                            Terms and Conditions </a>
                                    </label>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Dashboard