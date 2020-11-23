(function showManuals(){
  let list = [
    {name: 'HES 5000 Series', image: '../../images/locks/5000_series.jpg', file: '../../files/pdfs/hes_5000_series.pdf', additional: [{name: 'HES 5200 Strike', file: '../../files/pdfs/hes_5200.pdf'}]},

    {name: 'HES 9000 Series Strikes', image: '../../images/locks/9000_series.jpg', file: '../../files/pdfs/hes_9400_9500_9600_9700.pdf', additional: []}, 

    {name: 'HES 7000 Series Strikes', image: '../../images/locks/7000_series_1.jpg', file: '../../files/pdfs/hes_7000_series.pdf', additional: []},
     
    {
      name: 'Magnalock M32, M62, and M82B', 
      image: '../../images/locks/magnalock.jpeg', 
      file: '../../files/pdfs/magnalock_m32_m62_m82b.pdf', 
      additional: []
    },
    
    {
      name: 'S2 Netbox Installation Manual', 
      image: '../../images/controllers/s2_netbox.jpg', 
      file: '../../files/pdfs/s2_netbox_installation_manual.pdf', 
      additional: 
      [
        {
          name: 'S2 Netbox Users Guide', 
          file: '../../files/pdfs/s2_netbox_users_guide.pdf'
        }, 
        {
          name: 'S2 End User Training', 
          file: '../../files/pdfs/s2_enduser_training.pdf' 
        }
      ]
    },
    {
      name: 'LifeSafety FPO', 
      image: '../../images/power_supplies/lifesafety_logo.jpg', 
      file: '../../files/pdfs/lifesafety_fpo.pdf',
      additional: [
        {
          name: 'LifeSafety Netlink',
          file: '../../files/pdfs/lifesafety_netlink.pdf'
        },
        {
          name: 'LifeSafety B100',
          file: '../../files/pdfs/lifesafety_b100.pdf'
        },
        {
          name: 'LifeSafety C4/C8',
          file: '../../files/pdfs/lifesafety_c4c8.pdf'
        },
        {
          name: 'LifeSafety M8',
          file: '../../files/pdfs/lifesafety_m8.pdf'
        },
        {
          name: 'LifeSafety D8',
          file: '../../files/pdfs/lifesafety_d8.pdf'
        }
      ]
    }
    
  ];

  let article = document.getElementById("manuals_list");
  let article_html = '';
  for(let i in list){
    let item = list[i];
    let addedHTML = '';
    if(item.additional){
      for(let j in item.additional){
        addedHTML += 
        `
          <p>${item.additional[j].name} <a href="${item.additional[j].file}" type="application/pdf" target="_blank">Open Manual</a></p>
        `;
      }
    }
    let html = 
    `
    <div class="manual">
      <img src="${item.image}" alt="${item.name}">
      <div class="column">
        <p>${item.name} <a href="${item.file}" type="application/pdf" target="_blank">Open Manual</a></p>
        ${addedHTML}
      </div>
    </div>
    `;
    article_html += html;

  }

  article.innerHTML = article_html;
})();

/* <div class="manual">
  <img src="/images/locks/5000_series.jpg" alt="5000 series lock" class="shown">
  <p>HES 5000 Series Strike <a href="/files/pdfs/hes_5000_series.pdf" type="application/pdf" target="_blank">Open Manual</a></p>
</div>
<div class="manual">
  <img src="/images/locks/5000_series.jpg" alt="">
  <p>HES 5000 Series Strike <a href="/files/pdfs/hes_5000_series.pdf" type="application/pdf" target="_blank">Open Manual</a></p>
</div> */