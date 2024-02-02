import { boot } from 'quasar/wrappers';
import Plugins from '../plugins';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  Plugins.forEach((plugin) => app.use(plugin));
});
