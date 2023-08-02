<template>
  <table class="table" border="0" rules="none" :class="{ 'table--empty': empty }">
    <table-header :table="table" />
    <table-body :table="table" />
  </table>
</template>

<script>
import TableBody from './TableBody.vue';
import TableHeader from './TableHeader.vue';
import {
  getCoreRowModel,
  getExpandedRowModel,
  // getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table';
import { ref } from 'vue';

export default {
  props: ['columns', 'data', 'empty', 'total'],
  components: {
    TableBody,
    TableHeader,
  },
  setup(props) {
    const sorting = ref([]);

    const table = useVueTable({
      get data() {
        console.log(props.data);

        return props.data;
      },
      state: {
        get sorting() {
          return sorting.value;
        },
      },
      // onSortingChange: (updaterOrValue) => {
      //   sorting.value =
      //     typeof updaterOrValue === 'function' ? updaterOrValue(sorting.value) : updaterOrValue;
      // },
      columns: props.columns,
      getSubRows: (row) => row.subRows,
      getCoreRowModel: getCoreRowModel(),
      // getSortedRowModel: getSortedRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
    });

    return {
      table,
    };
  },
};
</script>
<style lang="scss" scoped>
@import './table.scss';
</style>
