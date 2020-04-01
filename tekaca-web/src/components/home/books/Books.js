import { useState } from "react"

import Vue from '@images/book/vue-2-basics-.jpg'
import Php from '@images/book/php.jpg'
import Html5 from '@images/book/html5.jpg'
import Win8 from '@images/book/win8.jpg'
import Css from '@images/book/css3.jpg'


function Books(props) {
    return (
        <div className="page-content">
            <div className="page-content-inner">
                <h1> Books </h1>
                <div className="mt-lg-5 uk-grid" uk-grid>
                    <div className="uk-width-3-4@m uk-first-column">
                        <h4> Featured books </h4>
                        <div className="uk-position-relative uk-slider uk-slider-container" tabIndex={-1} uk-slider="autoplay: true">
                            <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-child-width-1-3@s uk-grid" style={{ transform: 'translate3d(-210px, 0px, 0px)' }}>
                                <li tabIndex={-1} className style={{}}>
                                    <a href="book-description.html">
                                        <div className="book-card">
                                            <div className="book-cover">
                                                <img src={Vue} alt="" />
                                            </div>
                                            <div className="book-content">
                                                <h5>Vue.js Basics</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li tabIndex={-1} className="uk-active" style={{}}>
                                    <a href="book-description.html">
                                        <div className="book-card">
                                            <div className="book-cover">
                                                <img src={Php} alt="" />
                                            </div>
                                            <div className="book-content">
                                                <h5> PHP for Beginners </h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li tabIndex={-1} className="uk-active" style={{}}>
                                    <a href="book-description.html">
                                        <div className="book-card">
                                            <div className="book-cover">
                                                <img src={Html5} alt="" />
                                            </div>
                                            <div className="book-content">
                                                <h5>HTML5 Brick Breaker</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li tabIndex={-1} className="uk-active" style={{}}>
                                    <a href="book-description.html">
                                        <div className="book-card">
                                            <div className="book-cover">
                                                <img src={Win8} alt="" />
                                            </div>
                                            <div className="book-content">
                                                <h5>WIN8 App Development</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li tabIndex={-1} className="uk-active" style={{}}>
                                    <a href="book-description.html">
                                        <div className="book-card">
                                            <div className="book-cover">
                                                <img src={Vue} alt="" />
                                            </div>
                                            <div className="book-content">
                                                <h5>Vue.js Basics</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="uk-flex uk-flex-center mt-2">
                                <ul className="uk-slider-nav uk-dotnav"><li uk-slider-item={0} className><a href="#" /></li><li uk-slider-item={1} className="uk-active"><a href="#" /></li><li uk-slider-item={2} className><a href="#" /></li><li uk-slider-item={3} className><a href="#" /></li><li uk-slider-item={4} className><a href="#" /></li></ul>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-4@m">
                        <h4> Popular books </h4>
                        <div id="book-popular">
                            <div className="book-popular-card">
                                <img src={Css} alt="" className="cover-img" />
                                <div className="book-details">
                                    <a href="#">
                                        <h4>CSS3 Web Development</h4>
                                    </a>
                                    <p>Richard Ali </p>
                                </div>
                                <a href="#"> <i className="icon-feather-bookmark icon-small" /></a>
                            </div>
                            <div className="book-popular-card">
                                <img src={Vue} alt="" className="cover-img" />
                                <div className="book-details">
                                    <a href="#">
                                        <h4>Vue.js Basics</h4>
                                    </a>
                                    <p>John smith </p>
                                </div>
                                <a href="#"> <i className="icon-feather-bookmark icon-small" /></a>
                            </div>
                            <div className="book-popular-card">
                                <img src={Php} alt="" className="cover-img" />
                                <div className="book-details">
                                    <a href="#">
                                        <h4>PHP for Beginners</h4>
                                    </a>
                                    <p>Richard Ali </p>
                                </div>
                                <a href="#"> <i className="icon-feather-bookmark icon-small" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <h3> Category</h3>
                <nav className="responsive-tab style-1 ">
                    <ul>
                        <li className="uk-active"><a href="#">JavaScript</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">Coding</a></li>
                    </ul>
                </nav>
                <div className="section-small">
                    <div className="uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid" uk-grid>
                        <div className="uk-first-column">
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Html5} className="mb-2 w-100 shadow rounded" />
                  HTML5 Brick Breaker
                </a>
                        </div>
                        <div>
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Css} className="mb-2 w-100 shadow rounded" />
                  CSS3 Web Development
                </a>
                        </div>
                        <div>
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Vue} className="mb-2 w-100 shadow rounded" />
                  Vue.js 2 Basics
                </a>
                        </div>
                        <div>
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Php} className="mb-2 w-100 shadow rounded" />
                  PHP for Beginners
                </a>
                        </div>
                        <div>
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Win8} className="mb-2 w-100 shadow rounded" />
                  WIN8 App Development
                </a>
                        </div>
                        <div className="uk-grid-margin uk-first-column">
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Win8} className="mb-2 w-100 shadow rounded" />
                  WIN8 App Development
                </a>
                        </div>
                        <div className="uk-grid-margin">
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Vue} className="mb-2 w-100 shadow rounded" />
                  Vue.js 2 Basics
                </a>
                        </div>
                        <div className="uk-grid-margin">
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Php} className="mb-2 w-100 shadow rounded" />
                  PHP for Beginners
                </a>
                        </div>
                        <div className="uk-grid-margin">
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Html5} className="mb-2 w-100 shadow rounded" />
                  HTML5 Brick Breaker
                </a>
                        </div>
                        <div className="uk-grid-margin">
                            <a href="book-description.html" className="uk-text-bold">
                                <img src={Css} className="mb-2 w-100 shadow rounded" />
                  CSS3 Web Development
                </a>
                        </div>
                    </div>
                </div>
                {/* pagination*/}
                <ul className="uk-pagination uk-flex-center uk-margin-medium">
                    <li className="uk-active">
                        <span>1</span>
                    </li>
                    <li>
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#"><i className="icon-feather-chevron-right uk-margin-small-top" /></a>
                    </li>
                    <li>
                        <a href="#">12</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Books