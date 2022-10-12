<script lang="ts">
import { reactive, defineComponent, ref } from 'vue';
import { Nodes, Edges, Layouts } from 'v-network-graph';
import * as vNG from 'v-network-graph';

export default defineComponent({
  name: 'App',
  setup: (props) => {
    const verticalAlign = ref('center');

    const configs = reactive(
      vNG.defineConfigs({
        node: {
          normal: {
            radius: 22,
            color: '#ff6f00',
          },
          label: {
            visible: true,
            fontFamily: undefined,
            fontSize: 18,
            color: '#fff',
            direction: 'center',
            margin: 4,
            lineHeight: 1.1,
          },
          hover: {
            color: '#ff5500',
            width: 36,
            height: 36,
            borderRadius: 8,
          },
        },
        edge: {
          normal: {
            width: 2,
            color: '#F1C40F',
            // dasharray: '4 6',
            linecap: 'round',
          },
          marker: {
            target: { type: 'arrow' },
          },
          selfLoop: {
            radius: 26,
            offset: 16,
            angle: 180,
            isClockwise: true,
          },
          hover: {
            color: '#ff5500',
          },
          label: {
            fontFamily: undefined,
            fontSize: 15,
            lineHeight: 1.1,
            color: '#000000',
            margin: 4,
            background: {
              visible: true,
              color: '#ffffff',
              padding: {
                vertical: 1,
                horizontal: 4,
              },
              borderRadius: 6,
            },
          },
        },
      })
    );

    const nodes: Nodes = {
      node1: { name: 'N1' },
      node2: { name: 'N2' },
      node3: { name: 'N3' },
    };

    const edges: Edges = {
      edge1: { id: 'edge1', source: 'node1', target: 'node2', label: '1 Gbps' },
      edge2: { id: 'edge2', source: 'node2', target: 'node3', label: '2 Gbps' },
      edge3: { id: 'edge3', source: 'node1', target: 'node1', label: '3 Gbps' }, // self-loop
      edge4: { id: 'edge4', source: 'node3', target: 'node3', label: '4 Gbps' },
      edge5: { id: 'edge5', source: 'node1', target: 'node3', label: '5 Gbps' },
    };

    const layouts: Layouts = {
      nodes: {
        node1: { x: 0, y: 0 },
        node2: { x: 120, y: 0 },
        node3: { x: 240, y: 0 },
      },
    };

    return { configs, nodes, edges, layouts, verticalAlign };
  },
});
</script>

<template>
  <div class="demo-control-panel">
    <demo-edge-self-loop-config-panel
      :radius="configs.edge.selfLoop.radius"
      :angle="configs.edge.selfLoop.angle"
      :offset="configs.edge.selfLoop.offset"
      :clockwise="configs.edge.selfLoop.isClockwise" />
  </div>

  <v-network-graph :nodes="nodes" :edges="edges" :layouts="layouts" :configs="configs">
    <template #edge-label="{ edge, ...slotProps }">
      <v-edge-label :text="edge.label" align="center" :vertical-align="verticalAlign" v-bind="slotProps" />
    </template>
  </v-network-graph>
</template>
