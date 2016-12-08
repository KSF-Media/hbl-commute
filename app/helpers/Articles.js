// params is some object { param1: 'value1', param2: 'value2' }
export function FetchArticles(uri){

    return fetch(uri)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('Event: ', responseJson.data);
            return responseJson.data;
        })
        .catch((error) => {
            //console.error(error);
        });

}
