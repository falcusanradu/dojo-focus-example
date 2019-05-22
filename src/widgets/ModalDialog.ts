import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import Dialog from '@dojo/widgets/dialog';
import Button from '@dojo/widgets/button';
import { DirtyStateConfirmation } from '../interfaces/interfaces';

export interface ModalDialogProperties extends WidgetProperties {
    open?: boolean;
    confirmation?: DirtyStateConfirmation;
    positiveConfirmation: (payload: {}) => void;
    negativeConfirmation: (payload: {}) => void;
}

export default class ModalDialog extends WidgetBase<ModalDialogProperties> {
    protected render() {
        const { confirmation, positiveConfirmation, negativeConfirmation } = this.properties;
        let toReturn;
        confirmation ? toReturn = w(Dialog, {
            ...dialogProperties,
            open: true
        }, [
                v('div', { id: 'btn-wrapper' }, [
                    w(Button, {
                        focus: () => true,
                        onClick: () => {
                            positiveConfirmation({});
                        }
                    }, [
                            'Do stuff!'
                        ]),
                    w(Button, {
                        onClick: () => {
                            negativeConfirmation({});
                        }
                    }, [
                            'Cancel'
                        ])
                ])
            ]) : toReturn = null;
        return toReturn;
    }
}

const dialogProperties = {
    key: 'modal-dialog',
    closeable: false,
    modal: true,
    title: 'Dirty State Modal Dialog',
    underlay: true,
}
