import { mount, createLocalVue } from '@vue/test-utils'
import ContactModal from 'src/components/contact/ContactModal'
import VueLogger from 'vuejs-logger';
import * as All from 'quasar'

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

  const wrapper = mount(ContactModal, {
    localVue,
    components
  });

  const vm = wrapper.vm;

  it('passes the sanity check and creates a wrapper', () => {
    expect(3).toBe(3);
  })
});
