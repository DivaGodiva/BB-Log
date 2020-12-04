import { connect } from "react-redux";
import WorkTile from "../components/WorkTile";

const mapStateToProps = (state) => ({
  workPhotoArray: state.workPhotoArray,
  workPhotoLinks: state.workPhotoLinks,
  workPhotoTitles: state.workPhotoTitles,
  workArray: state.workArray,
  workLinks: state.workLinks,
  workTitles: state.workTitles
})

export default connect(mapStateToProps, null)(WorkTile);