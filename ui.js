'use strict';
const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const Table = importJsx('./src/components/Table');


const App = () => (

<>
	<Gradient name = "rainbow">
			<BigText text = "Crypto currency" align = 'center' font='chrome' />
	</Gradient>
	<Table/>
</>

);

module.exports = App;
