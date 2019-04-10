import React, { Fragment } from 'react'
import Header from './components/common/layouts/Header'
import Footer from './components/common/layouts/Footer'
import MultiStepInsuranceRegistration from './containers/InsuranceRegistrationPage'

export default class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<MultiStepInsuranceRegistration />
						</div>
					</div>
					<hr />
				<Footer />
				</div>
			</Fragment>
		);
	}
}
