<template>
  <div>
    <q-table
      title="Contacts"
      row-key="id"
      no-data-label="You don't have any contacts yet"
      rows-per-page-label="Contacts per page"
      :data="contacts"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="loading"
      :visible-columns="visibleColumns"
      :rows-per-page-options="rowsPerPageOptions"
      @request="paginate"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search for contacts">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
        <q-btn
          color="primary"
          icon="fas fa-plus"
          round
          flat
          @click="showContactModal = true"
        >
          <q-tooltip anchor="top right" self="bottom right" :offset="[0,5]">Add a new contact</q-tooltip>
        </q-btn>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            icon="fas fa-trash"
            color="red"
            size="sm"
            round
            flat
            :loading="props.row.deleting"
            @click="deleteContact(props.row)"
          >
            <q-tooltip anchor="top middle" self="bottom middle" :offset="[0,5]">Delete contact</q-tooltip>
          </q-btn>
          <q-btn
            icon="fas fa-pen"
            color="secondary"
            size="sm"
            round
            flat
            @click="updateContact(props.row)"
          >
            <q-tooltip anchor="top middle" self="bottom middle" :offset="[0,5]">Update contact</q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>
    <ContactModal
      v-if="showContactModal"
      :contact="updatingContact"
      @hide="onContactModelHide"
      @added="onAdded"
      @updated="onUpdated"
    ></ContactModal>
  </div>
</template>

<script>
  import ContactModal from "src/components/contact/ContactModal";

  export default {
    name: 'ContactsTable',
    components: {
      ContactModal
    },
    data() {
      return {
        filter: '',
        showContactModal: false,
        updatingContact: null,
        loading: false,
        pagination: {
          page: 1,
          rowsPerPage: 10,
          rowsNumber: 1,
          descending: false,
          sortBy: 'name'
        },
        rowsPerPageOptions: [3,5,10,15,20,30],
        columns: [
          {
            name: 'name',
            label: 'Name',
            align: 'left',
            field: 'name',
            required: true,
            sortable: true
          }, {
            name: 'phone',
            label: 'Phone',
            align: 'left',
            field: 'phone',
            sortable: true
          }, {
            name: 'street',
            label: 'Street',
            align: 'left',
            field: 'street',
            sortable: true
          }, {
            name: 'countryId',
            label: 'Country',
            align: 'left',
            field: 'countryId',
          }, {
            label: '',
            name: 'actions',
            align: 'right',
            required: true
          }
        ],
        contacts: [],
        visibleColumns: ['name', 'countryId', 'phone', 'street']
      }
    },
    watch: {
      filter: {
        handler(filter) {
          this.$log.debug('watched filter', filter);
          this.paginate();
        }
      }
    },
    created() {
      this.paginate();
    },
    methods: {
      async paginate({pagination} = {}) {
        this.loading = true;
        pagination = pagination || this.pagination;
        this.$log.info('paginate contacts');
        this.$log.debug('pagination', pagination);
        this.$log.debug('filter', this.filter);

        try {
          const {data} = await this.$api.get('/contacts', {
            params: {
              q: this.filter,
              page: pagination.page,
              pageSize: pagination.rowsPerPage,
              sortProperty: pagination.sortBy,
              sortDirection: pagination.descending ? 'DESC' : 'ASC',
            }
          });
          this.$log.debug('fetched contacts', data);
          const {contacts, meta} = data;
          const {paging} = meta;
          this.contacts = contacts;
          this.pagination.page = paging.page;
          this.pagination.rowsPerPage = paging.pageSize;
          this.pagination.rowsNumber = paging.total;
          this.pagination.sortBy = pagination.sortBy;
          this.pagination.descending = pagination.descending;
        } catch (e) {
          this.$log.error('couldnt fetch contacts', e);
        }
        this.loading = false;
      },
      async deleteContact(contact) {
        this.$log.debug('delete contact', contact);
        try {
          this.$set(contact, 'deleting', true);
          await this.$api.delete(`/contacts/${contact.id}`);
          this.$log.info('deleted contact');
          this.paginate();
        } catch (e) {
          this.$log.error('couldnt delete contact', e);
          this.paginate();
        }
      },
      async updateContact(contact) {
        this.$log.debug('update contact', contact);
        this.updatingContact = contact;
        this.showContactModal = true;
      },
      onAdded() {
        this.paginate();
      },
      onUpdated() {
        this.paginate();
      },
      onContactModelHide() {
        this.showContactModal = false;
        this.updatingContact = null;
      }
    }
  }
</script>
