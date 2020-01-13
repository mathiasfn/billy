import VueLogger from 'vuejs-logger';

const isProduction = process.env.NODE_ENV === 'production';
const options = {
  isEnabled: !isProduction,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

export default ({Vue}) => {
  Vue.use(VueLogger, options);
}
