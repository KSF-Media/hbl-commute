import * as GLOBAL from '../Globals';
// params is some object { param1: 'value1', param2: 'value2' }
export function TriggerEvent(params){

    var eventObject = {
        "TableName": "events2",
        "Item": {
            "marshmellowman": "ksf_data",
            "ksf_appid": GLOBAL.deviceInfo.deviceUID,
            "ksf_eventstring": params.eventName,
            "ksf_articleid": params.articleUuid,
            "ksf_timestamp": new Date().getTime(),
            "ksf_gps": "[60.16952, 24.93545]",
            "ksf_appinfo": GLOBAL.deviceInfo.deviceDetails
        }
    }

    console.log('Send event: ', eventObject);
    //alert('Event fired');

    fetch('https://rvfa2fac83.execute-api.eu-central-1.amazonaws.com/prod/insertAppData', {
        method: 'POST',
        headers: {
            //'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(eventObject)

    })
    .then((response) => {console.log(response)})

}
