import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    // this.props === { songs: state.songs }
    console.log(this.props);
    return <div>SongList</div>;
  }
}

// custom function
// take state and show it as props in component
// state = all data in redux store
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(SongList);
