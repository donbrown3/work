let s2List = [
  {
    name: 'OMHS iMXDa Card Layout',
    reader1: 'Reader',
    reader2: 'Not Used',
    input1: 'DPS',
    input2: 'REX', 
    input3: 'Not Used', 
    input4: 'From Output 1(comm on top)',
    output1: 'To Input 4',
    output2: 'Bypass +24v',
    output3: 'Reset +24v', 
    output4: 'Follower onValidCardRead(used for auto opener)'
  }
]

function displayS2Layouts(list){
  let html = '<h2>Non-Standard S2 Layouts</h2>';
  for(let i = 0; i < list.length; i++){
    let element = list[i];
    html += 
        `
          <h3>${element.name}</h2>
          <ul>
            <li><b>Reader 1:</b> ${element.reader1}</li>
            <li><b>Reader 2:</b> ${element.reader2}</li>
            <li><b>Input 1:</b> ${element.input1}</li>
            <li><b>Input 2:</b> ${element.input2}</li>
            <li><b>Input 3:</b> ${element.input3}</li>
            <li><b>Input 4:</b> ${element.input4}</li>
            <li><b>Output 1:</b> ${element.output1}</li>
            <li><b>Output 2:</b> ${element.output2}</li>
            <li><b>Output 3:</b> ${element.output3}</li>
            <li><b>Output 4:</b> ${element.output4}</li>
          </ul>
        `;
  }
  return html;
}

window.onload = function() {
  document.getElementById('s2_layouts').innerHTML = displayS2Layouts(s2List);
}

/* <h2>Non-standard S2 Layouts</h2>
<h3>OMHS iMXDa Card Layout</h2>
<ul>
  <li><b>Reader 1:</b> Reader</li>
  <li><b>Reader 2:</b> Not Used</li>
  <li><b>Input 1:</b> DPS</li>
  <li><b>Input 2:</b> REX</li>
  <li><b>Input 3:</b> Not Used</li>
  <li><b>Input 4:</b> From Output1(comm on top)</li>
  <li><b>Output 1:</b> To input 4</li>
  <li><b>Output 2:</b> Bypass +24v</li>
  <li><b>Output 3:</b> Reset +24v</li>
  <li><b>Output 4:</b> Follower onValidCardRead</li>
</ul> */