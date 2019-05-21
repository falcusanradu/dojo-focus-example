import { Store } from '@dojo/framework/stores/Store';
import ModalDialog, { ModalDialogProperties } from '../widgets/ModalDialog';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';
import { AppState } from '../interfaces/interfaces';
import { openModalProcess } from '../processes/ModalDialogProcess';
import { setDirtyStateProcess } from '../processes/SelectWidgetContainerProcess';

export const ModalDialogContainer = StoreContainer<AppState>(ModalDialog, 'app-state', {

	paths: [['isModalOpen']],
	getProperties(store: Store<AppState>): ModalDialogProperties {
		const { get, path } = store;
		const isModalOpen = get(path('isModalOpen'));
		return {
			key: 'modal-dialog',
			open: isModalOpen,
			onRequestClose: () => {
				openModalProcess(store)(false);
				setDirtyStateProcess(store)(false);
			}
		};
	}
});
