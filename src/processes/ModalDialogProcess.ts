import { createProcess, createCommandFactory } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { AppState } from '../interfaces/interfaces';

const commandFactory = createCommandFactory<AppState>();


const openModalDialogCommand = commandFactory<Boolean>(({ path, payload }) => {
	return [replace(path('isModalOpen'), payload)];
});

export const openModalProcess = createProcess('open-modal-dialog', [openModalDialogCommand]);
