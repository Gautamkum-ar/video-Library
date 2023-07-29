export const reducerFunction = (state, { payload, type }) => {
  switch (type) {
    case "ADD_TO_WATCH_LATER": {
      return {
        ...state,
        watchLaterData: [...state.watchLaterData, payload],
      };
    }

    case "REMOVE_FROM_WATCHLATER": {
      return {
        ...state,
        watchLaterData: state?.watchLaterData.filter(
          (video) => video._id !== payload
        ),
      };
    }
    case "RELOAD": {
      return {
        ...state,
        watchLaterData: payload,
      };
    }

    case "ADD_NEW_PLAYLIST": {
      return {
        ...state,
        playlistData: [...state.playlistData, { ...payload, data: [] }],
      };
    }

    case "ADD_TO_PLAYLIST": {
      return {
        ...state,
        playlistData: state.playlistData.map((elms) =>
          elms.name === payload.play.name
            ? { ...elms, data: [...elms.data, payload.findVideo] }
            : elms
        ),
      };
    }

    case "SINGLE_PLAY_LIST": {
      return {
        ...state,
        singlePlaylist: state.playlistData.find(
          (elms) => elms.name === payload.name
        ),
      };
    }
    default: {
      return state;
    }
  }
};
