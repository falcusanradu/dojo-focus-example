import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import Dialog from '@dojo/widgets/dialog';
import Button from '@dojo/widgets/button';

export interface ModalDialogProperties extends WidgetProperties {
    open: boolean;
    onRequestClose: () => void;
}

export default class ModalDialog extends WidgetBase<ModalDialogProperties> {
	protected render() {
        const { onRequestClose } = this.properties;
        let { open } = this.properties;
		return w(Dialog, {
            ...dialogProperties,
            open,
            onRequestClose: () => {
                onRequestClose();
            }
        }, [
                v('div', {}, [
                    w(Button, {
                        focus: () => true
                    }, [
                            'Button should be focused!'
                        ])
                ])
            ]);
	}
}

const dialogProperties = {
	closeable: true,
	modal: true,
	title: 'Dirty State Modal Dialog',
	underlay: true,
}
