import { connect } from "react-redux";
import { toggleHeader, resetHeader } from "../actions/index";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  headerToggles: state.headerToggles
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: number => dispatch(toggleHeader(number)),
  handleMouseClick: () => dispatch(resetHeader())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);