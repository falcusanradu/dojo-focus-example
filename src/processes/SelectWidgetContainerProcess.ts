import { createProcess, createCommandFactory } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { AppState } from '../interfaces/interfaces';

const commandFactory = createCommandFactory<AppState>();


const setDirtyStateCommand = commandFactory<Boolean>(({ path, payload }) => {
    return [replace(path('dirtyState'), payload)];
});

export const setDirtyStateProcess = createProcess('set-dirty-state', [setDirtyStateCommand]);
