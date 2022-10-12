import { createApp } from 'vue';
import VNetworkGraph from 'v-network-graph';
import 'v-network-graph/lib/style.css';
import App from './App.vue';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const app = createApp(App);

app.use(VNetworkGraph);
app.mount('#app');
