import React from 'react';

export default ({ todos }) => !todos.length ? null : (
	<ul>
		{ todos.map(item => (
			<li key={ item.time }>
				{ item.title }
			</li>
		))}
	</ul>
)
	
