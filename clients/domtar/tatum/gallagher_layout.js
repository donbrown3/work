(function fillInGallagher(){
  let doors = [
    {section: 'lobby_section', name: 'Lobby Door', type: 'HES 7000 Strike', reader: 'H1', dps: '1', rex: '2', lock: '1', lslock: '1', lsrex: '1'},
    {section: 'employee_entrance', name: 'Employee Entrance', type: 'HES 7000 Strike', reader: 'H2', dps: '4', rex: '5', lock: '2', lslock: '2', lsrex: '2'}
  ];
  let panelTamper = {input: '24'}
  let article = document.getElementById('gallagher_layout');
  let articleHtml = '';
  for(let i in doors){
    let item = doors[i];
    let html = 
    `
      <section id="${item.section}">
        <h3>${item.name}</h3>
        <ul>
          <li>
            <h4>Lock Type</h4>
            <ul>
              <li>${item.type}</li>
            </ul>
          </li>
          <li>
            <h4>Gallagher</h4>
            <ul>
              <li>reader: <b>${item.reader}</b></li>
              <li>Door Postion: <b>Input ${item.dps}</b></li>
              <li>Request to Exit: <b>Input ${item.rex}</b></li>
              <li>Lock Output: <b>Output ${item.lock}</b></li>
            </ul>
          </li>
          <li>
            <h4>Life Safety</h4>
              <ul>
                <li>Door Lock: <b>M8 In/Out ${item.lslock}</b></li>
                <li>Request to Exit: <b>Constant Output ${item.lsrex}</b></li>
              </ul>
          </li>
        </ul>
      </section>
    `;
    articleHtml += html;
  }
  if(panelTamper){
    let html = `
                <section>
                  <h3>Panel Tamper</h3>
                  <ul>
                    <li>Tamper Input: <b>Input ${panelTamper.input}</b></li>
                  </ul>
                </section>
              `;

    articleHtml += html;
  }
  article.innerHTML = articleHtml;
})();



/* <section id="lobby_section">
  <h3>Lobby Door</h3>
  <ul>
    <li>
      <h4>Lock Type</h4>
      <ul>
        <li> HES 7000 strike</li>
      </ul>
    /li>
    <li>
      <h4>Gallagher</h4>
      <ul>
        <li>reader: <b>H1</b></li>
        <li>Door Position: <b>Input 1</b></li>
        <li>Request to Exit: <b>Input 2</b></li>
        <li>Srike Output: <b>Output 1</b></li>
      </ul>
    </li>
    <li>
      <h4>Life Safety</h4>
      <ul>
        <li>Door Lock: <b>M8 In/Out 1</b></li>
        <li>Request to Exit: <b>Constant Output 1</b></li>
      </ul>
    </li>
  </ul>
</section>  */