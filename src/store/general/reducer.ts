import {
    GeneralActionTypes,
    GeneralState,
    UPDATE_ABOUT_POPUP_STATUS,
    UPDATE_EXPORT_POPUP_STATUS,
    UPDATE_IMPORT_POPUP_STATUS,
    UPDATE_OPTIONS_POPUP_STATUS
} from "./types";

const initialState: GeneralState = {
    isImportPopupOpen: false,
    isExportPopupOpen: false,
    isOptionsPopupOpen: false,
    isAboutPopupOpen: false
};

export function generalReducer(
    state = initialState,
    action: GeneralActionTypes
): GeneralState {
    switch (action.type) {
        case UPDATE_IMPORT_POPUP_STATUS: {
            return {
                ...state,
                isImportPopupOpen: action.payload.status
            }
        }
        case UPDATE_EXPORT_POPUP_STATUS: {
            return {
                ...state,
                isExportPopupOpen: action.payload.status
            }
        }
        case UPDATE_OPTIONS_POPUP_STATUS: {
            return {
                ...state,
                isOptionsPopupOpen: action.payload.status
            }
        }
        case UPDATE_ABOUT_POPUP_STATUS: {
            return {
                ...state,
                isAboutPopupOpen: action.payload.status
            }
        }
        default:
            return state;
    }
}