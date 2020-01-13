<template>
  <q-page class="q-pa-md">
    <ContactsTable
      ref="table"
    ></ContactsTable>
  </q-page>
</template>

<script>
  import ContactsTable from "src/components/contact/ContactsTable";

  export default {
    name: 'ContactListPage',
    components: {
      ContactsTable,
    },
  };
</script>
