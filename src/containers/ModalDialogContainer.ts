import { Store } from '@dojo/framework/stores/Store';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';
import ModalDialog, { ModalDialogProperties } from '../widgets/ModalDialog';
import { AppState } from '../interfaces/interfaces';
import { positiveClearDirtyConfirmationProcess, negativeClearDirtyConfirmationProcess } from '../processes/DirtyStateDialogContainer';

export function getModalDialogContainerProperties(store: Store<AppState>):
    ModalDialogProperties {
    const { path, get } = store;
    return {
        confirmation: get(path('clearDirtyApplicationConfirmation')),
        positiveConfirmation: positiveClearDirtyConfirmationProcess(store),
        negativeConfirmation: negativeClearDirtyConfirmationProcess(store)
    };
}
export const ModalDialogContainer = StoreContainer<AppState>(ModalDialog, 'app-state', {
    paths: [['clearDirtyApplicationConfirmation']],
    getProperties: getModalDialogContainerProperties

});
