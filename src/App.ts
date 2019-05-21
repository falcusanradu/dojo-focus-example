import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './App.m.css';
import { ModalDialogContainer } from './containers/ModalDialogContainer';
import { SelectWidgetContainer } from './containers/SelectWidgetContainer';
// import ModalDialog from './widgets/ModalDialog';




export default class App extends WidgetBase {

	// private dialogOpen = false;

	protected render() {
		return v('div', { classes: [css.root] }, [
			w(SelectWidgetContainer, {}, []),
			w(ModalDialogContainer, {}, [])
			// w(ModalDialog, {
			// 	open: true,
			// 	onRequestClose: () => {
			// 		this.invalidate();
			// 	}
			// }, [])
		]);
	}
}
