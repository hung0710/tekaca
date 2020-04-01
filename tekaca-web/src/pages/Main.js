import React, { Component } from 'react'

//Next
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import { withRouter } from 'next/router'

//components
import Header from '@components/layout/header'
import Footer from '@components/layout/footer'

//redux
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createEncryptor from 'redux-persist-transform-encrypt'
import { Provider, connect } from "react-redux";
import withRedux from "next-redux-wrapper";
import reducers from '@redux-store/reducers'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


//UI, styles
// import 'bootstrap/scss/bootstrap.scss'
// import '@resources/template/css/style.css'

import '@styles/app.scss'
// import '@resources/template/css/style.css'
// import '@styles/style.scss'

import { ToastContainer } from 'react-toastify';


const encryptor = createEncryptor({
    secretKey: 'tekway-encrypt-key',
    onError: function (error) {
        // Handle the error.
    }
})

const makeStore = (initialState, options) => {
    let store
    if (!options.isServer) {
        const persistConfig = {
            key: 'root-tekaca',
            storage,
            transforms: [encryptor]
        };
        store = createStore(
            persistReducer(persistConfig, reducers),
            initialState,
            compose(
                applyMiddleware(thunk)
            )
        );
        store.__PERSISTOR = persistStore(store);
    } else {
        store = createStore(
            reducers,
            initialState,
            compose(
                applyMiddleware(thunk)
            )
        );
    }
    return store
};


class Main extends Component {
    getHeader = () => {
        return <NextSeo
            title="Tekaca.vn - Học lập trình, thiết kế dễ dàng"
            description={"Địa điểm học, lập trình, thiết kế, tuyển dụng ở  đâu Hà Nội | TP.Hồ Chí Minh." + this.props.router.asPath}
            canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'Open Graph Title',
                description: 'Open Graph Description',
                images: [
                    {
                        url: 'https://www.example.ie/og-image-01.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                    },
                    {
                        url: 'https://www.example.ie/og-image-02.jpg',
                        width: 900,
                        height: 800,
                        alt: 'Og Image Alt Second',
                    },
                    { url: 'https://www.example.ie/og-image-03.jpg' },
                    { url: 'https://www.example.ie/og-image-04.jpg' },
                ],
                site_name: 'SiteName',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Head>
                    <title>Tekaca.vn - Học lập trình, thiết kế dễ dàng</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Tekaca.vn - Học lập trình, thiết kế dễ dàng" />

                    <script src="static/assets/js/framework.js"></script>
                    <script src="static/assets/js/jquery-3.3.1.min.js"></script>
                    <script src="static/assets/js/mmenu.min.js"></script>
                    <script src="static/assets/js/simplebar.js"></script>
                    <script src="static/assets/js/main.js"></script>


                    <link href="/static/assets/images/favicon.png" rel="icon" type="image/png" />
                    <link rel="stylesheet" href="static/assets/css/style.css"/>
                    {/* <link rel="stylesheet" href="/static/assets/css/style-rtl.css" /> */}
                    <link rel="stylesheet" href="/static/assets/css/night-mode.css" />
                    <link rel="stylesheet" href="/static/assets/css/framework.css" />
                    <link rel="stylesheet" href="/static/assets/css/bootstrap.css" />
                    {/* <link rel="stylesheet" href="/static/css/customize.css" /> */}

                    <link rel="stylesheet" href="/static/assets/css/icons.css" />
                </Head>
                {this.getHeader()}
                <PersistGate persistor={this.props.store.__PERSISTOR} loading={null}>
                    <ToastContainer autoClose={3000} />
                    <Provider store={this.props.store}>
                        <div className='app'>
                            {
                            this.props.router && this.props.router.asPath && this.props.router.asPath == "/account/login"
                                ?
                                <div className='main-content'>
                                    {/* <Component {...pageProps} /> */}
                                    {this.props.body}
                                </div> :
                            <>
                                    <Header />
                                    <div className='main-content'>
                                        {
                                            this.props.body
                                        }
                                    </div>
                                    <Footer />
                            </>
                            }
                        </div>
                    </Provider>
                </PersistGate>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        // auth: state.auth.auth
    }
}

export default withRouter(withRedux(makeStore)(connect(mapStateToProps)(Main)));