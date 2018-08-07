// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  walletUrl: 'http://172.16.238.15:8002',
  votingUrl: 'http://172.16.238.15:8004',
  appName: 'XDAC EOS Tracker',
  logoUrl: '/assets/logo.png',
  apiUrl: 'http://172.16.238.15:8000',
  blockchainUrl: 'http://172.16.238.20:8888'
};
