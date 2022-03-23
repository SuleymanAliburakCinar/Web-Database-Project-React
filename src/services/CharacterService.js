import axios from "axios";

export default class CharacterService {
    getCharacters() {
        return axios.get("http://localhost:8080/api/characters/getAll")
    }
}