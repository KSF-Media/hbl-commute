import DeviceInfo from 'react-native-device-info';

module.exports = {

	ROUTES: [
		{ id: 'main', title: 'Main', index: 0 },
		{ id: 'my-list', title: 'My List', index: 1 },
		{ id: 'archive', title: 'Archive', index: 2 },
	],

	COLOR: {
		HBL_HEADER: '#f07e26',
		GREY_HEADER: '#8f867e',
		GREY_BACKGROUND: '#f7f5f3',
		NEGATIVE: 'red',
		POSITIVE: 'green',
		HIGHLIGHT: 'yellow'
	},

	SIZE: {
		ARTICLE_ITEM_HEIGHT: 70
	},
	deviceInfo:{
		deviceUID: DeviceInfo.getUniqueID(),
		deviceDetails:{
			deviceMaker: DeviceInfo.getManufacturer(),
			deviceBrand: DeviceInfo.getBrand(),
			deviceModel: DeviceInfo.getModel(),
			deviceID: DeviceInfo.getDeviceId(),
			deviceSysName: DeviceInfo.getSystemName(),
			deviceName: DeviceInfo.getDeviceName(),
			deviceUserAgent: DeviceInfo.getUserAgent(),
			deviceCountry: DeviceInfo.getDeviceCountry()
		}
	}

};
