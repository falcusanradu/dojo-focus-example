import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Select from '@dojo/widgets/select';

import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';

export interface MyWidgetProperties extends WidgetProperties {
	options: string[];
	onOptionChange: (options: string[]) => void;
}

export default class SelectWidget extends WidgetBase<MyWidgetProperties> {

	protected render() {
		const { options, onOptionChange } = this.properties;
		return v('div', {}, [
			w(Select, {
				options,
				onChange: () => {
					onOptionChange(options);
				}
			}, []),
		]);
	}
}
