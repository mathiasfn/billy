<template>
  <q-dialog
    ref="modal"
    :value="true"
    @hide="onHide"
    @show="onShow"
  >
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6">Add a new contact</div>
      </q-card-section>

      <q-card-section style="max-height: 50vh" class="scroll">
        <div @keyup.enter="submit">
          <q-input
            v-model="form.data.name"
            label="Name"
            autofocus
            :error="form.hasError('name')"
            :error-message="form.getError('name')"
            @input="form.deleteError('name')"
          ></q-input>

          <q-input
            v-model="form.data.phone"
            type="number"
            label="Phone"
            :error="form.hasError('phone')"
            :error-message="form.getError('phone')"
            @input="form.deleteError('phone')"
          ></q-input>

          <q-select
            v-model="form.data.countryId"
            label="Country"
            emit-value
            map-options
            :error="form.hasError('countryId')"
            :error-message="form.getError('countryId')"
            :options="countryOptions"
            @input="form.deleteError('countryId')"
            @keyup.enter.stop
          ></q-select>

          <q-input
            v-model="form.data.street"
            label="Street"
            :error="form.hasError('street')"
            :error-message="form.getError('street')"
            @input="form.deleteError('street')"
          ></q-input>
        </div>
      </q-card-section>

      <q-card-actions align="between">
        <q-btn
          label="Cancel"
          tabindex="-1"
          flat
          @click="cancel"
        ></q-btn>
        <q-btn
          :label="contact ? 'Update' : 'Add'"
          color="primary"
          flat
          :loading="form.$loading"
          @click="submit"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
  import BillyForm from "src/classes/BillyForm";

  export default {
    name: 'ContactAddModal',
    data() {
      return {
        form: null,
        countries: []
      }
    },
    props: {
      contact: {
        type: Object,
        default: null
      }
    },
    computed: {
      countryOptions() {
        return this.countries.map(({name, alpha2Code}) => {
          return {
            label: name,
            value: alpha2Code
          }
        })
      },
    },
    created() {
      this.setForm();
      this.getCountries();
    },
    methods: {
      setForm() {
        this.$log.info('contact modal setting form');
        let form = null;

        if (this.contact) {
          this.$log.debug('fill form from contact', this.contact);
          form = _.pick(this.contact, [
            'id',
            'name',
            'phone',
            'countryId',
            'street'
          ])
        } else {
          this.$log.info('Use empty form');
          form = {
            name: '',
            phone: '',
            countryId: null,
            street: ''
          }
        }

        this.$log.debug('initial form', form);
        this.form = new BillyForm(form)
      },
      async getCountries() {
        try {
          const {data} = await this.$axios.get('https://restcountries.eu/rest/v2/region/europe');
          this.$log.info('fetched countried', data);
          this.countries = data;
        } catch (e) {
          this.$log.error('error fetching countries', e);
        }
      },
      hide() {
        this.$refs.modal.hide();
      },
      onHide() {
        this.$emit('hide')
      },
      onShow() {
        this.$emit('show')
      },
      cancel() {
        this.$log.info('cancel contact modal');
        this.hide();
        this.form.reset();
      },
      async submit() {
        this.$log.info('submit form', this.form);
        if (this.form.$loading) {
          return;
        }

        try {
          this.form.startProcessing();

          if (this.contact) {
            await this.updateContact();
          } else {
            await this.addContact()
          }

          this.hide();
          this.form.reset();
        } catch (e) {
          this.$log.error('error submitting form', e);
          this.form.failProcessing('contact', e);
        }
      },
      async addContact() {
        this.$log.info('create contact');
        const response = await this.$api.post('/contacts', {
          contact: this.form.data
        });
        this.$log.debug('contact created', response);
        this.$emit('added');
      },
      async updateContact() {
        this.$log.info('update contact');
        const response = await this.$api.patch('/contacts', {
          contacts: [this.form.data]
        });
        this.$log.debug('contact updated', response);
        this.$emit('updated');
      }
    }
  }
</script>
