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
        let isdirtyState = get(path('dirtyState'));
        // init dirtyState if undefined
        if (isdirtyState === undefined) {
            setDirtyStateProcess(store)(true);
            isdirtyState = get(path('dirtyState'));
        }
        return {
            options,
            onOptionChange: () => {
                // every 2 clicks dirty state is generated!
                if (!isdirtyState) {
                    // do something
                    options.reverse();
                    // set dirtyState
                    setDirtyStateProcess(store)(true);
                    isdirtyState = get(path('dirtyState'));
                } else {
                    // open modalDialog process
                    openModalProcess(store)(true);
                    let btnWrapper = document.getElementById('btn-wrapper');
                    console.log('btnWrapper', btnWrapper);
                }
            }
        }
    }
});
