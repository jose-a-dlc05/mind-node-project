import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const edges = [{ id: '1-2', source: '1', target: '2' }];

const nodes = [
	{
		id: '1',
		position: { x: 0, y: 0 },
		data: { label: 'Hello' },
		type: 'input',
	},
	{
		id: '2',
		position: { x: 100, y: 100 },
		data: { label: 'World' },
	},
];

function Flow() {
	return (
		<div style={{ width: '100%', height: '700px' }}>
			<ReactFlow nodes={nodes as any} edges={edges}>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
}

export default Flow;
