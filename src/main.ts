import Vue from 'vue';
import App from './App.vue';


// 导入vxe-table组件
import 'xe-utils';
import VXETable from 'vxe-table';
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx';
VXETable.use(VXETablePluginExportXLSX);
import 'vxe-table/lib/style.css';
Vue.use(VXETable);


new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app');
