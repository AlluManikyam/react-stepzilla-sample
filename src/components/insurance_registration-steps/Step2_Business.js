import React, { Component } from 'react'
import {connect} from 'react-redux';
import {saveUser} from '../../redux/redux_insurance';
import Map from './Map'

class Business extends Component{
	constructor(props) {
		super(props);
		this.state = {
			redux_reg_info:props.register_reducer, // Getting the data from redux store
			insurances:[],
			streetAddress: "",
			aptNumber:"",
			zipcode:"",
			isMailingAddressSame:"",
			mailingAddress:{mStreetAddress:"",mAptNumber:"",mZipcode:""},
			status:true
		}
		this.handleBusinessInputChange = this.handleBusinessInputChange.bind(this)
		this.handleMailingAddressChange = this.handleMailingAddressChange.bind(this)
		this.storeBusinessInformation = this.storeBusinessInformation.bind(this)
	}	

	componentWillMount(){

		// When user clicks on the back button of the insurance registration process then it will checks and saving in a state
		if(this.state.redux_reg_info)
		{
			this.setState({
				streetAddress:this.state.redux_reg_info.streetAddress,
				aptNumber:this.state.redux_reg_info.aptNumber,
				zipcode:this.state.redux_reg_info.zipcode,
				mailingAddress:{mStreetAddress:this.state.redux_reg_info.mailingAddress.streetAddress,mAptNumber:this.state.redux_reg_info.mailingAddress.aptNumber,mZipcode:this.state.redux_reg_info.mailingAddress.zipcode},
				isMailingAddressSame:this.state.redux_reg_info.isMailingAddressSame
			},()=>{
				if(this.state.isMailingAddressSame=="No"){
					this.showDifferentAddress()
				}else if(this.state.isMailingAddressSame=="Yes"){
					this.showOnlySameAddress()
				}
				else{
					return
				}
			})
		}
	}
	
	// Received data from the redux store and saving in a state
	componentWillReceiveProps(props){
		if(props.register_reducer){
			this.setState({
				redux_reg_info:props.register_reducer
			},()=>{
				if(props.register_reducer.streetAddress && this.state.status || props.register_reducer.aptNumber && this.state.status || props.register_reducer.zipcode && this.state.status){
					this.setState({
						streetAddress:props.register_reducer.streetAddress,
						aptNumber:props.register_reducer.aptNumber,
						zipcode:props.register_reducer.zipcode,
						mailingAddress:{streetAddress:props.register_reducer.mailingAddress.streetAddress,aptNumber:props.register_reducer.mailingAddress.aptNumber,zipcode:props.register_reducer.mailingAddress.zipcode},
						isMailingAddressSame:props.register_reducer.isMailingAddressSame
					},()=>{
						if(this.state.isMailingAddressSame=="No"){
							this.showDifferentAddress()
						}else if(this.state.isMailingAddressSame=="Yes"){
							this.showOnlySameAddress()
						}
						else{
							return
						}
					})
				}
			})
		}
	}
	
	// Shows the mailing address is different than business address
	showDifferentAddress(){
			this.setState({isMailingAddressSame:"No"})
			document.getElementById("nocolor").style.backgroundColor = "#568ad6"
			document.getElementById("p_no").style.color = "#fff"
			document.getElementById("p_yes").style.color = "#000"
			document.getElementById("yescolor").style.backgroundColor = "#fff"
			document.getElementById("different_address").style.display = "block"
	}

	// Hide the mailing address
	showOnlySameAddress(){
			this.setState({isMailingAddressSame:"Yes"})
			document.getElementById("yescolor").style.backgroundColor = "#568ad6"
			document.getElementById("p_yes").style.color = "#fff"
			document.getElementById("p_no").style.color = "#000"
			document.getElementById("nocolor").style.backgroundColor = "#fff"
			document.getElementById("different_address").style.display = "none"
	}

	// Changing the input values by onchange event and saving in state
	handleBusinessInputChange(event) {
		this.setState( { status:false,[event.target.name] : event.target.value })  
	}

	// Changing the input values by onchange event and saving in state
	handleMailingAddressChange(event) {
		if(event.target.name=="mStreetAddress"){
			this.setState( { status:false,mailingAddress:{ mStreetAddress: event.target.value,mAptNumber:this.state.mailingAddress.mAptNumber,mZipcode:this.state.mailingAddress.mZipcode}})
		}else if(event.target.name=="mAptNumber"){
			this.setState( { status:false,mailingAddress:{ mStreetAddress: this.state.mailingAddress.mStreetAddress,mAptNumber:event.target.value,mZipcode:this.state.mailingAddress.mZipcode} })
		}else{
			this.setState( { status:false,mailingAddress:{ mStreetAddress: this.state.mailingAddress.mStreetAddress,mAptNumber:this.state.mailingAddress.mAptNumber,mZipcode:event.target.value} })
		}	
	}
	
