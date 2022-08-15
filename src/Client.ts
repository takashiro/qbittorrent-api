import Torrent from './model/Torrent';
import TorrentFilterOptions from './model/TorrentFilterOptions';
import { StatusCode } from './network/Http';

import HttpClient from './network/HttpClient';
import HttpError from './network/HttpError';

export default class Client extends HttpClient {
	async getTorrents(options?: TorrentFilterOptions): Promise<Torrent[]> {
		const query = new URLSearchParams();
		if (options) {
			for (const [k, v] of Object.entries(options)) {
				if (typeof v === 'string') {
					query.append(k, v);
				} else if (typeof v === 'number' || typeof v === 'boolean') {
					query.append(k, String(v));
				} else if (Array.isArray(v)) {
					query.append(k, v.join('|'));
				}
			}
		}
		const res = await this.get('/api/v2/torrents/info', query);
		if (res.status !== StatusCode.Ok) {
			throw new HttpError(res.status, await res.text());
		}
		return await res.json();
	}
}
