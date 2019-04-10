import React from 'react'
import {connect} from 'react-redux';
import {saveUser} from '../../redux/redux_insurance';

class BusinessDetails extends React.Component{
	constructor(props){
		super(props);
		this.state={
			redux_reg_info:props.register_reducer, // Getting the data from redux store
			cFloorNumber: "",
			businessStartYear: "",
			companyYearsOfExperience:"",
			projectedAnnualRevenue: "",
			website:"",
			businessEnity:"",				
			status:true
		}
	 this.handleBusinessDetailsInputChange=this.handleBusinessDetailsInputChange.bind(this)
	 this.storeBusinessDetailsInformation=this.storeBusinessDetailsInformation.bind(this)
	}	

	// Changing the input values by onchange event and saving in state
	handleBusinessDetailsInputChange(event) {
		this.setState( { status:false,[event.target.name] : event.target.value })  
	}

	// Received data from the redux store and saving in a state
	componentWillReceiveProps(props){
		if(props.register_reducer){
			this.setState({
				redux_reg_info:props.register_reducer
			},()=>{
				if(props.register_reducer.businessStartYear && this.state.status || props.register_reducer.projectedAnnualRevenue && this.state.status ||props.register_reducer.website && this.state.status ||props.register_reducer.businessEnity  && this.state.status){
					this.setState({
						cFloorNumber: props.register_reducer.cFloorNumber,
						businessStartYear:props.register_reducer.businessStartYear,
						companyYearsOfExperience:props.register_reducer.companyYearsOfExperience,
						projectedAnnualRevenue:props.register_reducer.projectedAnnualRevenue,
						website:props.register_reducer.website,
						businessEnity:props.register_reducer.businessEnity
					})
				}
			})
		}
	}

	componentWillMount(){

		// When user clicks on the back button of the insurance registration process then it will checks and saving in a state
		if(this.state.redux_reg_info)
		{
			this.setState({
				cFloorNumber: this.state.redux_reg_info.cFloorNumber,
				businessStartYear:this.state.redux_reg_info.businessStartYear,
				companyYearsOfExperience:this.state.redux_reg_info.companyYearsOfExperience,
				projectedAnnualRevenue:this.state.redux_reg_info.projectedAnnualRevenue,
				website:this.state.redux_reg_info.website,
				businessEnity:this.state.redux_reg_info.businessEnity
			})
		}
	}
	
	// Store business details in the redux
	storeBusinessDetailsInformation(){
		this.props.saveUser({insurances:this.state.redux_reg_info.insurances,
			insurances:this.state.redux_reg_info.insurances,
			streetAddress:this.state.redux_reg_info.streetAddress,
			aptNumber:this.state.redux_reg_info.aptNumber,
			zipcode:this.state.redux_reg_info.zipcode,
			isMailingAddressSame:this.state.redux_reg_info.isMailingAddressSame,
			mailingAddress:this.state.redux_reg_info.mailingAddress,
			businessEnity:this.state.redux_reg_info.businessEnity,
			cFloorNumber:this.state.cFloorNumber,
			businessStartYear:this.state.businessStartYear,
			companyYearsOfExperience:this.state.companyYearsOfExperience,
			projectedAnnualRevenue:this.state.projectedAnnualRevenue,
			website:this.state.website,
			businessEnity:this.state.businessEnity,
			firstName:this.state.redux_reg_info.firstName,
			lastName:this.state.redux_reg_info.lastName,
			phoneNumber:this.state.redux_reg_info.phoneNumber,
			email:this.state.redux_reg_info.email,
			typeOfBuilding:this.state.redux_reg_info.typeOfBuilding,
			buildingConstructionType:this.state.redux_reg_info.buildingConstructionType,
			automaticSprinklers:this.state.redux_reg_info.automaticSprinklers,
			fireAlaram:this.state.redux_reg_info.fireAlaram,
			centralBurglarAlaramSystem:this.state.redux_reg_info.centralBurglarAlaramSystem,
			totalStories:this.state.redux_reg_info.totalStories,
			constructionYear:this.state.redux_reg_info.constructionYear,
			bppReplacementCost:this.state.redux_reg_info.bppReplacementCost,
			addClaims:this.state.redux_reg_info.addClaims,
			claimDate:this.state.redux_reg_info.claimDate,
			claimAmount:this.state.redux_reg_info.claimAmount,
			terrorism: this.state.redux_reg_info.terrorism,
			policyStartDate: this.state.redux_reg_info.policyStartDate,
			specialRequirements:this.state.redux_reg_info.specialRequirements

		});
	}

