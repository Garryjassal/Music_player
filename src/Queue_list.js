import React from "react";
import ListCard from "./QueueList_Card";
import "bootstrap/dist/css/bootstrap.css";
import data from "./data.json";
import { connect } from "react-redux";
import { store } from ".";

function Queue_list(props) {
  const { showFavourites } = props;
  return (
    <>
      <section
        className="queue_list"
        style={{ height: "70.6vh", overflow: "scroll" }}
      >
        <ol className=" list-group list-group-numbered">
          {showFavourites === true
            ? store.getState().favourites.map((SongDetails, index) => {
                return (
                  SongDetails.isFavouritesActive === true && (
                    <>
                      <ListCard
                        SongDetails={SongDetails}
                        dispatch={store.dispatch}
                        key={index}
                      />
                    </>
                  )
                );
              })
            : data.map((SongDetails, index) => {
                return (
                  <ListCard
                    dispatch={props.dispatch}
                    SongDetails={SongDetails}
                    key={`Song=${index}`}
                  />
                );
              })}
        </ol>
      </section>
    </>
  );
}
function mapStateToProps(state) {
  return {};
}

const ConnectedQueueComponent = connect(mapStateToProps)(Queue_list);

export default ConnectedQueueComponent;
