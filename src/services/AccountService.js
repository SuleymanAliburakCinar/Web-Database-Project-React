import axios from "axios";

export default class AccountService {
    getAccounts() {
        return axios.get("http://localhost:8080/api/accounts/getAllAccounts")
    }

    getByAccountName(accountName){
        return axios.get("http://localhost:8080/api/accounts/getByAccountName?accountName="+accountName)
    }                     
}