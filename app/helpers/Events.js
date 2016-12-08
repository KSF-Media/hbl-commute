import React, {Component} from 'react';

// params is some object { param1: 'value1', param2: 'value2' }
export function TriggerEvent(params){

    //alert('Event fired');
    fetch('https://path.to/endpoint', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })

}
