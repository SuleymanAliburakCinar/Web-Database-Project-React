import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import CharacterService from '../services/CharacterService'

export default function CharacterList() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    let characterService = new CharacterService()
    characterService.getCharacters().then(result=>setCharacters(result.data.data))
  },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Character Name</Table.HeaderCell>
            <Table.HeaderCell>Character Level</Table.HeaderCell>
            <Table.HeaderCell>Last Login</Table.HeaderCell>
            <Table.HeaderCell>Delete Time</Table.HeaderCell>
            <Table.HeaderCell>Is In Academy</Table.HeaderCell>
            <Table.HeaderCell>Is Graduated</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            characters.map(character => (
              <Table.Row key={character.characterName}>
                <Table.Cell>{character.characterName}</Table.Cell>
                <Table.Cell>{character.characterLevel}</Table.Cell>
                <Table.Cell>{character.lastLoginDate}</Table.Cell>
                <Table.Cell>{character.deleteDate}</Table.Cell>
                <Table.Cell>{character.isInAcademy}</Table.Cell>
                <Table.Cell>{character.isGraduated}</Table.Cell>
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