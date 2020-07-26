import {
    HANDLE_SEARCH
} from "../constants";

export class searchAction {
    static handleSearch(payload) {
        return {
            type: HANDLE_SEARCH,
            payload
        };
    }

}