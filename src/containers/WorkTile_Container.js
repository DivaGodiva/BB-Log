import { connect } from "react-redux";
import WorkTile from "../components/WorkTile";

const mapStateToProps = (state) => ({
  workPhotoArray: state.workPhotoArray,
  workPhotoLinks: state.workPhotoLinks,
  workArray: state.workArray,
  workLinks: state.workLinks
})

export default connect(mapStateToProps, null)(WorkTile);