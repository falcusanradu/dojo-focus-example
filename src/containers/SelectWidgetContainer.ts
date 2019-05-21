import { Store } from '@dojo/framework/stores/Store';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';
import { AppState } from '../interfaces/interfaces';
import SelectWidget, { MyWidgetProperties } from '../widgets/MyWidget';
import { openModalProcess } from '../processes/ModalDialogProcess';
import { setDirtyStateProcess } from '../processes/SelectWidgetContainerProcess';

const options = ['mask1', 'mask2']
export const SelectWidgetContainer = StoreContainer<AppState>(SelectWidget, 'app-state', {

    paths: [['dirtyState']],
    getProperties(store: Store<AppState>): MyWidgetProperties {
        const { get, path } = store;
        const isdirtyState = get(path('dirtyState'));
        return {
            options,
            onOptionChange: () => {
                // every 2 clicks dirty state is generated!
                setDirtyStateProcess(store)(!isdirtyState);
                if (!isdirtyState && dirtyStateCount % 2 === 0) {
                    // do something
                    options.reverse();
                } else {
                    // open modalDialog process
                    openModalProcess(store)(true);
                }
                dirtyStateCount++;
            }
        }
    }
});

// used to count the dirtyState
let dirtyStateCount = 0;
