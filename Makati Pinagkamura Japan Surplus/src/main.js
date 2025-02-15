import { createApp } from 'vue'
import App from './App.vue'
import BuyerTab from './component/BuyerTab.vue'
import CustomerList from './component/CustomerList.vue'
import ProductList from './component/ProductList.vue'
import SupplierList from './component/SupplierList.vue'
import TransactionList from './component/TransactionList.vue'


const app = createApp(App)
app.component('buyer-tab', BuyerTab)
app.component('customer-list', CustomerList)
app.component('product-list', ProductList)
app.component('supplier-list', SupplierList)
app.component('transaction-list', TransactionList)
app.mount('#app')