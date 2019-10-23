import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Header from 'components/Header/Header'



function responseGoogle(resp) {
    console.log('google response:', resp)
}

function logout() {
    console.log('LOGOUT')
}

const LoginLogoutButtons = ({ clientId }) => <>
    <GoogleLogin
        clientId={clientId}
        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
        )}

        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
    <GoogleLogout
        clientId={clientId}

        onLogoutSuccess={logout}
        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
        )}
    >
    </GoogleLogout>
</>

const TopHeader = ({ }) => {


    return <Header
        brand="Beer kong"
        // rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
            height: 400,
            color: "black"
        }}
        rightLinks={
            <LoginLogoutButtons clientId="315865323177-9860safp7u33rghq3l7v7sbqppdjs4vu.apps.googleusercontent.com" />
        }
    >
    </Header>
}


export default TopHeader;