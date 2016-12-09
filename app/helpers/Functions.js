export function TimestampToHoursAndMinutes(timestamp) {
	var t = new Date(timestamp),
		hours = ('0' + t.getHours()).slice(-2),
		minutes = ('0' + t.getMinutes()).slice(-2);
	return hours + ":" + minutes;
}

export function TruncateString(str, max){
	return (typeof str === 'string' && str.length > max ? str.substring(0,max) + ' […]' : str);
}