const initStore = (key) => ({
	storeKey: key,
	storage: window.localStorage,
	storeData (data) {
		const stringyData = JSON.stringify(data);
		this.storage.setItem(this.storeKey, stringyData);
		return stringyData;
	},
	get () {
		const stringyData = this.storage.getItem(this.storeKey);
		return stringyData && stringyData !== 'undefined' ? JSON.parse(stringyData) : null
	}

});

export default initStore;
