import React from 'react'
import {connect} from 'react-redux';
import {saveUser} from '../../redux/redux_insurance';

class AddtionalInfo extends React.Component{
	constructor(props){
		super(props);
		this.state={
			redux_reg_info:props.register_reducer, // Getting the data from redux store
			terrorism: "",
			policyStartDate: "",
			specialRequirements: "",				
			status:true
		}
	 this.handlePolicyStartDateChange=this.handlePolicyStartDateChange.bind(this)
	 this.handleSpecialRequirements=this.handleSpecialRequirements.bind(this)
	 this.storeAdditionalInformation=this.storeAdditionalInformation.bind(this)
	}	

	// Received data from the redux store and saving in a state
	componentWillReceiveProps(props){
		if(props.register_reducer){
			this.setState({
				redux_reg_info:props.register_reducer
			},()=>{
				if(props.register_reducer.terrorism && this.state.status || props.register_reducer.policyStartDate && this.state.status || props.register_reducer.specialRequirements && this.state.status){
				this.setState({
					terrorism:props.register_reducer.terrorism,
					policyStartDate:props.register_reducer.policyStartDate,
					specialRequirements:props.register_reducer.specialRequirements
				},()=>{
					if(this.state.terrorism=="No"){
						this.handleTerrorism("No")
					}else if(this.state.terrorism=="Yes"){
						this.handleTerrorism("Yes")
					}
					else{
						return
					}
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
				terrorism:this.state.redux_reg_info.terrorism,
				policyStartDate:this.state.redux_reg_info.policyStartDate,
				specialRequirements:this.state.redux_reg_info.specialRequirements
			},()=>{
				if(this.state.terrorism=="No"){
					this.handleTerrorism("No")
				}else if(this.state.terrorism=="Yes"){
					this.handleTerrorism("Yes")
				}
				else{
					return
				}
			})
		}
	}

	// Changing the input values by onchange event and saving in state
	handlePolicyStartDateChange (event) {
		this.setState( { status:false,policyStartDate : event.target.value })   
	}

	handleSpecialRequirements (event) {
		this.setState( { status:false,specialRequirements : event.target.value })   
	}

	// Store addtional information in the redux
	storeAdditionalInformation(){
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
			addClaims:this.state.redux_reg_info.addClaims,
			claimDate:this.state.redux_reg_info.claimDate,
			claimAmount:this.state.redux_reg_info.claimAmount,
			terrorism:this.state.terrorism,
			policyStartDate:this.state.policyStartDate,
			specialRequirements:this.state.specialRequirements
		})
	}

	// Select the certified acts of terrorism
	handleTerrorism(type){
		if(type=="Yes"){
			this.setState({
				terrorism:"Yes",
				status:false
			})
			document.getElementById("yesTerrorism").style.backgroundColor ="#568ad6"
			document.getElementById("noTerrorism").style.backgroundColor = "#fff"
			document.getElementById("p_yes_terrorism").style.color = "#fff"
			document.getElementById("p_no_terrorism").style.color =  "#000"

		}
		else if(type=="No")	{
			this.setState({
				terrorism:"No",
				status:false
			})
			document.getElementById("yesTerrorism").style.backgroundColor ="#fff"
			document.getElementById("noTerrorism").style.backgroundColor = "#568ad6"
			document.getElementById("p_yes_terrorism").style.color = "#000"
			document.getElementById("p_no_terrorism").style.color =  "#fff"
		}
	}

	componentDidMount() {

		// Store the data in the redux by clicking the next-button
		document.getElementById("next-button").addEventListener("click", this.storeAdditionalInformation);
	}

 render(){

	return (
		<div className="container">
			<div className="row" >
				<div className="col-md-10">
				<h4 className="page-title fs-25">TRIA</h4>
				</div>
			</div>
			<div className="form-group d-flex alignCenter">
					<label htmlFor="percentage" className="col-sm-3 control-label labelmap">Do you want coverage for Certified Acts of Terrorism?</label>
					<div className="col-sm-9">
					<div className="col-md-2 p-0 mb-12">
						<button id="yesTerrorism"  onClick={this.handleTerrorism.bind(this,"Yes")} type="button" className="btn btn-default btn-lg p-7 isMail">
							<p className="fs-14"  id="p_yes_terrorism">Yes</p>
						</button>
					</div>
					<div className="col-md-2 p-0 mb-12 ml-25">
						<button id="noTerrorism" onClick={this.handleTerrorism.bind(this,"No")} type="button" className="btn btn-default btn-lg p-7 isMail">
							<p className="fs-14" id="p_no_terrorism">No</p>
						</button>
					</div>
		
				</div>
			</div>
            <div className="form-group">
            <h4 className="page-title fs-25">OTHER</h4>
				<span  for="birthDate" className="control-label mt-15 mb-5">When would you like your policy to start?</span>
				<input onChange={this.handlePolicyStartDateChange} name="policyStartDate" value={this.state.policyStartDate}  type="date" id="policyStartDate" class="form-control"/><br/>
				<span for="birthDate" className="control-label mt-5">Is there anything special we should know about your business or the specific coverage you need? For example, minimum insurance requirements or claims you've made in the last 3 years.</span>
				<textarea value={this.state.specialRequirements} onChange={this.handleSpecialRequirements} rows="8"  id="specialRequirements" class="form-control"/>
			</div>

		</div>
	)
}
}

// Connect the redux store
export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(AddtionalInfo);
