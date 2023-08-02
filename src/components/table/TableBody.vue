<template>
  <div class="table-tbody">
    <div class="table-row" v-for="row in table.getRowModel().rows" :key="row.id">
      <div class="table-tr" @click="toggleExpanded(row)">
        <div v-for="cell in row.getVisibleCells()" :key="cell.id" class="table-td table-cell">
          {{ cell }}

          <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
        </div>
      </div>
      <div class="table-expanded" v-if="table.getState().expanded[row.id]">
        <div
          class="table-expanded__item"
          v-for="[label, value] in Object.entries(row.subRows[0].original)"
          :key="label"
        >
          <div class="table-expanded__item-label">{{ label }}:</div>
          <div class="table-expanded__item-value" v-html="value"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { FlexRender } from '@tanstack/vue-table';

export default {
  props: ['table'],

  setup(props) {
    console.log(props.table);
    console.log(props.table.getRowModel().rows);
  },

  methods: {
    toggleExpanded(row) {
      row.getToggleExpandedHandler()();
    },
  },
};
</script>
<style lang=""></style>
