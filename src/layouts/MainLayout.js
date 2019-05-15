import React, {Component} from 'react'
import {connect} from 'react-redux';
import {
  fetchCarInfoByNumber,
} from './../store/actions/fetchActions';
import Result from "../components/Result";
import Header from "../components/Header";
import InfoBlock from "../components/InfoBlock";

class MainLayout extends Component {
  state = {
    carNumber: '',
    isCorrectNumber: false,
  };

  checkValidNumber = value => /[A-Z]{2}\d{4}[A-Z]{2}/.test(value) &&
    value !== '' &&
    value.length === 8;

  changeInput = e => {
    const formatedValue = e.target.value.toUpperCase();

    this.setState({
      carNumber: formatedValue,
      isCorrectNumber: this.checkValidNumber(formatedValue)
    }, () => {
      if (this.checkValidNumber(this.state.carNumber)) {
        this.getInfoByNumber(this.state.carNumber);
      }
    });
  };

  getInfoByNumber(carNumber) {
    this.props.getCarInfo(carNumber);
  }

  render() {
    const getResult = Object.keys(this.props.carInfoData).length && this.state.isCorrectNumber;
    return <div className="MainLayout">
      <Header
        carNumber={this.state.carNumber}
        changeInput={this.changeInput}
        error={!this.state.isCorrectNumber}
      />

      {
        getResult
          ? <Result {...this.props.carInfoData} number={this.state.carNumber} />
          : <InfoBlock/>
      }
    </div>
  }
}

const mapStateToProps = state => {
  return {
    carInfoData: state.carInfo.result,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getCarInfo: number => dispatch(fetchCarInfoByNumber(number)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
