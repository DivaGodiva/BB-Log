import { connect } from "react-redux";
import Colorblock from "../components/Colorblock";

const mapStateToProps = (state) => ({
  headerIndex: state.headerIndex,
  headerToggles: state.headerToggles,
  landingMessage: state.landingMessage,
  messageuno: state.messageuno,
  messagedos: state.messagedos
})

export default connect(mapStateToProps, null)(Colorblock);