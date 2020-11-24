"use strict";

function showS2Layout(list) {
  let html = `<h3>${list.name}</h3>`;

  list.doors.forEach(function (door) {
    let divHtml = "";
    let inputUl = "<ul>";
    let outputUl = "<ul>";
    //* build inputs
    for (let i = 0; i < door.inputs.length; i++) {
      if (door.inputs[i] === null) {
        continue;
      }
      inputUl += `
                  <li><strong>Input ${i + 1}:</strong> ${door.inputs[i]}</li>
                  `;
    }
    inputUl += "</ul>";
    //* build outputs
    for (let i = 0; i < door.outputs.length; i++) {
      if (door.outputs[i] === null) {
        continue;
      }
      outputUl += `
                  <li><strong>Output ${i + 1}: </strong>${door.outputs[i]}</li>
                  `;
    }
    outputUl += "</ul>";

    divHtml += `
                <div class="s2_layout-div">
                  <h4><strong>Door: </strong>${door.name}</h4>
                  <p><strong>Box:</strong> ${door.box} <br><strong>Blade:</strong> ${door.blade}</p>
                  <p><strong>Reader:</strong> ${door.reader}</p>
                  ${inputUl}
                  ${outputUl}
                </div>
                `;

    html += divHtml;
  });

  return html;
}

/* <h3>First Floor Ext IDF</h3>
<div class="s2_layout-div">
  <h4><strong>Door:</strong> Outpatient Imaging Corridor (iMXDa's w/opener)</h4>
  <p><strong>Box:</strong> 1: <strong>Blade:</strong> 4</p>
  <ul>
    <li><strong>Input 1:</strong>DPS</li>
    <li><strong>Input 2:</strong>REX</li>
    <li><strong>Input 4:</strong>From Output 4 (wht cable- grn/wht)</li>
  </ul>
  <ul>
    <li><strong>Output 1:</strong>To Input 1</li>
    <li><strong>Output 2:</strong>Follower - onValidCardRead</li>
    <li><strong>Output 3:</strong>Bypas +24v</li>
    <li><strong>Output 4:</strong>Reset +24v</li>
  </ul>
</div> */
