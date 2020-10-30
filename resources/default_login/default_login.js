(function listDevices(){
  let devices = [
    {section: 'axis', name: 'Axis', address: '192.168.0.90', username: 'requested at login (old models: root)', password: 'requested at login (old models: pass)'},{section: 'gallagher', name: 'Gallagher Controller', address: '192.168.1.199/config', username: 'config', password: 'CardaxFT'},{section: 'life_safety', name: 'Life Safety', address: '192.168.1.9', username: 'admin', password: 'admin'}
    ];

  let article = document.getElementById('default_info');
  let devices_html = '';
  for(let i = 0; i < devices.length; i++){
    let html = `
                <section id="${devices[i].section}_section">
                  <h2>${devices[i].name}:</h2>
                  <ul>
                    <li>address: <b>${devices[i].address}</b></li>
                    <li>username: <b>${devices[i].username}</b></li>
                    <li>password: <b>${devices[i].password}</b></li>
                  </ul>
                </section>
                `;
    devices_html += html;
  }
  article.innerHTML = devices_html;
})();


// <section id="gallagher_section">
//         <h2>Gallagher Controller:</h2>
//         <ul>
//           <li>address: <b>192.168.1.199/config</b></li>
//           <li>username: <b>config</b></li>
//           <li>password: <b>CardaxFT</b></li>
//         </ul>
//       </section>