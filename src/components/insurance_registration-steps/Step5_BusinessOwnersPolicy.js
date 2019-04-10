import React from 'react'
import {connect} from 'react-redux';
import {saveUser} from '../../redux/redux_insurance';
import Map from './Map'

class BusinessOwnersPolicy extends React.Component{
	constructor(props){
		super(props);
		this.state={
			redux_reg_info:props.register_reducer, // Getting the data from redux store
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
	}	

	// Received data from the redux store and saving in a state
	componentWillReceiveProps(props){
		if(props.register_reducer){
			console.log("BusinessOwnersPolicy555....."+JSON.stringify(props.register_reducer))
			this.setState({
				redux_reg_info:props.register_reducer
			},()=>{
				if(props.register_reducer){
					this.setState({
						typeOfBuilding:props.register_reducer.typeOfBuilding,
						buildingConstructionType:props.register_reducer.buildingConstructionType,
						automaticSprinklers:props.register_reducer.automaticSprinklers,
						fireAlaram:props.register_reducer.fireAlaram,
						centralBurglarAlaramSystem:props.register_reducer.centralBurglarAlaramSystem,
						totalStories:props.register_reducer.totalStories,
						constructionYear:props.register_reducer.constructionYear,
						bppReplacementCost:props.register_reducer.bppReplacementCost
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
				typeOfBuilding:this.state.redux_reg_info.typeOfBuilding,
				buildingConstructionType:this.state.redux_reg_info.buildingConstructionType,
				automaticSprinklers:this.state.redux_reg_info.automaticSprinklers,
				fireAlaram:this.state.redux_reg_info.fireAlaram,
				centralBurglarAlaramSystem:this.state.redux_reg_info.centralBurglarAlaramSystem,
				totalStories:this.state.redux_reg_info.totalStories,
				constructionYear:this.state.redux_reg_info.constructionYear,
				bppReplacementCost:this.state.redux_reg_info.bppReplacementCost
			})
		}
	}

    render(){
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10">
					<h5>Business Owner's Policy</h5>
					<h4 className="page-title fs-25">Building(s)</h4>
				</div>
			</div>
			<div className="row mb-20">
				<div className="col-md-12">
					<p className="page-description">Please review the building information for each location. When done, click Continue</p>
					<div className="addInsurance rect-block" >
						<h4>Location:</h4>
						<p className="page-description">Address: Anyway Drive Bryan, 256987, Bryan, TX, 77807</p>
						<Map />
					</div>
					<div className="Info">
						<table className="table table-borderless custom-table">
							<tbody>
								<tr>
									<td>Building Type: {this.state.typeOfBuilding}</td>
									<td>Construction:  {this.state.buildingConstructionType}</td>
								</tr>
								<tr>
									<td>Automatic Sprinklers:  {this.state.automaticSprinklers}</td>
									<td>Fire Alarm System:  {this.state.fireAlaram}</td>
								</tr>
								<tr>
									<td>No. of Stories: {this.state.totalStories}</td>
									<td>Burglar Fire Alarm System: {this.state.centralBurglarAlaramSystem}</td>
								</tr>
								<tr>
									<td>Year Constructed: {this.state.constructionYear}</td>
									<td>BPP Replacement Cost: {this.state.bppReplacementCost}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
}

// Connect the redux store
export default  connect((state) => ({register_reducer: state.register_reducer.register_user}),{saveUser})(BusinessOwnersPolicy);

