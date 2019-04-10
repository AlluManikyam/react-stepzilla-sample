import React from 'react'
import {connect} from 'react-redux';
import {saveUser} from '../../redux/redux_insurance';

class WorkersCamp extends React.Component{
	constructor(props){
		super(props)
		this.state={
			redux_reg_info:props.register_reducer, // Getting the data from redux store
			addClaims:[{date:"2016-08-24",amount:"150"}],
			claimDate:'',
			claimAmount:'',
			status:true
		}
		this.handleClaimDetailsInputChange=this.handleClaimDetailsInputChange.bind(this)
		this.storeInsuranceClaimsInformation=this.storeInsuranceClaimsInformation.bind(this)
	}

	// Show the add claims
	ShowHideAddClaims(){
		var claim=document.getElementById("AddClaims")
		if(claim.style.display === "none"){
			document.getElementById("AddClaims").style.display = "block"
		}
		else{
			document.getElementById("AddClaims").style.display = "none"
		}
	}

	// Changing the input values by onchange event and saving in state
	handleClaimDetailsInputChange(event) {
		this.setState( { status:false,[event.target.name] : event.target.value })  
	}
	
	// Adding list of claims
	addClaims(){
		var claim={date:this.state.claimDate,amount:this.state.claimAmount}
		var addclaim=this.state.addClaims.push(claim)
		this.setState({
			addClaims:this.state.addClaims,
			status:false
		})
	}

	// Store insurace claims in the redux
	storeInsuranceClaimsInformation(){
		this.props.saveUser({
			insurances:this.state.redux_reg_info.insurances,
			streetAddress:this.state.redux_reg_info.streetAddress,
			aptNumber:this.state.redux_reg_info.aptNumber,
			zipcode:this.state.redux_reg_info.zipcode,
			isMailingAddressSame:this.state.redux_reg_info.isMailingAddressSame,
			mailingAddress:this.state.redux_reg_info.mailingAddress,
			businessEnity:this.state.redux_reg_info.businessEnity,
			cFloorNumber: this.state.redux_reg_info.cFloorNumber,
			businessStartYear: this.state.redux_reg_info.businessStartYear,
			companyYearsOfExperience:this.state.redux_reg_info.companyYearsOfExperience,
			projectedAnnualRevenue: this.state.redux_reg_info.projectedAnnualRevenue,
			website:this.state.redux_reg_info.website,
			businessEnity:this.state.redux_reg_info.businessEnity,
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
			addClaims:this.state.addClaims,
			claimDate:this.state.claimDate,
			claimAmount:this.state.claimAmount,
			terrorism: this.state.redux_reg_info.terrorism,
			policyStartDate: this.state.redux_reg_info.policyStartDate,
			specialRequirements:this.state.redux_reg_info.specialRequirements
		});
	}
	componentDidMount() {

		// Store the data in the redux by clicking the next-button
		document.getElementById("next-button").addEventListener("click", this.storeInsuranceClaimsInformation);
	}

	// Received data from the redux store and saving in a state
	componentWillReceiveProps(props){
		if(props.register_reducer){
			this.setState({
				redux_reg_info:props.register_reducer
			},()=>{
				if(props.register_reducer.addClaims && this.state.status || props.register_reducer.claimDate && this.state.status || props.register_reducer.claimAmount && this.state.status){
				this.setState({
					addClaims:props.register_reducer.addClaims,
					claimDate:props.register_reducer.claimDate,
					claimAmount:props.register_reducer.claimAmount
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
				addClaims:this.state.redux_reg_info.addClaims,
				claimDate:this.state.redux_reg_info.claimDate,
				claimAmount:this.state.redux_reg_info.claimAmount
			})
		}
	}

    render(){
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10">
					<h5>Business Owner's Policy</h5>
					<h4 className="page-title fs-25">Claims & Losses</h4>
				</div>
			</div>
			<div className="row mb-20">
				{this.state.addClaims ? this.state.addClaims.map((claim, key) => {
					return (
						<div className="col-md-12">
							<h4 className="page-description">
								Claim or loss {key + 1}:
					</h4>
							<div className="d-flex">
								<p className="page-description page-align">
									<b>Date:  </b> <span className="ml-5">{claim.date}</span>
								</p>
								<p className="page-description page-amount">
									<b>Amount:  </b> <span className="ml-5">{claim.amount}</span>
								</p>
							</div>
						</div>)
				}) : ""
				}
				<div className="col-md-12">
					<div className="addInsurance" style={{ width: "100%", minHeight: "50px", border: "1px solid #f0f0f0", cursor: "text" }}>
						<h4>Location:</h4>
						<p className="page-description">Address: Anyway Drive Bryan, 256987, Bryan, TX, 77807</p>
					</div>
				</div>
			</div>
			<div className="row" >
				<div className="col-md-10">
					<h4 className="page-title fs-25">Add Claims & Losses</h4>
				</div>
			</div>
			<div className="row mb-20">
				<div className="col-md-12">
					<p className="page-description">
						If you have experienced BOP or General Liability claims or losses in the past 5 years please add them clicking the button below.
					</p>
				</div>
			</div>
			<div className="row mb-20">
				<div className="col-md-2">
					<button onClick={this.ShowHideAddClaims.bind(this)} type="button" className="btn btn-default active">Add Claims & Losses</button>
				</div>
			</div>
			<div id="AddClaims" style={{ display: "none" }} className="row mb-20">
				<div className="form-group d-flex alignCenter">
					<label for="claimDate" class="col-sm-3 control-label">Date of Occurrence</label>
					<div className="col-sm-9">
						<input onChange={this.handleClaimDetailsInputChange} name="claimDate" value={this.state.claimDate} type="date" id="claimDate" class="form-control" />
					</div>
				</div>
				<div className="form-group d-flex alignCenter">
					<label for="claimAmount" class="col-sm-3 control-label">How much has been paid for this claim or loss?</label>
					<div className="col-sm-9">
						<input onChange={this.handleClaimDetailsInputChange} name="claimAmount" value={this.state.claimAmount} type="text" id="claimAmount" class="form-control" />
					</div>
				</div>
				<div className="form-group d-flex alignCenter">
					<div className="col-md-2">
						<button type="button" onClick={this.addClaims.bind(this)} className="btn btn-default active">Add Claim</button>
					</div>
				</div>
			</div>
		</div>
	)
}
}

// Connect the redux store
export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(WorkersCamp);