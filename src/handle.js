class Handle {
    handle(data, resolve, reject) {
		if (data.msg) {
			return reject(new Error(data.msg));
		}
		return resolve(data);
	}
}

module.exports = Handle;