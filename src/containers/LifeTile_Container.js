import { connect } from "react-redux";
import LifeTile from "../components/LifeTile";

const mapStateToProps = (state) => ({
  lifePhotoArray: state.lifePhotoArray,
  lifePhotoLinks: state.lifePhotoLinks,
  lifeArray: state.lifeArray,
  lifeLinks: state.lifeLinks,
})

export default connect(mapStateToProps, null)(LifeTile);