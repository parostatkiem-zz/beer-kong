import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Header from 'components/Header/Header'
import Button from 'components/CustomButtons/Button'
import UserInfoContext from 'contexts/UserInfoContext/UserInfo.context';
import UserDisplay from './UserDisplay/UserDisplay'



const LoginLogoutButtons = ({ clientId, isLoggedIn, onLogout, onResponse }) => !isLoggedIn ?
    <GoogleLogin
        clientId={clientId}
        render={renderProps => (
            <Button color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</Button>
        )}
        onSuccess={onResponse}
        onFailure={onResponse}
        cookiePolicy={'single_host_origin'}
    /> :
    <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onLogout}
        render={renderProps => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</Button>
        )}
    >
    </GoogleLogout>


const TopHeader = () => {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    function responseGoogle(resp) {
        console.log('google response:', resp)
        setUserInfo(resp.error ? null : resp);
    }

    function logout() {
        setUserInfo(null);
    }

    return <Header
        brand="Beer kong"
        fixed

        changeColorOnScroll={{
            height: 400,
            color: "primary"
        }}
        rightLinks={
            <>
                {userInfo && <UserDisplay
                    image={userInfo.profileObj.imageUrl}
                    name={`${userInfo.profileObj.givenName} ${userInfo.profileObj.familyName}`} />}
                <LoginLogoutButtons
                    onResponse={responseGoogle}
                    onLogout={logout}
                    isLoggedIn={!!userInfo}

                    clientId="315865323177-9860safp7u33rghq3l7v7sbqppdjs4vu.apps.googleusercontent.com" />
            </>
        }
    >
    </Header>
}


export default TopHeader;