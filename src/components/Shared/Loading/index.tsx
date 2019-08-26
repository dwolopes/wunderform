import React from 'react';
import './style.scss';

const Loading = () => (
	<div className="loading">
		<div className="lds-ripple">
			<div></div>
			<div></div>
		</div>
	</div>
);

export default Loading;
