import renderer from '@dojo/framework/widget-core/vdom';
import Registry from '@dojo/framework/widget-core/Registry';
import { w } from '@dojo/framework/widget-core/d';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import { registerThemeInjector } from '@dojo/framework/widget-core/mixins/Themed';
import dojo from '@dojo/themes/dojo';
import '@dojo/themes/dojo/index.css';

import routes from './routes';
import App from './App';
import Store from '@dojo/framework/stores/Store';
import { AppState } from './interfaces/interfaces';

const MyStore = new Store<AppState>();

const registry = new Registry();
registerRouterInjector(routes, registry);
registerThemeInjector(dojo, registry);
registry.defineInjector('app-state', () => () => MyStore);

const r = renderer(() => w(App, {}));
r.mount({ registry });
