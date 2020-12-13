import { connect } from "react-redux";
import Staticphoto from "../components/Staticphoto";

const mapStateToProps = (state) => ({
  staticPhotoArray: state.staticPhotoArray
})

export default connect(mapStateToProps, null)(Staticphoto);