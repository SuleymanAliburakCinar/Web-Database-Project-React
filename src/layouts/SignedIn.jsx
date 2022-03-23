import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image src='/images/wireframe/square-image.png' avatar />
                <span>Username</span>
                <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item text = "Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text = "Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
