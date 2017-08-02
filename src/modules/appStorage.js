const APPSTORE = ((key)=> {
	const storeKey = key;
	const storage = window.localStorage;

	return {
		storeData: (data) => {
			const stringyData = JSON.stringify(data);
			storage.setItem(storeKey, stringyData);
			return stringyData;
		},
		get: () => {
			const stringyData = storage.getItem(storeKey);
			return stringyData && stringyData !== 'undefined' ? JSON.parse(stringyData) : null
		}
	}
})

export default APPSTORE;
