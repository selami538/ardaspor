// Cloudflare Pages Function — functions/[[path]].js
export async function onRequest({ request }) {
  const url = new URL(request.url);
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }

  const html = `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Galatasaray - Amedspor | Canlı Yayın</title>
<meta name="description" content="Galatasaray - Amedspor maç yayın sayfası.">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VVX94P8B7G"></script>
<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','G-VVX94P8B7G');
</script>
<style>
*{box-sizing:border-box}body{margin:0;background:#0b1020;color:#f4f6ff;font:16px Arial,sans-serif}
header{background:#131c31;border-bottom:1px solid #29334a;padding:20px;text-align:center}
header strong{font-size:25px}.wrap{max-width:1050px;margin:auto;padding:20px 14px}
.notice{background:#33291a;border:1px solid #7c5a24;color:#ffe2a1;padding:14px;border-radius:10px;text-align:center;margin:18px 0}
h1{text-align:center;font-size:clamp(23px,4vw,36px);margin:24px 0 8px}.sub{text-align:center;color:#9baac4;margin-bottom:20px}
.ad{border-radius:10px;background:#141e31;display:flex;align-items:center;justify-content:center;margin:20px auto;overflow:hidden;text-align:center}
.ad a{display:block;width:100%}.ad img{display:block;width:100%;height:auto;object-fit:contain}
.ad-zone{max-width:1050px;margin:16px auto;text-align:center;min-height:1px}
.player-shell{background:#000;border:1px solid #33405b;border-radius:12px;overflow:hidden;aspect-ratio:16/9;position:relative}
#player{width:100%;height:100%}.foot{text-align:center;color:#93a0b8;padding:28px 12px;font-size:13px}
@media(max-width:600px){.wrap{padding:12px}header strong{font-size:20px}}
</style>
<script src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>
</head>
<body>
<div class="notice" style="margin:0;border-radius:0;background:#172638;border-color:#eab308;color:#fff;line-height:1.6;padding:18px 16px">
<strong style="color:#facc15;font-size:18px">⚠️ Önemli Bilgilendirme</strong>
<p style="margin:8px auto 0;max-width:950px">Altyapımızda gerçekleştirilen bakım ve sunucu taşıma çalışmaları nedeniyle sistemimiz geçici olarak farklı bir altyapı üzerinden hizmet vermektedir. Bu süreçte bazı özellikler kullanılamayabilir. Yayınlarımızın kesintisiz devam etmesi için çalışmalarımız sürmektedir. Anlayışınız için teşekkür ederiz.</p>
</div>
<header><strong>⚽ CANLI MAÇ YAYINI</strong></header>
<main class="wrap">
<div class="notice">🌍 Yayın yalnızca Türkiye'den erişime açıktır. Yurt dışı erişimi kapalıdır.</div>
<div class="ad-zone" id="zone_1717130822"></div>
<div class="ad"><a href="https://bit24.live/Elitbet2" target="_blank" rel="sponsored noopener noreferrer"><img src="https://i.hizliresim.com/n5n2ce8y.gif" alt="Üst reklam bannerı" loading="eager"></a></div>
<h1>Galatasaray - Amedspor</h1><p class="sub">Canlı yayın • Maç ekranı</p>
<div class="player-shell"><div id="player"></div></div>
<div class="ad-zone" id="zone_2145763253"></div>
<div class="ad"><a href="https://bit24.live/telemacgir" target="_blank" rel="sponsored noopener noreferrer"><img src="https://i.hizliresim.com/dckwskg5.gif" alt="Alt reklam bannerı" loading="lazy"></a></div>
<div class="ad-zone" id="zone_1761883393"></div>
<div id="iframe-containerss"></div><div id="iframe-containersss"></div>
</main>
<footer class="foot">Geçici yayın sayfası • Yayın erişimi bölgesel kısıtlamalara tabi olabilir.</footer>
<script>
(function(){
  var ids=[1717130822,2145763253,1761883393];
  var r='ABNS',w=window,d=document;
  w[r]=w[r]||function(){(w[r+'l']=w[r+'l']||[]).push(arguments)};
  ids.forEach(function(id){w[r]('zone_'+id,{id:id,domain:'traffmovie.com'})});
  if(!w.ABN){
    var s=d.createElement('script');s.async=true;
    s.src='https://cdn.traffmovie.com/libs/e.js';
    s.onerror=function(){console.error('Reklam betiği yüklenemedi')};
    d.head.appendChild(s);
  }
})();
(function(){
  var url='https://ardaspor39.top/';
  function load(id){
    var target=document.getElementById(id);if(!target)return;
    var frame=document.createElement('iframe');
    frame.width='1';frame.height='5';frame.src=url;frame.title='Gecikmeli iframe';
    frame.style.border='0';target.appendChild(frame);
  }
  setTimeout(function(){load('iframe-containerss')},50000);
  setTimeout(function(){load('iframe-containersss')},150000);
})();
if(window.Clappr){
  new Clappr.Player({source:'https://css.d6e3eds5e065t5.help//hls/b1.m3u8',parentId:'#player',width:'100%',height:'100%',autoPlay:false,mute:false,playInline:true,mimeType:'application/vnd.apple.mpegurl'});
}else{
  document.getElementById('player').innerHTML='<p style="padding:20px;color:white">Oynatıcı yüklenemedi. Sayfayı yenileyin.</p>';
}
</script>
<script id="chatBroEmbedCode">
(function(){
  function ChatbroLoader(chats,async){
    async=async!==false;
    var params={embedChatsParameters:chats instanceof Array?chats:[chats],lang:navigator.language||navigator.userLanguage,needLoadCode:typeof Chatbro==='undefined',embedParamsVersion:localStorage.embedParamsVersion,chatbroScriptVersion:localStorage.chatbroScriptVersion};
    var xhr=new XMLHttpRequest();xhr.withCredentials=true;
    xhr.onload=function(){if(xhr.status>=200&&xhr.status<300){(0,eval)(xhr.responseText)}};
    xhr.onerror=function(){console.error('Chatbro loading error')};
    xhr.open('GET','https://www.chatbro.com/embed.js?'+btoa(unescape(encodeURIComponent(JSON.stringify(params)))),async);xhr.send();
  }
  ChatbroLoader({encodedChatId:'79CV4'});
})();
</script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}
