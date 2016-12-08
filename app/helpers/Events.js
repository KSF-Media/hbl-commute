// params is some object { param1: 'value1', param2: 'value2' }
export function TriggerEvent(params){
    console.log('Send event: ', params);
    //alert('Event fired');
    fetch('https://rvfa2fac83.execute-api.eu-central-1.amazonaws.com/prod/insertAppData', {
        method: 'POST',
        headers: {
            //'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            "TableName":"events",
            "Item": params
        })
    })
}
