import { mount, createLocalVue } from '@vue/test-utils'
import ContactModal from 'src/components/contact/ContactModal'
import VueLogger from 'vuejs-logger';
import * as All from 'quasar'
const {Quasar} = All;

// register all Quasar child components
const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {});

describe('Contact Modal', () => {
  const localVue = createLocalVue();
  localVue.use(VueLogger);
  localVue.use(Quasar);

  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = mount(ContactModal, {
      localVue,
      components,
    });
    expect(wrapper.isVueInstance()).toBe(true)
  });

  it('Sets the default form correctly if a contact is provided', () => {
    const fakeContact = {
      id: 1,
      name: 'Test',
      countryId: 'DK',
      phone: '12345678',
      street: 'street'
    };
    const wrapper = mount(ContactModal, {
      localVue,
      components,
      propsData: {
        contact: fakeContact
      }
    });
    const vm = wrapper.vm;

    expect(vm.form.data).toEqual(fakeContact)
  });

  it('Sets the default form correctly if no contact is provided', () => {
    const defaultForm = {
      name: '',
      phone: '',
      countryId: null,
      street: ''
    };
    const wrapper = mount(ContactModal, {
      localVue,
      components,
    });
    const vm = wrapper.vm;

    expect(vm.form.data).toEqual(defaultForm)
  });

  // test if it correctly adds/updates contact on form submit
  // test if it correctly emits added/updated events after submit
  // test if it fetches countries
  // test if it correctly hides and resets form after successfully submits
});
