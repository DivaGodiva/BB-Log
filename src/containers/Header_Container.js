import { connect } from "react-redux";
import { toggleHeader } from "../actions/index";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  headerToggles: state.headerToggles
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: number => dispatch(toggleHeader(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);