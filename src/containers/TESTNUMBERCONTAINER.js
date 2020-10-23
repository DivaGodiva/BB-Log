import { connect } from "react-redux";
import { testStore } from "../actions/index";
import TESTNUMBER from "../components/TESTNUMBER";

const mapStateToProps = (state) => ({
  testNumbers: state.testNumbers
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(testStore())
})

export default connect(mapStateToProps, mapDispatchToProps)(TESTNUMBER);