// ==UserScript==
// @name         New Userscript
// @match        *
// ==/UserScript==

window.addEventListener('load', ()=> {
    let sitesToBlock = [
        'http://att-100745.square.site/'
        ,'http://disnaflor.com/	Facebook, Inc.	12:15:51'
        ,'https://marriage-agency-authentic.com/bizz/zinc/index.php?eml=sales2@yavuzsan.com	'
        ,'https://delivery.attempt.ndelectric-dz.com/public/VvYHLKN1ZWfqZ6istBAK6Bd8ZQzfXIbh'
        ,'https://www.cheerthai.co/wp-admin/POSTSWISS/swiss/swissra/ch/-/swisspost/sms.php'
        ,'http://flashy-mousy-hearing.glitch.me/009.html'
        ,'https://siasky.net/IADcWoPbOsiZ7S_HkNvm-Zr4nnAyJspehrpMq3u_FAqtRw	'
        ,'http://idolnutrition.com/area/c1576d22b68379b80c0f2b47724d9423'
        ,'http://boring-jackson.144-91-116-225.plesk.page/file/	'
        ,'https://subscriber.bonitatododia.com/Spam?name=rb2&1ydo3=rachel.lawson@three.co.uk&4i=&%20i=ng%20in%20the%20background%20and%20two%20admirable%20uncles%20skipp'
        ,'https://blank-lebonnncoin.37-221-67-172.plesk.page/connexion.php	'
        ,'https://sistema-fatura-setembro-hipercard.com/inicio/	'
        ,'http://midb.mx/g/EditPasswd=3235=Gmail&passivese&continue&scc=1<mpl=defaultltmplcache=2&emr=ServiceLogin.htm	'
        ,'http://almenteseulimite.com/'
        ,'http://amidabuli.com/	'
        ,'https://ppingixusobsbieqbsu-qhczihitywbsbwikqyv-q-qsnligikxobylmlkzv.glitch.me/anlxilhvbpzapxpmfklvwznmounspkqtqkjgeawb-ckzdlgofobgizsifchlswafcjjugjrtmqhvinave-ftauxesjbnuprivvguqxgizsifchlswafcjjug.html?$web_only=true&_branch_match_id=1097791038465951561&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLygvza8qKKkoryquyC/PyyvLLjTRSywo0MvJzMvWT9VPM/BK8yyyTLMoTgIABwDqejMAAAA='
        ,'https://stop-successful-addition.com/Login.php'
        ,'https://www.infouspsdelivery.com/'
        ,'http://cityofinkster.net/assets/68443/Login.html'
        ,'http://detail-info-customer.com/2f885d0fbe2e131bfc9d98363e55d1d4/	'
        ,'https://lightequine.com/ass/'
        ,'http://dev-doorverwijzing.pantheonsite.io/kamer/'
        ,'https://posameldk-bb5106.ingress-baronn.ewp.live/BPO/Ba-Po/web/index.html'
        ,'https://dev-dcxbls.pantheonsite.io/wp-content/S0CGN22/'
        ,'https://surahaindia.com/office/adonbe/Adobe.html'
        ,'https://www--wellsfargo--com--t849329d48d6c.wsipv6.com/ '
        ,'https://mod-formulary-welcome.tk/ '
        ,'http://lcloud.ifind-ios.com/expire/'
        ,'https://trustnowre.easy.co/'
        ,'https://aremvaxtyga-bb4e8d.ingress-bonde.ewp.live/rotechs/clients/cc.php'
    ];
    let regexToMatchTLD = /\..+/;
    let href = window.location.href;
    for (let i = 0; i < sitesToBlock.length; i++) {
        if (href.includes(sitesToBlock[i])) {
            let domain = sitesToBlock[i].replace(regexToMatchTLD, '');
            document.body.innerHTML =`
                <div style="direction: ltr; position: fixed; top: 0; z-index: 999999; display: block; width: 100%; height: 100%; background: red">
                  <p style="position: relative; top: 40%; display: block; font-size: 66px; font-weight: bold; color: #fff; margin: 0 auto; text-align: center">
                    404 Site Blocked !!!
                  </p>
                </div>
          `;
        }
    }
  }, false);