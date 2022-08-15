import Client from '../src/Client';

export const fetch = jest.fn();

export const window = {
	// eslint-disable-next-line global-require
	fetch: process.env.INTEGRATED_SERVER ? require('node-fetch') : fetch,
};
Object.defineProperty(global, 'window', {
	get() { return window; },
});

export const client = new Client(process.env.INTEGRATED_SERVER ?? 'http://localhost:8999');
