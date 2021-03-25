<template>
  <div class="page">
    <div class="col-12 bg-white py-3 mb-3">
      <div class="title mb-2">範例：{{ pageName }}</div>
      <div class="description">
        這是Vue的Table範例，使用到了<a target="_blank" href="https://bootstrap-vue.org/"
          >BootstrapVue</a
        >。<br />
        在這範例中舉例了常用的表格操作功能，如勾選、排序、分頁。<br />
        雖然看來是很複雜的功能，但有了Table元件協助，程式碼閱讀上相對容易。
      </div>
    </div>
    <div class="col-12 bg-white py-3">
      <div class="title mb-2">
        Demo展示
        <span class="goCode"
          ><a
            target="_blank"
            href="https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/TableDemo.vue"
            >( 點我前往程式碼 <i class="fas fa-external-link-alt"></i> )</a
          ></span
        >
      </div>
      <div class="text-center mt-3">
        <div class="overflow-auto text-left">
          <div class="text-left mb-2" v-if="selectedCount > 0">
            已勾選:{{ selectedCount }}
          </div>
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
