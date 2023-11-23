<template>
  <q-page class="bg-white" padding>
    <p>In order to make any real progress in our spiritual life we know we need a guru -- someone to show us the way, to challenge, correct, guide and help us.</p>
    <p> We would like to invite you to consider having Lord Jesus as your Guru</p>
    <p> Lord Jesus:</p>
    <ul>
      <li> Never told a lie</li>
      <li>Etc</li>
    </ul>
    <template>
  <q-page>
    <q-table
      :rows="this.tableRows"
      :columns="this.tableColumns"
      row-key="to"
      :rows-per-page-options="[2]"
    >
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <q-img :src="props.row.imageSrc" style="max-width: 100px" />
        </q-td>
      </template>
      <template v-slot:body-cell-to="props">
        <q-td :props="props">
          <q-btn
            :to="props.row.to"
            color="primary"
            label="Go to Page"
            dense
            flat
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default{
  name: "IndexPage",
  data() {
    return {
      selected: null,
      menuItems: [
        { to: '/mountain', imageSrc: 'menu/mountain.png' },
        { to: '/birth', imageSrc: 'menu/birth.png' },
        { to: '/life', imageSrc: 'menu/life.png' },
        { to: '/teachings', imageSrc: 'menu/teachings.png' },
        { to: '/book', imageSrc: 'menu/book.png' },
        { to: '/following', imageSrc: 'menu/following.png' },
        { to: '/leadership', imageSrc: 'menu/leading.png' },
        { to: '/questions', imageSrc: 'menu/questions.png' },
      ],
    };
  },
  computed: {
    tableRows() {
      const rows = [];
      var length = this.menuItems.length;
      console.log (length);
      for (let i = 0; i < length ; i += 2) {
        rows.push(this.menuItems.slice(i, i + 2));
      }
      return rows;
    },
    tableColumns() {
      return [
        { name: 'image', required: true, label: 'Image', align: 'center', field: 'imageSrc', format: (val) => val },
        { name: 'to', required: true, label: 'Action', align: 'center', field: 'to', format: (val) => val },
      ];
    },
  },
};
</script>
<style scoped>

.menu_item {
  margin-left: 10px;
  margin-right: 10px;
  max-width: 200px;
  width: calc(100% - 20px);
  margin: 0 auto;
  background-color: #f0f0f0; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
.menu_picture {
  max-width: 200px;
  width: calc(100% - 0px);
  margin: 0 auto;
  background-color: #f0f0f0; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
q-col.side-by-side{
  width:20px;
}
.xlist{
  width:100%;
  max-width: 600px;
}
.q-item__section{
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
</style>
