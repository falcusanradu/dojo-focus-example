import { Store } from '@dojo/framework/stores/Store';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';
import { AppState } from '../interfaces/interfaces';
import SelectWidget, { MyWidgetProperties } from '../widgets/MyWidget';
import { setUnsavedChangesProcess, requestClearDirtyConfirmationProcess } from '../processes/DirtyStateDialogContainer';

const options = ['mask1', 'mask2']
export const SelectWidgetContainer = StoreContainer<AppState>(SelectWidget, 'app-state', {

    paths: [['dirtyState']],
    getProperties(store: Store<AppState>): MyWidgetProperties {

        const confirmationHandler = () => {
            // window.location.href = "https://www.google.com/";
            alert('Do some stuff!');
        };
        const { get, path } = store;
        let unsavedChanges = get(path('hasUnsavedChanges'));
        if (unsavedChanges === undefined) {
            setUnsavedChangesProcess(store)(true);
            unsavedChanges = get(path('hasUnsavedChanges'));
        }
        return {
            options,
            onOptionChange: () => {
                // every 2 clicks dirty state is generated!
                if (unsavedChanges) {
                    // error + display modal dialog
                    requestClearDirtyConfirmationProcess(store)({ confirmationHandler });
                } else {
                    // do something
                    confirmationHandler();
                }
            }
        }
    }
});
