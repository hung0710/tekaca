import { useEffect } from "react";
import Link from 'next/link';
import LogoDark from '@images/logo-dark.svg';

function Header(props) {
    return (
        <header className="header header-horizontal">
            <div className="container">
                <nav uk-navbar className="uk-navbar">
                    {/* left Side Content */}
                    <div className="uk-navbar-left">
                        {/* menu icon */}
                        <span className="mmenu-trigger">
                            <button className="hamburger hamburger--collapse" type="button">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </span>
                        {/* logo */}
                        <a href="dashboard.html" className="logo">
                            <img src="../assets/images/logo-dark.svg" alt="" />
                            <span> Courseplus</span>
                        </a>
                        {/* Main Navigation */}
                        <nav id="navigation">
                            <ul id="responsive">
                                <li><Link href="/"><a>Home</a></Link> </li>
                                <li><a href="#">Explore</a>
                                    <ul className="dropdown-nav nav-large nav-courses">
                                        <li><a href="course-card.html#">
                                            <i className="icon-brand-js-square" style={{ color: '#f7df1e' }} /> JavaScript
                        </a>
                                        </li>
                                        <li><a href="course-card.html">
                                            <i className="icon-brand-node-js" style={{ color: 'green' }} /> NodeJS </a>
                                        </li>
                                        <li><a href="course-card.html">
                                            <i className="icon-brand-angular" style={{ color: '#dd0031' }} /> Angular </a>
                                        </li>
                                        <li><a href="course-card.html">
                                            <i className="icon-brand-css3-alt" style={{ color: 'blue' }} /> CSS </a></li>
                                        <li><a href="course-card.html">
                                            <i className="icon-brand-html5" style={{ color: '#f0653f' }} /> HTML5 </a></li>
                                        <li><a href="course-card.html">
                                            <i className="icon-brand-react" style={{ color: '#67fcef' }} /> React </a></li>
                                        <li><a href="course-card.html">
                                            <i className="icon-brand-vuejs" style={{ color: 'green' }} /> Vue JS </a></li>
                                        <li><a href="course-card.html">
                                            <i className="icon-brand-python" style={{ color: '#b1b172' }} /> Python </a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="course-path.html" className="nav-active">Track</a> </li>
                                <li><Link href="sach-cong-nghe"><a>Book</a></Link></li>
                                <li><a href="blog-1.html">Blog</a> </li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="page-pricing.html">Pricing</a> </li>
                                        <li><a href="page-Privacy.html">Privacy</a></li>
                                        <li><a href="page-term.html">Terms</a></li>
                                        <li><a href="page-contact.html">Contact</a></li>
                                        <li><a href="#">Account</a>
                                            <ul className="dropdown-nav">
                                                <li><a href="page-login.html">login</a></li>
                                                <li><a href="page-register.html">register</a></li>
                                                <li><a href="page-simple-login.html">Simple login</a></li>
                                                <li><a href="page-simple-register.html">Simple register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Development</a>
                                            <ul className="dropdown-nav">
                                                <li><a href="page-elements.html">Elements</a></li>
                                                <li><a href="page-components.html">Components</a></li>
                                                <li><a href="page-icons.html">Icons</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* Main Navigation / End */}
                    </div>
                    {/*  Right Side Content   */}
                    <div className="uk-navbar-right">
                        <div className="header-widget">
                            <div className="searchbox uk-visible@s" aria-expanded="false">
                                <input className="uk-search-input" type="search" placeholder="Search..." />
                                <button className="btn-searchbox"> </button>
                            </div>
                            {/* Search box dropdown */}
                            <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small" className="dropdown-search uk-dropdown uk-dropdown-bottom-center uk-animation-slide-bottom-small uk-animation-enter" style={{ left: '776.68px', top: '54.4999px', animationDuration: '200ms' }}>
                                <div className="erh BR9 MIw" style={{ top: '-27px', position: 'absolute', left: '24px', fill: 'currentColor', height: '24px', pointerEvents: 'none', color: '#f5f5f5' }}>
                                    <svg width={22} height={22}>
                                        <path d="M0 24 L12 12 L24 24" />
                                    </svg></div>
                                {/* User menu */}
                                <ul className="dropdown-search-list">
                                    <li className="list-title">
                                        Recent Searches
                    </li>
                                    <li>
                                        <a href="course-intro.html">
                                            Ultimate Web Designer And Developer Course</a>
                                    </li>
                                    <li><a href="course-intro.html">
                                        The Complete Ruby on Rails Developer Course </a>
                                    </li>
                                    <li><a href="course-intro.html">
                                        Bootstrap 4 From Scratch With 5 Real Projects </a>
                                    </li>
                                    <li> <a href="course-intro.html">
                                        The Complete 2020 Web Development Bootcamp </a>
                                    </li>
                                    <li className="menu-divider">
                                    </li><li><a href="course-intro.html">
                                        Bootstrap 4 From Scratch With 5 Real Projects </a>
                                    </li>
                                    <li> <a href="course-intro.html">
                                        The Complete 2020 Web Development Bootcamp </a>
                                    </li>
                                </ul>
                            </div>
                            {/* User icons close mobile*/}
                            <span className="icon-feather-x icon-small uk-hidden@s" uk-toggle="target: .header-widget ; cls: is-active"> </span>
                            <a href="#" className="header-widget-icon" uk-tooltip="title: My Courses ; pos: bottom ;offset:21" title aria-expanded="false">
                                <i className="uil-youtube-alt" />
                            </a>
                            {/* courses dropdown List */}
                            <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small" className="dropdown-notifications my-courses-dropdown uk-dropdown">
                                {/* notivication header */}
                                <div className="dropdown-notifications-headline">
                                    <h4>Your Courses</h4>
                                    <a href="#">
                                        <i className="icon-feather-settings" uk-tooltip="title: Notifications settings ; pos: left" title aria-expanded="false" />
                                    </a>
                                </div>
                                {/* notification contents */}
                                <div className="dropdown-notifications-content" data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: '0px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div className="simplebar-content" style={{ padding: '0px', height: 'auto', overflow: 'hidden' }}>
                                    {/* notiviation list */}
                                    <ul>
                                        <li className="notifications-not-read">
                                            <a href="course-intro.html">
                                                <span className="notification-image">
                                                    <img src="../assets/images/course/1.png" alt="" /> </span>
                                                <span className="notification-text">
                                                    <span className="course-title">Ultimate Web Designer &amp; Web Developer
                                    </span>
                                                    <span className="course-number">6/35 </span>
                                                    <span className="course-progressbar">
                                                        <span className="course-progressbar-filler" style={{ width: '95%' }} />
                                                    </span>
                                                </span>
                                                {/* option menu */}
                                                <span className="btn-option" aria-expanded="false">
                                                    <i className="icon-feather-more-vertical" />
                                                </span>
                                                <div className="dropdown-option-nav uk-dropdown" uk-dropdown="pos: bottom-right ;mode : hover">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <i className="icon-material-outline-dashboard" />
                                          Course Dashboard</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-video" />
                                          Resume Course</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-x" />
                                          Remove Course</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="course-intro.html">
                                                <span className="notification-image">
                                                    <img src="../assets/images/course/3.png" alt="" /> </span>
                                                <span className="notification-text">
                                                    <span className="course-title">The Complete JavaScript Course Build Real
                                      Projects !</span>
                                                    <span className="course-number">6/35 </span>
                                                    <span className="course-progressbar">
                                                        <span className="course-progressbar-filler" style={{ width: '95%' }} />
                                                    </span>
                                                </span>
                                                {/* option menu */}
                                                <span className="btn-option" aria-expanded="false">
                                                    <i className="icon-feather-more-vertical" />
                                                </span>
                                                <div className="dropdown-option-nav uk-dropdown" uk-dropdown="pos: bottom-right ;mode : hover">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <i className="icon-material-outline-dashboard" />
                                          Course Dashboard</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-video" />
                                          Resume Course</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-x" />
                                          Remove Course</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="course-intro.html">
                                                <span className="notification-image">
                                                    <img src="../assets/images/course/2.png" alt="" /> </span>
                                                <span className="notification-text">
                                                    <span className="course-title">Learn Angular Fundamentals From The
                                      Beginning</span>
                                                    <span className="course-number">6/35 </span>
                                                    <span className="course-progressbar">
                                                        <span className="course-progressbar-filler" style={{ width: '95%' }} />
                                                    </span>
                                                </span>
                                                {/* option menu */}
                                                <span className="btn-option" aria-expanded="false">
                                                    <i className="icon-feather-more-vertical" />
                                                </span>
                                                <div className="dropdown-option-nav uk-dropdown" uk-dropdown="pos: bottom-right ;mode : hover">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <i className="icon-material-outline-dashboard" />
                                          Course Dashboard</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-video" />
                                          Resume Course</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-x" />
                                          Remove Course</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="course-intro.html">
                                                <span className="notification-image">
                                                    <img src="../assets/images/course/1.png" alt="" /> </span>
                                                <span className="notification-text">
                                                    <span className="course-title">Ultimate Web Designer &amp; Web Developer
                                    </span>
                                                    <span className="course-number">6/35 </span>
                                                    <span className="course-progressbar">
                                                        <span className="course-progressbar-filler" style={{ width: '95%' }} />
                                                    </span>
                                                </span>
                                                {/* option menu */}
                                                <span className="btn-option" aria-expanded="false">
                                                    <i className="icon-feather-more-vertical" />
                                                </span>
                                                <div className="dropdown-option-nav uk-dropdown" uk-dropdown="pos: top-right ;mode : hover">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <i className="icon-material-outline-dashboard" />
                                          Course Dashboard</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-video" />
                                          Resume Course</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="icon-feather-x" />
                                          Remove Course</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div></div></div><div className="simplebar-placeholder" style={{ width: '0px', height: '0px' }} /></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ transform: 'translate3d(0px, 0px, 0px)', visibility: 'hidden' }} /></div><div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ transform: 'translate3d(0px, 0px, 0px)', visibility: 'hidden' }} /></div></div>
                                <div className="dropdown-notifications-footer">
                                    <a href="#"> sell all</a>
                                </div>
                            </div>
                            {/* notificiation icon  */}
                            <a href="#" className="header-widget-icon" uk-tooltip="title: Notificiation ; pos: bottom ;offset:21" title aria-expanded="false">
                                <i className="uil-bell" />
                                <span>4</span>
                            </a>
                            {/* notificiation dropdown */}
                            <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small" className="dropdown-notifications uk-dropdown">
                                {/* notivication header */}
                                <div className="dropdown-notifications-headline">
                                    <h4>Notifications </h4>
                                    <a href="#">
                                        <i className="icon-feather-settings" uk-tooltip="title: Notifications settings ; pos: left" title aria-expanded="false" />
                                    </a>
                                </div>
                                {/* notification contents */}
                                <div className="dropdown-notifications-content" data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: '0px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div className="simplebar-content" style={{ padding: '0px', height: 'auto', overflow: 'hidden' }}>
                                    {/* notiviation list */}
                                    <ul>
                                        <li className="notifications-not-read">
                                            <a href="#">
                                                <span className="notification-icon btn btn-soft-danger disabled">
                                                    <i className="icon-feather-thumbs-up" /></span>
                                                <span className="notification-text">
                                                    <strong>Adrian Mohani</strong> Like Your Comment On Course
                                    <span className="text-primary">Javascript Introduction </span>
                                                    <br /> <span className="time-ago"> 9 hours ago </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="notification-icon btn btn-soft-primary disabled">
                                                    <i className="icon-feather-message-circle" /></span>
                                                <span className="notification-text">
                                                    <strong>Stella Johnson</strong> Replay Your Comments in
                                    <span className="text-primary">Programming for Games</span>
                                                    <br /> <span className="time-ago"> 12 hours ago </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="notification-icon btn btn-soft-success disabled">
                                                    <i className="icon-feather-star" /></span>
                                                <span className="notification-text">
                                                    <strong>Alex Dolgove</strong> Added New Review In Course
                                    <span className="text-primary">Full Stack PHP Developer</span>
                                                    <br /> <span className="time-ago"> 19 hours ago </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="notifications-not-read">
                                            <a href="#">
                                                <span className="notification-icon btn btn-soft-danger disabled">
                                                    <i className="icon-feather-share-2" /></span>
                                                <span className="notification-text">
                                                    <strong>Jonathan Madano</strong> Shared Your Discussion On Course
                                    <span className="text-primary">Css Flex Box </span>
                                                    <br /> <span className="time-ago"> Yesterday </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div></div></div><div className="simplebar-placeholder" style={{ width: '0px', height: '0px' }} /></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ transform: 'translate3d(0px, 0px, 0px)', visibility: 'hidden' }} /></div><div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ transform: 'translate3d(0px, 0px, 0px)', visibility: 'hidden' }} /></div></div>
                            </div>
                            {/* Message  */}
                            <a href="#" className="header-widget-icon" uk-tooltip="title: Message ; pos: bottom ;offset:21" title aria-expanded="false">
                                <i className="uil-envelope-alt" />
                                <span>1</span>
                            </a>
                            {/* Message  notificiation dropdown */}
                            <div uk-dropdown=" pos: top-right;mode:click" className="dropdown-notifications uk-dropdown">
                                {/* notivication header */}
                                <div className="dropdown-notifications-headline">
                                    <h4>Messages</h4>
                                    <a href="#">
                                        <i className="icon-feather-settings" uk-tooltip="title: Message settings ; pos: left" title aria-expanded="false" />
                                    </a>
                                </div>
                                {/* notification contents */}
                                <div className="dropdown-notifications-content" data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: '0px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div className="simplebar-content" style={{ padding: '0px', height: 'auto', overflow: 'hidden' }}>
                                    {/* notiviation list */}
                                    <ul>
                                        <li className="notifications-not-read">
                                            <a href="#">
                                                <span className="notification-avatar">
                                                    <img src="../assets/images/avatars/avatar-2.jpg" alt="" />
                                                </span>
                                                <div className="notification-text notification-msg-text">
                                                    <strong>Jonathan Madano</strong>
                                                    <p>Okay.. Thanks for The Answer I will be waiting for your...
                                    </p>
                                                    <span className="time-ago"> 2 hours ago </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="notification-avatar">
                                                    <img src="../assets/images/avatars/avatar-3.jpg" alt="" />
                                                </span>
                                                <div className="notification-text notification-msg-text">
                                                    <strong>Stella Johnson</strong>
                                                    <p> Alex will explain you how to keep the HTML structure and all
                                      that...</p>
                                                    <span className="time-ago"> 7 hours ago </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="notification-avatar">
                                                    <img src="../assets/images/avatars/avatar-1.jpg" alt="" />
                                                </span>
                                                <div className="notification-text notification-msg-text">
                                                    <strong>Alex Dolgove</strong>
                                                    <p> Alia Joseph just joined Messenger! Be the first to send a
                                      welcome message..</p>
                                                    <span className="time-ago"> 19 hours ago </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="notification-avatar">
                                                    <img src="../assets/images/avatars/avatar-4.jpg" alt="" />
                                                </span>
                                                <div className="notification-text notification-msg-text">
                                                    <strong>Adrian Mohani</strong>
                                                    <p> Okay.. Thanks for The Answer I will be waiting for your...
                                    </p>
                                                    <span className="time-ago"> Yesterday </span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div></div></div><div className="simplebar-placeholder" style={{ width: '0px', height: '0px' }} /></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ transform: 'translate3d(0px, 0px, 0px)', visibility: 'hidden' }} /></div><div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ transform: 'translate3d(0px, 0px, 0px)', visibility: 'hidden' }} /></div></div>
                                <div className="dropdown-notifications-footer">
                                    <a href="#"> sell all <i className="icon-line-awesome-long-arrow-right" /> </a>
                                </div>
                            </div>
                            {/* profile-icon*/}
                            <a href="#" className="header-widget-icon profile-icon" aria-expanded="false">
                                <img src="../assets/images/avatars/avatar-2.jpg" alt="" className="header-profile-icon" />
                            </a>
                            <div uk-dropdown="pos: top-right ;mode:click" className="dropdown-notifications small uk-dropdown">
                                {/* User Name / Avatar */}
                                <a href="profile-1.html">
                                    <div className="dropdown-user-details">
                                        <div className="dropdown-user-avatar">
                                            <img src="../assets/images/avatars/avatar-2.jpg" alt="" />
                                        </div>
                                        <div className="dropdown-user-name">
                                            Richard Ali <span>Students</span>
                                        </div>
                                    </div>
                                </a>
                                {/* User menu */}
                                <ul className="dropdown-user-menu">
                                    <li>
                                        <a href="#">
                                            <i className="icon-material-outline-dashboard" /> Dashboard</a>
                                    </li>
                                    <li><a href="#">
                                        <i className="icon-feather-bookmark" /> Bookmark </a>
                                    </li>
                                    <li><a href="profile-edit.html">
                                        <i className="icon-feather-settings" /> Account Settings</a>
                                    </li>
                                    <li><a href="#" style={{ color: '#62d76b' }}>
                                        <i className="icon-feather-star" /> Upgrade To Premium</a>
                                    </li>
                                    <li>
                                        <a href="#" id="night-mode" className="btn-night-mode">
                                            <i className="icon-feather-moon" /> Night mode
                        <span className="btn-night-mode-switch">
                                                <span className="uk-switch-button" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="menu-divider">
                                    </li><li><a href="#">
                                        <i className="icon-feather-help-circle" /> Help</a>
                                    </li>
                                    <li><a href="page-login.html">
                                        <i className="icon-feather-log-out" /> Sing Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* icon search*/}
                        <a className="uk-navbar-toggle uk-hidden@s" uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#">
                            <i className="uil-search icon-small" />
                        </a>
                        {/* User icons */}
                        <a href="#" className="uil-user icon-small uk-hidden@s" uk-toggle="target: .header-widget ; cls: is-active">
                        </a>
                    </div>
                    {/* End Right Side Content / End */}
                </nav>
            </div>
            {/* container  / End */}
        </header>
    )
}

export default Header