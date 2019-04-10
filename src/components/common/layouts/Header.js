import React, { Component} from 'react'

export default class Header extends Component {
	render(){
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top ht-72">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand"></a>
				</div>
				<div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{ height: '1px' }}>
					{/* nav goes here */}
				</div>
			</div>
		</nav>
	)
}
}