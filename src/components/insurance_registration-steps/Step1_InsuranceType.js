import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { saveUser } from "../../redux/redux_insurance";

class InsuranceType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redux_reg_info: props.register_reducer, // Getting the data from redux store
      count: 0,
      status: true,
      insurances: [
        { insuranceId: "1", insuranceName: "Insurance 1" },
        { insuranceId: "2", insuranceName: "Insurance 2" },
        { insuranceId: "3", insuranceName: "Insurance 3" },
        { insuranceId: "4", insuranceName: "Insurance 4" },
        { insuranceId: "5", insuranceName: "Insurance 5" },
        { insuranceId: "6", insuranceName: "Insurance 6" },
        { insuranceId: "7", insuranceName: "Insurance 7" },
        { insuranceId: "8", insuranceName: "Insurance 8" },
        { insuranceId: "9", insuranceName: "Insurance 9" },
        { insuranceId: "10", insuranceName: "Insurance 10" },
        { insuranceId: "11", insuranceName: "Insurance 11" },
        { insuranceId: "12", insuranceName: "Insurance 12" }
      ],
      insurancesList: []
    };
    this.storeInsuranceTypeInformation = this.storeInsuranceTypeInformation.bind(
      this
    );
    this.isValidated = this.isValidated.bind(this);
  }

  componentWillMount() {
    // When user clicks on the back button of the insurance registration process then it will checks and saving in a state
    if (this.state.redux_reg_info) {
      this.setState({
        insurancesList: this.state.redux_reg_info.insurances
      });
    }
  }

  // Checking the validation for insurance registration
  isValidated() {
    // alert("Hello")
    return this.state.count > 2;
  }

  // Received data from the redux store and saving in a state and saving in a state
  componentWillReceiveProps(props) {
    if (props.register_reducer) {
      this.setState(
        {
          redux_reg_info: props.register_reducer
        },
        () => {
          if (props.register_reducer.insurances && this.state.status) {
            this.setState({
              insurancesList: props.register_reducer.insurances
            });
          }
        }
      );
    }
  }

  componentDidMount() {
    let selectedList = this.state.insurancesList;
    for (var i = 0; i < selectedList.length; i++) {
      var insurance = selectedList[i];
      document.getElementById(insurance).style.background = "#568ad6";
      document.getElementById(insurance).style.color = "#fff";
    }

    // Store the data in the redux by clicking the next-button
    document
      .getElementById("next-button")
      .addEventListener("click", this.storeInsuranceTypeInformation);
  }

  // Adding list of insurances
  addAndRemoveInsurance(insurance) {
    console.log(insurance + " insurancesList");
    var index = this.state.insurancesList.indexOf(insurance);
    if (index > -1) {
      this.state.insurancesList.splice(index, 1);
      document.getElementById(insurance).style.background = "#fff";
      document.getElementById(insurance).style.color = "#000";
    } else {
      document.getElementById(insurance).style.background = "#568ad6";
      document.getElementById(insurance).style.color = "#fff";
      this.state.insurancesList.push(insurance);
    }
    this.setState({
      insurancesList: this.state.insurancesList
    });
  }

  // Store insurance type information in the redux
  storeInsuranceTypeInformation() {
    this.props.saveUser({
      insurances: this.state.insurancesList,
      streetAddress: this.state.redux_reg_info.streetAddress,
      aptNumber: this.state.redux_reg_info.aptNumber,
      zipcode: this.state.redux_reg_info.zipcode,
      isMailingAddressSame: this.state.redux_reg_info.isMailingAddressSame,
      mailingAddress: this.state.redux_reg_info.mailingAddress,
      businessEnity: this.state.redux_reg_info.businessEnity,
      cFloorNumber: this.state.redux_reg_info.cFloorNumber,
      businessStartYear: this.state.redux_reg_info.businessStartYear,
      companyYearsOfExperience: this.state.redux_reg_info
        .companyYearsOfExperience,
      projectedAnnualRevenue: this.state.redux_reg_info.projectedAnnualRevenue,
      website: this.state.redux_reg_info.website,
      businessEnity: this.state.redux_reg_info.businessEnity,
      firstName: this.state.redux_reg_info.firstName,
      lastName: this.state.redux_reg_info.lastName,
      phoneNumber: this.state.redux_reg_info.phoneNumber,
      email: this.state.redux_reg_info.email,
      typeOfBuilding: this.state.redux_reg_info.typeOfBuilding,
      buildingConstructionType: this.state.redux_reg_info
        .buildingConstructionType,
      automaticSprinklers: this.state.redux_reg_info.automaticSprinklers,
      fireAlaram: this.state.redux_reg_info.fireAlaram,
      centralBurglarAlaramSystem: this.state.redux_reg_info
        .centralBurglarAlaramSystem,
      totalStories: this.state.redux_reg_info.totalStories,
      constructionYear: this.state.redux_reg_info.constructionYear,
      bppReplacementCost: this.state.redux_reg_info.bppReplacementCost,
      addClaims: this.state.redux_reg_info.addClaims,
      claimDate: this.state.redux_reg_info.claimDate,
      claimAmount: this.state.redux_reg_info.claimAmount,
      terrorism: this.state.redux_reg_info.terrorism,
      policyStartDate: this.state.redux_reg_info.policyStartDate,
      specialRequirements: this.state.redux_reg_info.specialRequirements
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h5>Let’s get started</h5>
            <h4 className="page-title fs-25">
              What type(s) of insurance do you need a quote for?
            </h4>
          </div>
        </div>
        <div className="row mb-20">
          <div className="col-md-12">
            <p className="page-description">
              No limit here. You can pick as many as you want:
            </p>
            <div className="addInsurance rectangle">
              {this.state.insurancesList &&
                this.state.insurancesList.map((policy, key1) => {
                  return (
                    <Fragment>
                      <button
                        type="button"
                        className="btn btn-primary pos-relative ins-padding mb-12"
                      >
                        {policy}
                      </button>
                      <i
                        className="fa fa-window-close ml-5 pos-absolute"
                        onClick={this.addAndRemoveInsurance.bind(this, policy)}
                        aria-hidden="true"
                      />
                    </Fragment>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.state.insurances &&
              this.state.insurances.map((insurance, key) => {
                return (
                  <div className="col-md-2 p-0 mb-12 s-insurance">
                    <button
                      type="button"
                      id={insurance.insuranceName}
                      onClick={this.addAndRemoveInsurance.bind(
                        this,
                        insurance.insuranceName
                      )}
                      className="btn btn-default btn-lg p-7 s-insurance1"
                    >
                      <p>{insurance.insuranceName}</p>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

// Connect the redux store
export default connect(
  state => ({ register_reducer: state.register_reducer.register_user }),
  { saveUser }
)(InsuranceType);

// export default InsuranceType;
// export default connect((state) => ({
// 	register_reducer: state.register_reducer.register_user
//   }), { saveUser }, null, { withRef: true })(InsuranceType)
