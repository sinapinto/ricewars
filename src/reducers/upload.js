import {
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
  CLEAR_UPLOADS,
} from '../actions/upload';

const initialState = {
  files: {},       // by uid slug
  percentages: {}, // by uid slug
  errors: {},      // by uid slug
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PROGRESS:
      return {
        ...state,
        percentages: {
          ...state.percentages,
          [action.uid]: action.percentage,
        },
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        files: {
          ...state.files,
          [action.uid]: {
            name: action.response.name,
            mimetype: action.response.mimetype,
          },
        },
      };
    case UPLOAD_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.uid]: action.error,
        },
      };
    case CLEAR_UPLOADS:
      return initialState;
    default:
      return state;
  }
}
