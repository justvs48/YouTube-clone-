const videos=[
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-2.webp',
        name:'Try Not To Laugh Challenge #9',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-2.jpeg',
        ytName:'Markiplier',
        ytViews:'19M views · 4 years ago'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-3.webp',
        name:'Crazy Tik Toks Taken Moments Before DISASTER',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-3.jpeg',
        ytName:'SSSniperWolf',
        ytViews:'19M views · 4 years ago'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-1.webp',
        name:'Talking Tech and AI with Google CEO Sundar Pichai!',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-1.jpeg',
        ytName:'Marques Brownlee',
        ytViews:'3.4M views · 6 months ago'      
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-1.webp',
        name:'Talking Tech and AI with Google CEO Sundar Pichai!',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-1.jpeg',
        ytName:'Marques Brownlee',
        ytViews:'3.4M views · 6 months ago'      
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-1.webp',
        name:'Talking Tech and AI with Google CEO Sundar Pichai!',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-1.jpeg',
        ytName:'Marques Brownlee',
        ytViews:'3.4M views · 6 months ago'      
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-1.webp',
        name:'Talking Tech and AI with Google CEO Sundar Pichai!',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-1.jpeg',
        ytName:'Marques Brownlee',
        ytViews:'3.4M views · 6 months ago'      
    }
]

vshtml='';
videos.forEach(function(vid) {
    vshtml+=`
    <div class="video">
        <div class="thumbnail"><img src="${vid.thumbnail}"></div>
        <div class="video-details">
            <div class="video-owner"><img src="${vid.ytprofile}"></div>
            <div class="video-data">
                <p class="video-name">
                    ${vid.name}
                </p>
                <p class="video-channel">${vid.ytName}</p>
                <p class="video-views">${vid.ytViews}</p>
            </div>
        </div>
    </div>`
            
});

document.querySelector('.all-videos').innerHTML=vshtml;

