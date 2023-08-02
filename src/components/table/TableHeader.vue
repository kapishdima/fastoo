import { FlexRender } from '@tanstack/vue-table'

<template>
  <div class="table-thead">
    <div class="table-tr" v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
      <div
        v-for="header in headerGroup.headers"
        :key="header.id"
        class="table-th table-cell"
        @click="header.column.getToggleSortingHandler()?.($event)"
      >
        <FlexRender
          v-if="!header.isPlaceholder"
          :render="header.column.columnDef.header"
          :props="header.getContext()"
        />

        <!-- <div class="sorting-icon" v-if="header.column.getCanSort()">
          <img
            :src="
              {
                asc: require('@/assets/icons/sort-asc.svg'),
                desc: require('@/assets/icons/sort-desc.svg'),
              }[header.column.getIsSorted()]
            "
            alt=""
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { FlexRender } from '@tanstack/vue-table';

export default {
  props: ['table'],
  setup() {
    return {
      FlexRender,
    };
  },
};
</script>
