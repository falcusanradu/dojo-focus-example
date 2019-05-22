import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './App.m.css';
import { SelectWidgetContainer } from './containers/SelectWidgetContainer';
import { ModalDialogContainer } from './containers/ModalDialogContainer';

export default class App extends WidgetBase {

	protected render() {
		return v('div', { classes: [css.root] }, [
			w(SelectWidgetContainer, {}, []),
			w(ModalDialogContainer, {}, [])
		]);
	}
}
