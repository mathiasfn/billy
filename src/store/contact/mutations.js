import * as types from "./types";

export default {
  [types.MUTATION_SET_CONTACTS]: ({state}, contacts) => {
    state.contacts = contacts
  }
}
