import React, { Component,Fragment } from 'react'
import StepZilla from 'react-stepzilla'
import {connect} from 'react-redux';
import InsuranceType from '../components/insurance_registration-steps/Step1_InsuranceType'
import Business from '../components/insurance_registration-steps/Step2_Business'
import BusinessDetails from '../components/insurance_registration-steps/Step3_BusinessDetails'
import PersonalAndBuildingInformation from '../components/insurance_registration-steps/Step4_PersonalAndBuildingInformation'
import BusinessOwnersPolicy from '../components/insurance_registration-steps/Step5_BusinessOwnersPolicy'
import WorkersCamp from '../components/insurance_registration-steps/Step6_WorkersCamp'
import AddtionalInfo from '../components/insurance_registration-steps/Step7_AddtionalInfo'
import Review from '../components/insurance_registration-steps/Step8_Review'
import {saveUser} from '../redux/redux_insurance';

const steps = [
	{ name: 'InsuranceType', component: <InsuranceType /> },
	{ name: 'Business', component: <Business /> },
	{ name: 'Business Details', component: <BusinessDetails /> },
	{ name: 'Personal & Building Details', component: <PersonalAndBuildingInformation /> },
	{ name: 'Business Owners Policy', component: <BusinessOwnersPolicy /> },
	{ name: 'Workers Camp', component: <WorkersCamp /> },
	{ name: 'Additional Info', component: <AddtionalInfo /> },
	{ name: 'Review', component: <Review /> }
]

class MultiStep extends Component {
	render() {
		return (
			<Fragment>
				<h1 className="page-header">Register for New Insurance</h1>
				<StepZilla
					steps={steps}
					stepsNavigation={true}
					nextButtonText='Save and Continue'
					backButtonText='Back'
					nextButtonCls="btn btn-warning active pull-right mr-0"
					backButtonCls="btn btn-primary pull-left ml-25"
					// hocValidationAppliedTo= {[0,1, 2]}
				/>

			</Fragment>
		);
	}
}

//export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(MultiStep);

export default connect((state) => ({
	register_reducer: state.register_reducer.register_user
  }), { saveUser }, null, { withRef: true })(MultiStep)