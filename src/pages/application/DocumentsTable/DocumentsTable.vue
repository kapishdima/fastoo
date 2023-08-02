<template>
  <v-page classes="document-table-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account Details" />

    <section class="section-documents">
      <div class="section-decoration"></div>
      <v-table
        :data="applications"
        :columns="columns"
        :emtpy="false"
        v-if="!loading && applications"
      />
    </section>
  </v-page>
</template>

<script>
import { createColumnHelper } from '@tanstack/vue-table';

import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import VTable from '@/components/table/VTable.vue';
import { expandedButton } from '@/components/table/ExpandedButton.js';
import { getApplications } from '@/api/application.api.js';

export default {
  components: {
    VPage,
    SectionBanner,
    VTable,
  },

  setup() {
    const columnHelper = createColumnHelper();

    const columns = [
      columnHelper.accessor('ID', {
        cell: (info) => {
          const value = info.getValue();
          const isExpanded = info.row.getIsExpanded();
          const onClick = info.row.getToggleExpandedHandler();
          return expandedButton(value, isExpanded, onClick);
        },
        header: (props) => props.column.id,
        sortDescFirst: true,
      }),
      columnHelper.accessor((row) => `${row.merchant.name}`, {
        cell: (info) => info.getValue(),
        header: 'Merchant name',
        sortDescFirst: true,
      }),

      columnHelper.accessor((row) => `${row.merchant.country}`, {
        header: 'Merchant country',
        cell: (info) => info.getValue(),
        sortDescFirst: true,
      }),
      columnHelper.accessor((row) => `${row.merchant.address}`, {
        header: 'Merchant address',
        cell: (info) => info.getValue(),
        sortDescFirst: true,
      }),
    ];

    return { columns };
  },

  data() {
    return {
      loading: false,
      applications: [],
    };
  },

  async mounted() {
    this.loading = true;
    const applications = await getApplications();
    console.log(applications);
    this.applications = applications.save_data;
    this.loading = true;
  },
};
</script>

<style lang="scss" scoped>
@import './document-table.scss';
</style>
