<template>
  <div class="faq" :class="{ expanded: expandedId === index }">
    <div class="faq-row" @click="toggleExpandedId(index)">
      <div class="faq-button">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="faq-title">{{ title }}</div>
    </div>
    <v-expanded>
      <div class="faq-content" v-if="expandedId === index" v-html="description"></div>
    </v-expanded>
  </div>
</template>

<script>
import VExpanded from '@/components/expanded/VExpanded.vue';
export default {
  props: ['title', 'description', 'index'],
  components: {
    VExpanded,
  },

  data() {
    return {
      expandedId: null,
    };
  },

  methods: {
    toggleExpandedId(id) {
      if (this.expandedId === id) {
        this.expandedId = null;
      } else {
        this.expandedId = id;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './faq.scss';
</style>
