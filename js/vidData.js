const videos=[
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-2.webp',
        name:'Try Not To Laugh Challenge #9',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-2.jpeg',
        ytName:'Markiplier',
        ytViews:'19M views · 4 years ago'
        ,timeStamp:'14:50',
        vidLink:'https://www.youtube.com/watch?v=n2RNcPRtAiY'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-3.webp',
        name:'Crazy Tik Toks Taken Moments Before DISASTER',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-3.jpeg',
        ytName:'SSSniperWolf',
        ytViews:'19M views · 4 years ago'
        ,timeStamp:'14:50'
        ,
        vidLink:'https://www.youtube.com/watch?v=FgjPQQeTh1w'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-1.webp',
        name:'Talking Tech and AI with Google CEO Sundar Pichai!',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-1.jpeg',
        ytName:'Marques Brownlee',
        ytViews:'3.4M views · 6 months ago'  
        ,timeStamp:'14:50'    
        ,
        vidLink:'https://www.youtube.com/watch?v=FgjPQQeTh1w'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-4.webp',
        name:'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-4.jpeg',
        ytName:'Veritasium',
        ytViews:'3.4M views · 6 months ago' 
        ,timeStamp:'14:50'     
        ,
        vidLink:'https://www.youtube.com/watch?v=86CQq3pKSUw'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-5.webp',
        name:`Kadane's Algorithm to Maximum Sum Subarray Problem`,
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-5.jpeg',
        ytName:'Cs Dojo',
        ytViews:'3.4M views · 6 months ago'  
        ,timeStamp:'14:50'    
        ,
        vidLink:'https://www.youtube.com/watch?v=n2RNcPRtAiY'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-6.webp',
        name:`Anything You Can Fit In The Circle I’ll Pay For`,
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-6.jpeg',
        ytName:'Marques Brownlee',
        ytViews:'3.4M views · 6 months ago'  
        ,timeStamp:'14:50'    
        ,
        vidLink:'https://www.youtube.com/watch?v=n2RNcPRtAiY'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-7.webp',
        name:`Why Planes Don't Fly Over Tibet`,
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-7.jpeg',
        ytName:'RealLifeLore',
        ytViews:'3.4M views · 6 months ago'  
        ,timeStamp:'14:50'    
        ,
        vidLink:'https://www.youtube.com/watch?v=n2RNcPRtAiY'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-8.webp',
        name:`Inside The World's Biggest Passenger Plane`,
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-8.jpeg',
        ytName:'Marques Brownlee',
        ytViews:'3.4M views · 6 months ago'  
        ,timeStamp:'14:50'    
        ,
        vidLink:'https://www.youtube.com/watch?v=n2RNcPRtAiY'
    },
    {
        thumbnail:'https://supersimple.dev/public/img/exercises/youtube/thumbnails/thumbnail-9.webp',
        name:'The SECRET to Super Human STRENGTH',
        ytprofile:'https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-9.jpeg',
        ytName:'Tech Vision',
        ytViews:'3.4M views · 6 months ago'    
        ,timeStamp:'14:50'  
        ,
        vidLink:'https://www.youtube.com/watch?v=n2RNcPRtAiY'
    }
]

vshtml='';
videos.forEach(function(vid) {
    vshtml+=`
    <div class="video">
        <a href='${vid.vidLink}'>
            <div class="thumbnail">
                <div class="time-stamp">${vid.timeStamp}</div>
                <img src="${vid.thumbnail}">
            </div>
        </a>
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

