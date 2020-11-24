'use strict';


let omhsHealthParkFirstFloorExt = {
  name: 'First Floor Exterior IDF',
  doors: [
    {
      name: 'Outpatient Imaging Corridor (iMXDa\'s w/opener)',
      box: 1,
      ip: '(xxx.xxx.15.249)',
      blade: 4,
      reader: 1,
      inputs: ['DPS', 'REX', 'Not Used', 'From output 1'],
      outputs: ['To Input 4', 'Follower - onValidCardRead (white cable grn/wht)', 'Bypass +24v (lock cable - white)', 'Reset +24v (lock cable - green)']
    },
    {
      name: 'Ford Center Rear Hallay',
      box: 1,
      ip: '(xxx.xxx.15.249)',
      blade: 5,
      reader: 1, 
      inputs: ['DPS', 'REX', null, null],
      outputs: ['Lock', null, null, null]
    }
  ]
}

let floorOneOutside = document.getElementById('floor1_outside_idf');
floorOneOutside.innerHTML = showS2Layout(omhsHealthParkFirstFloorExt);