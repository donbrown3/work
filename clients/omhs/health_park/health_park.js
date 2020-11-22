'use strict';


let omhsHealthParkFirstFloorExt = {
  name: 'First Floor Ext IDF',
  doors: [
    {
      name: 'Outpatient Imaging Corridor (iMXDa\'s w/opener)',
      box: 1,
      blade: 4,
      inputs: ['DPS', 'REX', null, 'From output 4'],
      outputs: ['To Input 1', 'Follower - onValidCardRead', 'Bypas +24v', 'Reset +24v']
    },
    {
      name: 'Ford Center Rear Hallay',
      box: 1,
      blade: 5, 
      inputs: ['DPS', 'REX'],
      outputs: ['Lock']
    }
  ]
}

let floorOneOutside = document.getElementById('floor1_outside_idf');
floorOneOutside.innerHTML = showS2Layout(omhsHealthParkFirstFloorExt);