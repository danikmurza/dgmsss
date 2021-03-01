import {userService} from './service'

function success(user) {
    return {
        type: 'USERS_LOGIN_SUCCESS',
        user
    }
}

function failure(error) {
    return {
        type: 'USERS_LOGIN_FAILURE',
        error
    }
}


function myAccount(body) {


        userService.myAccount(body)
            .then(
                user => {
                    success(user)
                }
            ).catch(
            error => {
                failure(error)
            }
        )
    }





export const userAction = {

    myAccount
}
