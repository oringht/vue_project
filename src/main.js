import Vue from "vue";
import App from "./App.vue";
//全局引用
//import MintUI from "mint-ui";
//Vue.use(MintUI);
//import "mint-ui/lib/style.css";
//头部导入
import { Header } from "mint-ui";

Vue.component(Header.name, Header);
//导入mui样式
import "./lib/mui/css/mui.css";
const vm = new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(App);
  }
});
