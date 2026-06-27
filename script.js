function runAway(){
    let btn=document.getElementById("noBtn");

    btn.style.position="absolute";
    btn.style.left=Math.random()*80+"%";
    btn.style.top=Math.random()*80+"%";
}

function forgive(){
    document.body.innerHTML=`
    <div style="padding-top:100px;">
        <h1>🥳 Friendship Saved!</h1>
        <h2>Thank You Diksha ❤️</h2>
        <img src="dance.gif" width="350">
    </div>`;
}