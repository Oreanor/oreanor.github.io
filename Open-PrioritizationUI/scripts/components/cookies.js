class Cookies {
	set(name, value, options) {
		if (!name) {
			return;
		}
		this.remove(name);

		options = options || {};

		var expires = options.expires;

		if (typeof expires === 'number' && expires) {
			var d = new Date();
			d.setTime(d.getTime() + expires * 1000);
			expires = options.expires = d;
		}
		if (expires && expires.toUTCString) {
			options.expires = expires.toUTCString();
		}

		value = encodeURIComponent(value);

		var updatedCookie = name + '=' + value;

		for (var propName in options) {
			updatedCookie += '; ' + propName;
			var propValue = options[propName];
			if (propValue !== true) {
				updatedCookie += '=' + propValue;
			}
		}

		document.cookie = updatedCookie;
	}

	get(name) {
		var matches = document.cookie.match(
			new RegExp(
				'(?:^|; )' +
					name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') +
					'=([^;]*)'
			)
		);
		return matches
			? decodeURIComponent(matches[1])
			: undefined;
	}

	remove(name) {
		var date = new Date(0);
		document.cookie =
			name + '=; path=/; expires=' + date.toUTCString();
	}
}

let cookies = new Cookies();
export default cookies;
