import React from 'react'
import {connect} from 'react-redux';
import {saveUser} from '../../redux/redux_insurance';

class Review extends React.Component{
	constructor(props){
		super(props);
		this.state={	
				redux_reg_info:"",
				status:true
		}
	}	

	// Received data from the redux store and saving in a state
	componentWillReceiveProps(props){
		if(props.register_reducer){
			this.setState({
				redux_reg_info:props.register_reducer
			})
		}
	}


 render(){
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10">
					<h4 className="page-title fs-25">Review</h4>
				</div>
			</div>
			<div className="row mb-20">
				<div className="col-md-12">
					<p className="page-description">Upon submission, a CoverWallet account will be created for you, where you can see your application and get status updates.</p>
					<div className="addInsurance rect-block">
						<h4>Review Your Information</h4>
					</div>
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">Insurance Type(s)</h4>
						
						<div className="d-flex">
						{this.state.redux_reg_info && this.state.redux_reg_info.insurances.map((insurance,key)=>{
							return (
								<p className="page-description">{this.state.redux_reg_info.insurances.length > key + 1 ? insurance + "," : insurance}</p>
							)
						})
						}
						</div>	
						</div>		
						
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">Where is your business located?</h4>
						<div className="d-flex">
							<p className="col-md-5">Location</p>
							<p className="col-md-7">{this.state.redux_reg_info.zipcode}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Is your mailing address the same as your business address?</p>
							<p className="col-md-7">{this.state.redux_reg_info.isMailingAddressSame}</p>
						</div>
					</div>
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">Company Name</h4>
						<div className="d-flex">
							<p className="col-md-5">Company Name</p>
							<p className="col-md-7">{this.state.redux_reg_info.cFloorNumber}</p>
						</div>
					</div>
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">Business Details</h4>
						<div className="d-flex">
							<p className="col-md-5">Business start year</p>
							<p className="col-md-7">{this.state.redux_reg_info.businessStartYear}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">How many years of experience do you have in this industry?</p>
							<p className="col-md-7">{this.state.redux_reg_info.companyYearsOfExperience}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Projected annual revenue (next 12 months)</p>
							<p className="col-md-7">${this.state.redux_reg_info.projectedAnnualRevenue}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">What form of business entity do you have?</p>
							<p className="col-md-7">{this.state.redux_reg_info.businessEnity}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Website (optional)</p>
							<p className="col-md-7">{this.state.redux_reg_info.website}</p>
						</div>
					</div>
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">Primary Contact Info</h4>
						<div className="d-flex">
							<p className="col-md-5">First Name</p>
							<p className="col-md-7">{this.state.redux_reg_info.firstName}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">LastName</p>
							<p className="col-md-7">{this.state.redux_reg_info.lastName}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Email</p>
							<p className="col-md-7">{this.state.redux_reg_info.email}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Phone</p>
							<p className="col-md-7">{this.state.redux_reg_info.phoneNumber}</p>
						</div>
					</div>
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">Business Owners Policy (BOP) Building(s) Info</h4>
						<div className="d-flex">
							<p className="col-md-5">Type of Building</p>
							<p className="col-md-7">{this.state.redux_reg_info.typeOfBuilding}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">How is the building constructed?</p>
							<p className="col-md-7">{this.state.redux_reg_info.buildingConstructionType}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Is there a fire alarm system?</p>
							<p className="col-md-7">{this.state.redux_reg_info.fireAlaram}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Are there automatic sprinklers?</p>
							<p className="col-md-7">{this.state.redux_reg_info.automaticSprinklers}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">When was the building constructed (year)?</p>
							<p className="col-md-7">{this.state.redux_reg_info.constructionYear}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">What is the replacement cost of your business personal property?</p>
							<p className="col-md-7">{this.state.redux_reg_info.bppReplacementCost}</p>
						</div>
					</div>
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">TRIA</h4>
						<div className="d-flex">
							<p className="col-md-5">Do you want coverage for Certified Acts of Terrorism?</p>
							<p className="col-md-7">{this.state.redux_reg_info.terrorism}</p>
						</div>
					</div>
					<div className="addInsurance reviewText">
						<h4 className="reviewTitle">Other Info</h4>
						<div className="d-flex">
							<p className="col-md-5">When would you like your policy to start?</p>
							<p className="col-md-7">{this.state.redux_reg_info.policyStartDate}</p>
						</div>
						<div className="d-flex">
							<p className="col-md-5">Notes</p>
							<p className="col-md-7">{this.state.redux_reg_info.specialRequirements}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
}

export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(Review);
