<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <h1>This is a table demo.</h1>
    <p>Use VueBootstrap Table</p>
    <div class="container">
      <div class="overflow-auto text-left">
        <div class="text-left mb-2" v-if="selectedCount > 0">selectedCount:{{ selectedCount }}</div>
        <b-table
          striped
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
          hover
          :fields="column"
        >
          <template v-slot:cell(selected)="data">
            <input type="checkbox" v-model="data.item.selected" />
          </template>
        </b-table>
        <div style="margin: auto; text-align: center">
          <b-pagination
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  props: ["pageName"],
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      selectMode: "multi",
      column: [
        {
          key: "selected",
          label: "selected",
          thStyle: {
            width: "10%",
          },
        },
        {
          key: "id",
          sortable: true,
          label: "id",
          thStyle: {
            width: "30%",
          },
        },

        {
          key: "first_name",
          sortable: true,
          label: "first name",
          thStyle: {
            width: "30%",
          },
        },
        {
          key: "last_name",
          sortable: true,
          label: "last name",
          thStyle: {
            width: "30%",
          },
        },
      ],
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    };
  },
  watch: {
    items: {
      handler: function (newVal) {
        console.log("item:", newVal);
      },
      deep: true,
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
    selectedCount: function () {
      return this.items.filter((it) => it.selected).length;
    },
  },
};
</script>
