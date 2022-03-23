import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Table } from 'semantic-ui-react'
import AccountService from '../services/AccountService'

export default function AccountList() {

  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    let accountService = new AccountService()
    accountService.getAccounts().then(result=>setAccounts(result.data.data))
  },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Account Name</Table.HeaderCell>
            <Table.HeaderCell>Is In Game</Table.HeaderCell>
            <Table.HeaderCell>Char Count</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            accounts.map(account => (
              <Table.Row key={account.accountName}>
                <Table.Cell><Link to={`/accounts/${account.accountName}`}>{account.accountName}</Link></Table.Cell>
                <Table.Cell>{account.isInGame}</Table.Cell>
                <Table.Cell>{account.count}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
