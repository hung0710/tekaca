
let tekway_service = '/api'; 

module.exports = {
    key: {
        storage: {
            current_account: "CURRENT_USER"

        }
    },
    action: {
        action_user_login: "ACTION_USER_LOGIN",
        action_user_logout: "ACTION_USER_LOGOUT",
    },
    booking:
    {
    
    },
    text: {
        user: {
            //messages
            login_success: "Đăng nhập thành công",
            login_fail: "Email hoặc mật khẩu không đúng"
        }
    },
    api: {
        user: {
            search: tekway_service + "/user/search",
            login: tekway_service + "/login",
            block: tekway_service + "/user/block",
            create: tekway_service + "/user/create",
            update: tekway_service + "/user/update",
        }, image: {
            upload: tekway_service + "/upload/image"
        }, test: {
            all: tekway_service + "/test"
        }
    },
} 