	// Store business information in the redux
	storeBusinessInformation(){
		this.props.saveUser({
			insurances:this.state.redux_reg_info.insurances,
			streetAddress:this.state.streetAddress,
			aptNumber:this.state.aptNumber,
			zipcode:this.state.zipcode,
			isMailingAddressSame:this.state.isMailingAddressSame,
			mailingAddress:{streetAddress:this.state.mailingAddress.mStreetAddress,aptNumber:this.state.mailingAddress.mAptNumber,zipcode:this.state.mailingAddress.mZipcode},
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
			terrorism: this.state.redux_reg_info.terrorism,
			policyStartDate: this.state.redux_reg_info.policyStartDate,
			specialRequirements:this.state.redux_reg_info.specialRequirements
		});
	}

	componentDidMount() {

		// Store the data in the redux by clicking the next-button
		document.getElementById("next-button").addEventListener("click", this.storeBusinessInformation);
	}
	render() {
		
		return (
			<div className="container">
			<div className="row">
				<div className="col-md-10">
				<h5>Let’s get started</h5>
				<h4 className="page-title fs-25">Tell us about your company</h4>
				</div>
			</div>
			<div className="row mb-20">
				<div className="col-md-12">
				<p className="page-description">Where is your business located? For multiple locations, you can tell us later</p>
				<div className="addInsurance rect-block">
				<Map/>
				</div>
				</div>			
			</div>
			<div className="row row-info">
				<div className="col-md-12">
					<div className="form-group d-flex alignCenter">
						<label htmlFor="streetAddress" className="col-sm-4 control-label labelmap">Street Address</label>
						<div className="col-sm-9">
							<input value={this.state.streetAddress} onChange={this.handleBusinessInputChange}  name="streetAddress" type="text" id="streetAddress"  className="form-control input-text"  />
						</div>
					</div>
					<div className="form-group d-flex alignCenter">
						<label htmlFor="aptNumber" className="col-sm-4 control-label labelmap">Floor/apt/suite number<div>(Optional)</div> </label>
						<div className="col-sm-9">
							<input  value={this.state.aptNumber} onChange={this.handleBusinessInputChange}  name="aptNumber" type="text" id="aptNumber"  className="form-control input-text"  />
						</div>
					</div>
					<div className="form-group d-flex alignCenter">
						<label htmlFor="zipcode" className="col-sm-4 control-label labelmap">Zip code</label>
						<div className="col-sm-9">
							<input value={this.state.zipcode} onChange={this.handleBusinessInputChange}  name="zipcode" type="text" id="zipcode"  className="form-control input-text"  />
						</div>
					</div>
					<div className="form-group d-flex alignCenter">
						<label htmlFor="percentage" className="col-sm-4 control-label labelmap">Is your mailing address the same as your business address?</label>
						<div className="col-sm-9">
						<div className="col-md-2 p-0 mb-12">
							<button id="yescolor"  onClick={this.showOnlySameAddress.bind(this)} type="button" className="btn btn-default btn-lg p-7 isMail">
								<p id="p_yes">Yes</p>
							</button>
						</div>
						<div className="col-md-2 p-0 mb-12 ml-25">
							<button id="nocolor" onClick={this.showDifferentAddress.bind(this)} type="button" className="btn btn-default btn-lg p-7 isMail">
								<p id="p_no">No</p>
							</button>
						</div>
						</div>
					</div>
					<div id="different_address" style={{display:"none"}}>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="mStreetAddress" className="col-sm-4 control-label labelmap">Street Address</label>
							<div className="col-sm-9">
								<input value={this.state.mailingAddress.mStreetAddress} onChange={this.handleMailingAddressChange}  name="mStreetAddress" type="text" id="mStreetAddress"  className="form-control labelInput"  />
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="mAptNumber" className="col-sm-4 control-label labelmap">Floor/apt/suite number<div>(Optional)</div> </label>
							<div className="col-sm-9">
								<input value={this.state.mailingAddress.mAptNumber} onChange={this.handleMailingAddressChange}  name="mAptNumber" type="text" id="mAptNumber"  className="form-control input-text"  />
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="mZipcode" className="col-sm-4 control-label labelmap">Zip code</label>
							<div className="col-sm-9">
								<input value={this.state.mailingAddress.mZipcode} onChange={this.handleMailingAddressChange}   name="mZipcode" type="text" id="mZipcode"  className="form-control input-text"  />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

// Connect the redux store
export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(Business);
