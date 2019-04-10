import React from 'react'
import {connect} from 'react-redux';
import {saveUser} from '../../redux/redux_insurance';


class PersonalAndBuildingInformation extends React.Component{
	constructor(props){
		super(props);
		this.state={
			redux_reg_info:props.register_reducer, // Getting the data from redux store
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			typeOfBuilding:"",
			buildingConstructionType:"",
			automaticSprinklers:"",
			fireAlaram:"",
			centralBurglarAlaramSystem:"",
			totalStories:"",
			constructionYear:"",
			bppReplacementCost:"",
			status:true				
		}
		this.handlePersonalDetailsInputChange=this.handlePersonalDetailsInputChange.bind(this)
	 	this.storePersonalAndBuildingInformation=this.storePersonalAndBuildingInformation.bind(this)
	}	

	// Received data from the redux store and saving in a state
	componentWillReceiveProps(props) {
		if (props.register_reducer) {
		 this.setState({
		  redux_reg_info: props.register_reducer
		 }, () => {
		  if (props.register_reducer.firstName && this.state.status || props.register_reducer.lastName && this.state.status || props.register_reducer.email && this.state.status || props.register_reducer.phoneNumber && this.state.status ||
		   props.register_reducer.typeOfBuilding && this.state.status || props.register_reducer.buildingConstructionType && this.state.status || props.register_reducer.automaticSprinklers && this.state.status || props.register_reducer.fireAlaram && this.state.status || props.register_reducer.centralBurglarAlaramSystem && this.state.status ||
		   props.register_reducer.totalStories && this.state.status || props.register_reducer.constructionYear && this.state.status || props.register_reducer.bppReplacementCost && this.state.status) {
		   this.setState({
			firstName: props.register_reducer.firstName,
			lastName: props.register_reducer.lastName,
			email: props.register_reducer.email,
			phoneNumber: props.register_reducer.phoneNumber,
			typeOfBuilding: props.register_reducer.typeOfBuilding,
			buildingConstructionType: props.register_reducer.buildingConstructionType,
			automaticSprinklers: props.register_reducer.automaticSprinklers,
			fireAlaram: props.register_reducer.fireAlaram,
			centralBurglarAlaramSystem: props.register_reducer.centralBurglarAlaramSystem,
			totalStories: props.register_reducer.totalStories,
			constructionYear: props.register_reducer.constructionYear,
			bppReplacementCost: props.register_reducer.bppReplacementCost
		   }, () => {
			if (this.state.typeOfBuilding == "Rent") {
			 this.handleTypeOfBuilding("Rent")
			} else if (this.state.typeOfBuilding == "Lease") {
			 this.handleTypeOfBuilding("Lease")
			} else if (this.state.typeOfBuilding == "Home Office") {
			 this.handleTypeOfBuilding("Home")
			} else {
	   
			}
			if (this.state.buildingConstructionType == "Frame") {
			 this.handleBuildingConstructionType("Frame")
			} else if (this.state.buildingConstructionType == "Joisted Masnory") {
			 this.handleBuildingConstructionType("Joisted")
			} else if (this.state.buildingConstructionType == "Non Combustible") {
			 this.handleBuildingConstructionType("Combustible")
			} else if (this.state.buildingConstructionType == "Fire Resistive") {
			 this.handleBuildingConstructionType("Resistive")
			} else {
			 return
			}
			if (this.state.automaticSprinklers == "Yes") {
			 this.handleAutomaticSprinklers("Yes")
			} else if (this.state.automaticSprinklers == "No") {
			 this.handleAutomaticSprinklers("No")
			} else if (this.state.automaticSprinklers == "Not Sure") {
			 this.handleAutomaticSprinklers("Not Sure")
			} else {
	   
			}
			if (this.state.fireAlaram == "Yes") {
			 this.handleFireAlaram("Yes")
			} else if (this.state.fireAlaram == "No") {
			 this.handleFireAlaram("No")
			} else if (this.state.fireAlaram == "Not Sure") {
			 this.handleFireAlaram("Not Sure")
			} else {
	   
			}
			if (this.state.centralBurglarAlaramSystem == "Yes") {
			 this.handleCentralBurglarAlaramSystem("Yes")
			} else if (this.state.centralBurglarAlaramSystem == "No") {
			 this.handleCentralBurglarAlaramSystem("No")
			} else if (this.state.centralBurglarAlaramSystem == "Not Sure") {
			 this.handleCentralBurglarAlaramSystem("Not Sure")
			} else {
	   
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
				firstName: this.state.redux_reg_info.firstName,
				lastName: this.state.redux_reg_info.lastName,
				email: this.state.redux_reg_info.email,
				phoneNumber: this.state.redux_reg_info.phoneNumber,
				typeOfBuilding: this.state.redux_reg_info.typeOfBuilding,
				buildingConstructionType: this.state.redux_reg_info.buildingConstructionType,
				automaticSprinklers: this.state.redux_reg_info.automaticSprinklers,
				fireAlaram: this.state.redux_reg_info.fireAlaram,
				centralBurglarAlaramSystem:this.state.redux_reg_info.centralBurglarAlaramSystem,
				totalStories:this.state.redux_reg_info.totalStories,
				constructionYear:this.state.redux_reg_info.constructionYear,
				bppReplacementCost:this.state.redux_reg_info.bppReplacementCost
			   }, () => {
				if (this.state.typeOfBuilding == "Rent") {
				 this.handleTypeOfBuilding("Rent")
				} else if (this.state.typeOfBuilding == "Lease") {
				 this.handleTypeOfBuilding("Lease")
				} else if (this.state.typeOfBuilding == "Home Office") {
				 this.handleTypeOfBuilding("Home")
				} else {
		   
				}
				if (this.state.buildingConstructionType == "Frame") {
				 this.handleBuildingConstructionType("Frame")
				} else if (this.state.buildingConstructionType == "Joisted Masnory") {
				 this.handleBuildingConstructionType("Joisted")
				} else if (this.state.buildingConstructionType == "Non Combustible") {
				 this.handleBuildingConstructionType("Combustible")
				} else if (this.state.buildingConstructionType == "Fire Resistive") {
				 this.handleBuildingConstructionType("Resistive")
				} else {
				 
				}
				if (this.state.automaticSprinklers == "Yes") {
				 this.handleAutomaticSprinklers("Yes")
				} else if (this.state.automaticSprinklers == "No") {
				 this.handleAutomaticSprinklers("No")
				} else if (this.state.automaticSprinklers == "Not Sure") {
				 this.handleAutomaticSprinklers("Not Sure")
				} else {
		   
				}
				if (this.state.fireAlaram == "Yes") {
				 this.handleFireAlaram("Yes")
				} else if (this.state.fireAlaram == "No") {
				 this.handleFireAlaram("No")
				} else if (this.state.fireAlaram == "Not Sure") {
				 this.handleFireAlaram("Not Sure")
				} else {
		   
				}
				if (this.state.centralBurglarAlaramSystem == "Yes") {
				 this.handleCentralBurglarAlaramSystem("Yes")
				} else if (this.state.centralBurglarAlaramSystem == "No") {
				 this.handleCentralBurglarAlaramSystem("No")
				} else if (this.state.centralBurglarAlaramSystem == "Not Sure") {
				 this.handleCentralBurglarAlaramSystem("Not Sure")
				} else {
		   
				}
			   })
		}
	}

	// Changing the input values by onchange event and saving in state
	handlePersonalDetailsInputChange(event) {
		this.setState( { status:false,[event.target.name] : event.target.value })  
	}

	// Select for type of buiding
	handleTypeOfBuilding(type){
		if(type=="Rent"){
			this.setState({
				typeOfBuilding: "Rent",
				status:false
				
			})
			document.getElementById("Rent").style.backgroundColor = "#568ad6"
			document.getElementById("Lease").style.backgroundColor = "#fff"
			document.getElementById("Home").style.backgroundColor = "#fff"
			document.getElementById("p_rent").style.color = "#fff"
			document.getElementById("p_lease").style.color = "#000"
			document.getElementById("p_home").style.color = "#000"
		}
		else if(type=="Lease")	{
			this.setState({
				typeOfBuilding: "Lease",
				status:false
				
			})
			document.getElementById("Lease").style.backgroundColor = "#568ad6"
			document.getElementById("Rent").style.backgroundColor = "#fff"
			document.getElementById("Home").style.backgroundColor = "#fff"
			document.getElementById("p_rent").style.color = "#000"
			document.getElementById("p_lease").style.color = "#fff"
			document.getElementById("p_home").style.color = "#000"
		}else{
			this.setState({
				typeOfBuilding: "Home Office",
				status:false
				
			})
			document.getElementById("Home").style.backgroundColor = "#568ad6"
			document.getElementById("p_rent").style.color = "#000"
			document.getElementById("p_home").style.color = "#fff"
			document.getElementById("p_lease").style.color = "#000"
			document.getElementById("Rent").style.backgroundColor = "#fff"
			document.getElementById("Lease").style.backgroundColor = "#fff"
		}
	}

	// Select for type of buiding construction type
	handleBuildingConstructionType(type){
		if(type=="Frame"){
			this.setState({
				buildingConstructionType:"Frame",
				status:false
			})
			document.getElementById("Frame").style.backgroundColor = "#568ad6"
			document.getElementById("Joisted").style.backgroundColor = "#fff"
			document.getElementById("Combustible").style.backgroundColor = "#fff"
			document.getElementById("Resistive").style.backgroundColor = "#fff"
			document.getElementById("p_frame").style.color = "#fff"
			document.getElementById("p_joisted").style.color = "#000"
			document.getElementById("p_combustible").style.color = "#000"
			document.getElementById("p_resistive").style.color = "#000"
			
		}
		else if(type=="Joisted")	{
			this.setState({
				buildingConstructionType:"Joisted Masnory",
				status:false
			})
			document.getElementById("Frame").style.backgroundColor = "#fff"
			document.getElementById("Joisted").style.backgroundColor = "#568ad6"
			document.getElementById("Combustible").style.backgroundColor = "#fff"
			document.getElementById("Resistive").style.backgroundColor = "#fff"
			document.getElementById("p_frame").style.color = "#000"
			document.getElementById("p_joisted").style.color = "#fff"
			document.getElementById("p_combustible").style.color = "#000"
			document.getElementById("p_resistive").style.color = "#000"
		}else if(type=="Combustible"){
			this.setState({
				buildingConstructionType:"Non Combustible",
				status:false
			})
			document.getElementById("Frame").style.backgroundColor = "#fff"
			document.getElementById("Joisted").style.backgroundColor =  "#fff"
			document.getElementById("Combustible").style.backgroundColor = "#568ad6"
			document.getElementById("Resistive").style.backgroundColor = "#fff"
			document.getElementById("p_frame").style.color = "#000"
			document.getElementById("p_joisted").style.color =  "#000"
			document.getElementById("p_combustible").style.color = "#fff"
			document.getElementById("p_resistive").style.color = "#000"
		}else{
			this.setState({
				buildingConstructionType:"Fire Resistive",
				status:false
			})
			document.getElementById("Frame").style.backgroundColor = "#fff"
			document.getElementById("Joisted").style.backgroundColor = "#fff"
			document.getElementById("Combustible").style.backgroundColor = "#fff"
			document.getElementById("Resistive").style.backgroundColor = "#568ad6"
			document.getElementById("p_frame").style.color = "#000"
			document.getElementById("p_joisted").style.color = "#000"
			document.getElementById("p_combustible").style.color = "#000"
			document.getElementById("p_resistive").style.color = "#fff"
		}
	}

	// Select for automatic sprinkler
	handleAutomaticSprinklers(type){
		if(type=="Yes"){
			this.setState({
				automaticSprinklers:"Yes",
				status:false
			})
			document.getElementById("yesSprinkle").style.backgroundColor = "#568ad6"
			document.getElementById("noSprinkle").style.backgroundColor =  "#fff"
			document.getElementById("notSureSprinkle").style.backgroundColor = "#fff"
			document.getElementById("p_yes_sprinkle").style.color =  "#fff"
			document.getElementById("p_no_sprinkle").style.color =  "#000"
			document.getElementById("p_notsure_sprinkle").style.color = "#000"
		}
		else if(type=="No")	{
			this.setState({
				automaticSprinklers:"No",
				status:false
			})
			document.getElementById("yesSprinkle").style.backgroundColor = "#fff"
			document.getElementById("noSprinkle").style.backgroundColor =  "#568ad6"
			document.getElementById("notSureSprinkle").style.backgroundColor = "#fff"
			document.getElementById("p_yes_sprinkle").style.color =  "#000"
			document.getElementById("p_no_sprinkle").style.color =  "#fff"
			document.getElementById("p_notsure_sprinkle").style.color = "#000"
		}else{
			this.setState({
				automaticSprinklers:"Not Sure",
				status:false
				
			})
			document.getElementById("yesSprinkle").style.backgroundColor = "#fff"
			document.getElementById("noSprinkle").style.backgroundColor = "#fff"
			document.getElementById("notSureSprinkle").style.backgroundColor = "#568ad6"
			document.getElementById("p_yes_sprinkle").style.color = "#000"
			document.getElementById("p_no_sprinkle").style.color =  "#000"
			document.getElementById("p_notsure_sprinkle").style.color = "#fff"
		}
	}

	// Select for central burglar alarm system
	handleCentralBurglarAlaramSystem(type){
		if(type=="Yes"){
			this.setState({
				centralBurglarAlaramSystem:"Yes",
				status:false
			})
			document.getElementById("yesCentralAlaram").style.backgroundColor ="#568ad6"
			document.getElementById("noCentralAlaram").style.backgroundColor = "#fff"
			document.getElementById("notSureCentralAlaram").style.backgroundColor = "#fff"
			document.getElementById("p_yes_centralalaram").style.color = "#fff"
			document.getElementById("p_no_centralalaram").style.color =  "#000"
			document.getElementById("p_notsure_centralalaram").style.color = "#000"
		}
		else if(type=="No")	{
			this.setState({
				centralBurglarAlaramSystem:"No",
				status:false
			})
			document.getElementById("yesCentralAlaram").style.backgroundColor ="#fff"
			document.getElementById("noCentralAlaram").style.backgroundColor = "#568ad6"
			document.getElementById("notSureCentralAlaram").style.backgroundColor = "#fff"
			document.getElementById("p_yes_centralalaram").style.color = "#000"
			document.getElementById("p_no_centralalaram").style.color =  "#fff"
			document.getElementById("p_notsure_centralalaram").style.color = "#000"
		}else{
			this.setState({centralBurglarAlaramSystem:"Not Sure",status:false
			})
			document.getElementById("yesCentralAlaram").style.backgroundColor ="#fff"
			document.getElementById("noCentralAlaram").style.backgroundColor = "#fff"
			document.getElementById("notSureCentralAlaram").style.backgroundColor = "#568ad6"
			document.getElementById("p_yes_centralalaram").style.color = "#000"
			document.getElementById("p_no_centralalaram").style.color =  "#000"
			document.getElementById("p_notsure_centralalaram").style.color = "#fff"
		}
	}

	// Select for fire alaram
	handleFireAlaram(type){
		if(type=="Yes"){
			this.setState({
				fireAlaram:"Yes",
				status:false
			})
			document.getElementById("yesAlaram").style.backgroundColor ="#568ad6"
			document.getElementById("noAlaram").style.backgroundColor = "#fff"
			document.getElementById("notSureAlaram").style.backgroundColor = "#fff"
			document.getElementById("p_yes_alaram").style.color = "#fff"
			document.getElementById("p_no_alaram").style.color =  "#000"
			document.getElementById("p_notsure_alaram").style.color = "#000"
		}
		else if(type=="No")	{
			this.setState({
				fireAlaram:"No",
				status:false
			})
			document.getElementById("yesAlaram").style.backgroundColor ="#fff"
			document.getElementById("noAlaram").style.backgroundColor = "#568ad6"
			document.getElementById("notSureAlaram").style.backgroundColor = "#fff"
			document.getElementById("p_yes_alaram").style.color = "#000"
			document.getElementById("p_no_alaram").style.color =  "#fff"
			document.getElementById("p_notsure_alaram").style.color = "#000"
		}else{
			this.setState({
				fireAlaram:"Not Sure",
				status:false
				
			})
			document.getElementById("yesAlaram").style.backgroundColor ="#fff"
			document.getElementById("noAlaram").style.backgroundColor = "#fff"
			document.getElementById("notSureAlaram").style.backgroundColor = "#568ad6"
			document.getElementById("p_yes_alaram").style.color = "#000"
			document.getElementById("p_no_alaram").style.color =  "#000"
			document.getElementById("p_notsure_alaram").style.color = "#fff"
		}
	}
	
	// Store personal and buildin details in the redux
	storePersonalAndBuildingInformation(){
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
			firstName:this.state.firstName,
			lastName:this.state.lastName,
			email:this.state.email,
			phoneNumber:this.state.phoneNumber,
			typeOfBuilding:this.state.typeOfBuilding,
			buildingConstructionType:this.state.buildingConstructionType,
			automaticSprinklers:this.state.automaticSprinklers,
			fireAlaram:this.state.fireAlaram,
			centralBurglarAlaramSystem:this.state.centralBurglarAlaramSystem,
			totalStories:this.state.totalStories,
			constructionYear:this.state.constructionYear,
			bppReplacementCost:this.state.bppReplacementCost,
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
		document.getElementById("next-button").addEventListener("click", this.storePersonalAndBuildingInformation);
	}
	
    render(){
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10 p-0">
					<h4 className="page-title fs-25">Primary Contact Info</h4>
				</div>
			</div>
			<div className="row mb-20">
				<div className="col-md-12 p-0">
					<p className="fs-14" className="page-description label-heading">With this information provided, a CoverWallet account will be created for you.</p>

					<div className="form-group d-flex alignCenter">
						<label htmlFor="firstName" className="col-sm-3 control-label labelmap">First Name</label>
						<div className="col-sm-9">
							<input value={this.state.firstName} onChange={this.handlePersonalDetailsInputChange} name="firstName" type="text" id="firstName" className="form-control pinfo-text" />
						</div>
					</div>
					<div className="form-group d-flex alignCenter">
						<label htmlFor="lastName" className="col-sm-3 control-label labelmap">Last Name</label>
						<div className="col-sm-9">
							<input onChange={this.handlePersonalDetailsInputChange} name="lastName" type="text" value={this.state.lastName} id="lastName"  className="form-control pinfo-text"  />
						</div>
					</div>
					<div className="form-group d-flex alignCenter">
						<label htmlFor="email" className="col-sm-3 control-label labelmap">Email</label>
						<div className="col-sm-9">
							<input value={this.state.email} onChange={this.handlePersonalDetailsInputChange} name="email" type="text" id="email"  className="form-control pinfo-text"  />
						</div>
					</div>
					<div className="form-group d-flex alignCenter">
						<label htmlFor="phoneNumber" className="col-sm-3 control-label labelmap">Phone Number</label>
						<div className="col-sm-9">
							<input value={this.state.phoneNumber} onChange={this.handlePersonalDetailsInputChange} type="text" name="phoneNumber" id="phoneNumber"  className="form-control pinfo-text"  />
						</div>
					</div>
				</div>
				<div className="row mb-20">
					<div className="col-md-12">
						<h4 className="page-title fs-25">Building Details</h4>
						<p className="fs-14" className="page-description label-heading">for 2 U.S. 19, fdsfdsf, Crystal River, FL, 34428</p>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="Rent" className="col-sm-3 control-label labelmap">Type of Building</label>
							<div className="col-sm-9">
								<div className="col-md-2 p-0 mb-12">
									<button id="Rent" onClick={this.handleTypeOfBuilding.bind(this, "Rent")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_rent">Rent</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="Lease" onClick={this.handleTypeOfBuilding.bind(this, "Lease")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_lease">Lease</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="Home" onClick={this.handleTypeOfBuilding.bind(this, "Home")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_home">Home Office</p>
									</button>
								</div>
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="percentage" className="col-sm-3 control-label labelmap">How is the building constructed?</label>
							<div className="col-sm-9">
								<div className="col-md-2 p-0 mb-12">
									<button id="Frame" onClick={this.handleBuildingConstructionType.bind(this, "Frame")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_frame">Frame</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="Joisted" onClick={this.handleBuildingConstructionType.bind(this, "Joisted")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_joisted">Joisted Masonary</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="Combustible" onClick={this.handleBuildingConstructionType.bind(this, "Combustible")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_combustible">Non Combustible</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="Resistive" onClick={this.handleBuildingConstructionType.bind(this, "Resistive")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_resistive">Fire Resistive</p>
									</button>
								</div>
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="percentage" className="col-sm-3 control-label labelmap">Are there automatic sprinklers?</label>
							<div className="col-sm-9">
								<div className="col-md-2 p-0 mb-12">
									<button id="yesSprinkle" onClick={this.handleAutomaticSprinklers.bind(this, "Yes")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_yes_sprinkle">Yes</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="noSprinkle" onClick={this.handleAutomaticSprinklers.bind(this, "No")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_no_sprinkle">No</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="notSureSprinkle" onClick={this.handleAutomaticSprinklers.bind(this, "Not Sure")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_notsure_sprinkle">Not Sure</p>
									</button>
								</div>
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="percentage" className="col-sm-3 control-label labelmap">Is there a fire alarm system?</label>
							<div className="col-sm-9">
								<div className="col-md-2 p-0 mb-12">
									<button id="yesAlaram" onClick={this.handleFireAlaram.bind(this, "Yes")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_yes_alaram">Yes</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="noAlaram" onClick={this.handleFireAlaram.bind(this, "No")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_no_alaram">No</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="notSureAlaram" onClick={this.handleFireAlaram.bind(this, "Not Sure")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_notsure_alaram">Not Sure</p>
									</button>
								</div>
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="percentage" className="col-sm-3 control-label labelmap">Do you have a central burglar alarm system?</label>
							<div className="col-sm-9">
								<div className="col-md-2 p-0 mb-12">
									<button id="yesCentralAlaram" onClick={this.handleCentralBurglarAlaramSystem.bind(this, "Yes")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_yes_centralalaram">Yes</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="noCentralAlaram" onClick={this.handleCentralBurglarAlaramSystem.bind(this, "No")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_no_centralalaram">No</p>
									</button>
								</div>
								<div className="col-md-2 p-0 mb-12 ml-25">
									<button id="notSureCentralAlaram" onClick={this.handleCentralBurglarAlaramSystem.bind(this, "Not Sure")} type="button" className="btn btn-default btn-lg p-7 isMail">
										<p className="fs-14" id="p_notsure_centralalaram">Not Sure</p>
									</button>
								</div>
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="firstName" className="col-sm-3 control-label labelmap">How many stories does the building have?</label>
							<div className="col-sm-9">
								<input value={this.state.totalStories} onChange={this.handlePersonalDetailsInputChange} name="totalStories" type="text" id="totalStories"  className="form-control pinfo-text" />
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="lastName" className="col-sm-3 control-label labelmap">When was the building constructed (year)?</label>
							<div className="col-sm-9">
								<input onChange={this.handlePersonalDetailsInputChange} name="constructionYear" type="text" value={this.state.constructionYear} id="constructionYear"  className="form-control pinfo-text"  />
							</div>
						</div>
						<div className="form-group d-flex alignCenter">
							<label htmlFor="phoneNumber" className="col-sm-3 control-label labelmap">What is the replacement cost of your business personal property?</label>
							<div className="col-sm-9">
								<input value={this.state.bppReplacementCost} onChange={this.handlePersonalDetailsInputChange} type="text" name="bppReplacementCost" id="bppReplacementCost"  className="form-control pinfo-text"  />
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
export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(PersonalAndBuildingInformation);