	componentDidMount() {

		// Store the data in the redux by clicking the next-button
		document.getElementById("next-button").addEventListener("click", this.storeBusinessDetailsInformation);
	}

	
 render(){

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10">
				<h4 className="page-title fs-25">Tell us the name of your company</h4>
				</div>
			</div>
			<div className="row mb-20">
				<div className="col-md-12">
				<p className="page-description label-heading"  >Company Name</p>
				<div className="form-group d-flex alignCenter">
					<label htmlFor="cFloorNumber" className="col-sm-4 control-label labelmap">Company Name</label>
					<div className="col-sm-9">
						<input  value={this.state.cFloorNumber} onChange={this.handleBusinessDetailsInputChange}  name="cFloorNumber" type="text" id="cFloorNumber"  className="form-control input-text"  />
					</div>
				</div>
				
				</div>			
			</div>
			<div className="row mb-20">

			<div className="col-md-12">
			<h4 className="page-title fs-25">Tell us about your company</h4>
			<p className="page-description label-heading"  >Company Info</p>
			<div className="form-group d-flex alignCenter">
					<label htmlFor="businessStartYear" className="col-sm-4 control-label labelmap">Business start year</label>
					<div className="col-sm-9">
						<input value={this.state.businessStartYear} onChange={this.handleBusinessDetailsInputChange}  name="businessStartYear" type="text" id="businessStartYear"  className="form-control input-text"  />
					</div>
			</div> 
			<div className="form-group d-flex alignCenter">
					<label htmlFor="companyYearsOfExperience" className="col-sm-4 control-label labelmap">How many years of experience do you have in this industry?</label>
					<div className="col-sm-9">
						<input value={this.state.companyYearsOfExperience} onChange={this.handleBusinessDetailsInputChange}  name="companyYearsOfExperience" type="text" id="companyYearsOfExperience"  className="form-control input-text"  />
					</div>
			</div>
			<div className="form-group d-flex alignCenter">
					<label htmlFor="projectedAnnualRevenue" className="col-sm-4 control-label labelmap">Projected annual revenue<div>(next 12 months)</div></label>
					<div className="col-sm-9">
						<input value={this.state.projectedAnnualRevenue} onChange={this.handleBusinessDetailsInputChange}  name="projectedAnnualRevenue" type="text" id="projectedAnnualRevenue"  className="form-control input-text"  />
					</div>
			</div>
			<div className="form-group d-flex alignCenter">
					<label htmlFor="website" className="col-sm-4 control-label labelmap">Website<div>(Optional)</div></label>
					<div className="col-sm-9">
						<input value={this.state.website} onChange={this.handleBusinessDetailsInputChange}  name="website" type="text" id="website"  className="form-control input-text"  />
					</div>
			</div>
			<div className="form-group  d-flex alignCenter mt-8">
					<label  htmlFor="businessEnity" className="ccol-sm-4 control-label labelmap select-label">What form of business entity do you have?</label>
					<div className="col-sm-8">
					<select  name="businessEnity" value={this.state.businessEnity} onChange={this.handleBusinessDetailsInputChange}  className="form-control entity-type" id="businessEnity">
						<option value=""></option>
						<option value="Individual">Individual</option>
						<option value="Partnership">Partnership</option>
						<option value="Corporation">Corporation</option>
						<option value="Non-Profit">Non-Profit</option>
						<option value="Trust">Trust</option>
					</select>
				</div>
				</div>
			</div>			
		</div>
		</div>
	)
}
}

// Connect the redux store
export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(BusinessDetails);
