import { createProcess, createCommandFactory } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { AppState, DirtyStateConfirmation } from '../interfaces/interfaces';

/**
 * Processes managing confirmations in the application with dirty state
 */

const commandFactory = createCommandFactory<AppState>();

const positiveClearDirtyConfirmationCommand = commandFactory<DirtyStateConfirmation>(({ path, get }) => {

    const confirmation = get(path('clearDirtyApplicationConfirmation'));
    if (confirmation.confirmationHandler) {
        confirmation.confirmationHandler();
    }

    return [
        replace(path('clearDirtyApplicationConfirmation'), undefined),
        replace(path('hasUnsavedChanges'), undefined),
    ];
});

const negativeClearDirtyConfirmationCommand = commandFactory<DirtyStateConfirmation>(({ path, get }) => {

    const confirmation = get(path('clearDirtyApplicationConfirmation'));
    if (confirmation.rejectionHandler) {
        confirmation.rejectionHandler();
    }

    return [replace(path('clearDirtyApplicationConfirmation'), undefined)];
});

const requestClearDirtyConfirmationCommand = commandFactory<DirtyStateConfirmation>(({ path, payload }) => {
    return [replace(path('clearDirtyApplicationConfirmation'), payload)];
});


const setUnsavedChangesComand = commandFactory<Boolean>(({ path, payload }) => {
    return [replace(path('hasUnsavedChanges'), payload)];
});

/**
 * Update the application confirmation payload with dirty flag reset.
 */
export const positiveClearDirtyConfirmationProcess =
    createProcess<AppState, DirtyStateConfirmation>('positive-clear-dirty-confirmation-app',
        [positiveClearDirtyConfirmationCommand]);

/**
 * Update the application confirmation payload with dirty flag reset.
 */
export const negativeClearDirtyConfirmationProcess =
    createProcess<AppState, DirtyStateConfirmation>('negative-clear-dirty-confirmation-app', [
        negativeClearDirtyConfirmationCommand]);

/**
 * Update the application confirmation payload with dirty flag reset.
 */
export const requestClearDirtyConfirmationProcess =
    createProcess<AppState, DirtyStateConfirmation>('request-clear-dirty-confirmation-app',
        [requestClearDirtyConfirmationCommand]);


export const setUnsavedChangesProcess =
    createProcess<AppState, Boolean>('set-unsavedChanges',
        [setUnsavedChangesComand]);
