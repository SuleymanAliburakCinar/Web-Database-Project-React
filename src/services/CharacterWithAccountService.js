import axios from "axios";

export default class CharacterWithAccountService {
    getCharactersWithAccount() {
        return axios.get("http://localhost:8080/api/char/getAll")
    }
}