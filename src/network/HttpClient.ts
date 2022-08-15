import { Method } from './Http';

export default class HttpClient {
	private serverUrl: string;

	constructor(serverUrl = 'http://localhost:8999') {
		this.serverUrl = serverUrl;
	}

	get(api: string, query?: URLSearchParams): Promise<Response> {
		let context = api;
		if (query) {
			const queryStr = query.toString();
			if (queryStr) {
				context += `?${queryStr}`;
			}
		}
		return this.request(Method.Get, context);
	}

	post(api: string | [string, URLSearchParams], body?: unknown): Promise<Response> {
		let context: string;
		if (Array.isArray(api)) {
			context = `${api[0]}?${api[1].toString()}`;
		} else {
			context = api;
		}
		return this.request(Method.Post, context, body);
	}

	async request(method: Method, api: string, data?: unknown): Promise<Response> {
		const init: RequestInit = {
			method,
		};

		if (data) {
			init.body = JSON.stringify(data);
		}

		const res = await window.fetch(`${this.serverUrl}${api}`, init);
		return res;
	}
}
