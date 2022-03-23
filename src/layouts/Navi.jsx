import { useHistory } from "react-router-dom";
import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSingOut() {
        setIsAuthenticated(false)
    }
    function handleSingIn() {
        setIsAuthenticated(true)
    }

    const history = useHistory();

    function handleCharacter() {
        history.push("/characters");
    }

    function handleAccount() {
        history.push("/accounts");
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='Characters' onClick={handleCharacter}/>
                    <Menu.Item name='Accounts' onClick={handleAccount}/>
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSingOut} /> : <SignedOut signIn={handleSingIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
