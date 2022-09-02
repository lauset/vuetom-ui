<template>
<div v-if="showControlBar" class="vt-global-search vt-clearfix">
  <div class="vt-global-search__input vt-pull-left">
    <form @submit.prevent v-if="searchEnabled" role="search">
      <label :for="id">
        <span aria-hidden="true" class="input__icon">
          <div class="magnifying-glass"></div>
        </span>
        <span class="sr-only">Search</span>
      </label>
    <input
      :id="id"
      type="text"
      class="vt-input vt-pull-left"
      :placeholder="globalSearchPlaceholder"
      :value="value"
      @input="updateValue($event.target.value)"
      @keyup.enter="entered($event.target.value)" />
    </form>
  </div>

  <div class="vt-global-search__actions vt-pull-right">
    <slot name="internal-table-actions">
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'VtGlobalSearch',
  props: [
    'value',
    'searchEnabled',
    'globalSearchPlaceholder',
  ],
  emits: [
    'input',
    'keyup',
    'enter',
  ],
  data() {
    return {
      globalSearchTerm: null,
      id: this.getId(),
    };
  },
  computed: {
    showControlBar() {
      if (this.searchEnabled) return true;
      if (this.$slots && this.$slots['internal-table-actions']) return true;
      return false;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
      this.$emit('keyup', value);
    },
    entered(value) {
      this.$emit('enter', value);
    },
    getId() {
      return `vt-search-${Math.floor(Math.random() * Date.now())}`;
    },
  },
};
</script>

<style>

</style>
