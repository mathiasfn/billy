import Vue from 'vue';

export default class BillyForm {
  constructor(form = {}) {
    this.$initial = Object.assign({}, form);
    this.data = Object.assign({}, this.$initial);
    this.$errors = null;
    this.$loading = false;
    this.reset();
  }

  reset() {
    Object.assign(this.data, this.$initial);
    this.$loading = false;
    this.deleteErrors();
  }

  startProcessing() {
    this.$loading = true;
    this.deleteErrors();
  }

  finishProcessing() {
    this.$loading = false;
    this.deleteErrors();
  }

  failProcessing(model, error) {
    this.$loading = false;

    const errors = _.get(error, 'response.data');

    if (!_.isNil(errors)) {
      this.setErrors(model, errors)
    }
  }

  getError(key) {
    return _.get(this.$errors, key);
  }

  hasError(key) {
    const error = this.getError(key);
    return !_.isNil(error)
  }

  deleteErrors() {
    this.$errors = null;
  }

  deleteError(key) {
    const hasError = this.hasError(key);

    if (hasError) {
      Vue.delete(this.$errors, key)
    }
  }

  setErrors(model, {validationErrors} = {}) {
    const errors = _.get(validationErrors, [model, 'attributes']);
    if (errors) {
      this.$errors = errors;
    } else {
      this.$errors = null;
    }
  }
}
