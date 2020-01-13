import Vue from 'vue'
import { api } from "src/boot/axios";
import * as types from "./types";

export default {
  [types.ACTION_GET_CONTACTS]: async ({ commit }) => {
    try {
      const contacts = await api.get('contacts');
      commit(types.MUTATION_SET_CONTACTS, contacts);
    } catch(e) {
      Vue.$log.error('couldnt fetch contacts', e)
    }
  }
};
