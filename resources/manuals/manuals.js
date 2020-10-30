(function showManuals(){
  let list = [
    {name: 'HES 5200 Strike', image: '/images/locks/5000_series.jpg', class: 'shown', file: '/files/pdfs/hes_5200.pdf'}, {name: 'HES 5000 Series',image: '/images/locks/5000_series.jpg', class: 'hidden', file: '/files/pdfs/hes_5000_series.pdf'}, {name: 'HES 9000 Series Strikes', image: '/images/locks/9000_series.jpg', class: 'shown', file: '/files/pdfs/hes_9400_9500_9600_9700.pdf'}, {name: 'Magnalock M32, M62, and M82B', image: '/images/locks/magnalock.jpeg', class: 'shown', file: '/files/pdfs/magnalock_m32_m62_m82b.pdf'}, {name: 'S2 Netbox Installation Manual', image: '/images/controllers/s2_netbox.jpg', class: 'shown', file: '/files/pdfs/s2_netbox_installation_manual.pdf'}, {name: 'S2 Netbox Users Guide', image: '', class: 'hidden', file: '/files/pdfs/s2_netbox_users_guide.pdf'}, {name: 'S2 End User Training', image: '', class: 'hidden', file: '/files/pdfs/s2_enduser_training.pdf'}
  ];

  let article = document.getElementById("manuals_list");
  let article_html = '';
  for(let i in list){
    let item = list[i];
    let html = 
    `<div class="manual">
      <img src="${item.image}" alt="${item.name}" class="${item.class}">
      <p>${item.name} <a href="${item.file}" type="application/pdf" target="_blank">Open Manual</a></p>
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