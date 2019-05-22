/**
 * My application store.
 */
export interface AppState {
    isModalOpen: boolean;
    dirtyState: boolean;
    clearDirtyApplicationConfirmation: DirtyStateConfirmation;
    hasUnsavedChanges: boolean;
}


export interface DirtyStateConfirmation {
	/**
	 * Callback for confirming the action
	 */
    confirmationHandler?: () => void;
	/**
	 * Callback for rejecting the action
	 */
    rejectionHandler?: () => void;
	/**
	 * Message to confirm
	 */
    confirmMessage?: string;
	/**
	 * Label of confirm action
	 */
    confirmLabel?: string;
}
