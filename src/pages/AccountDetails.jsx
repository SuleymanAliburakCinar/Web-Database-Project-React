import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router';
import { Card } from 'semantic-ui-react';
import AccountService from '../services/AccountService';

export default function AccountDetails() {

    let { name } = useParams();

    const [account, setAccount] = useState({})

    useEffect(() => {
        let accountService = new AccountService()
        accountService.getByAccountName(name).then(result => setAccount(result.data.data))
    }, [])
    
    console.log(account.characters)
    
    return (
        
        <div>
            <Card.Group>
                
            </Card.Group>
        </div>
    );
}
