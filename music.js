const music = new Audio('audio/1.mp3');

const songs = [
    {
        id: '1',
        songName: ` À lôi <br>
        <div class="subtitle">Double2T</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: ` Một ngày chẳng nắng <br>
        <div class="subtitle">Phao</div>`,
        poster: "img/2.jpg"
    },
    {
        id: '3',
        songName: ` Ngủ một mình <br>
        <div class="subtitle">HIEUTHUHAI</div>`,
        poster: "img/3.jpg"
    },
    {
        id: '4',
        songName: ` See tình <br>
        <div class="subtitle">Hoàng Thùy Linh</div>`,
        poster: "img/4.jpg"
    },
    {
        id: '5',
        songName: ` Waiting For You <br>
        <div class="subtitle">Mono</div>`,
        poster: "img/5.jpg"
    },
    {
        id: '6',
        songName: ` Nàng thơ <br>
        <div class="subtitle">Hoàng Dũng</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '7',
        songName: ` Tại vì sao <br>
        <div class="subtitle">MCK</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '8',
        songName: ` Chuyện rằng 1 <br>
        <div class="subtitle">Thịnh Suy</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '9',
        songName: ` Mưa tháng sáu <br>
        <div class="subtitle">Văn Mai Hương</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '10',
        songName: ` Vũ trụ có anh <br>
        <div class="subtitle">Phương Mỹ Chi</div>`,
        poster: "img/10.jpg"
    },
    {
        id: '11',
        songName: ` Bên trên tầng lầu <br>
        <div class="subtitle">Tăng Duy Tân</div>`,
        poster: "img/11.jpg"
    },
    {
        id: '12',
        songName: ` Chìm sâu <br>
        <div class="subtitle">MCK </div>
        <div class="subtitle">Trung Trần </div>`,
        poster: "img/12.jpg"
    },
    {
        id: '13',
        songName: ` Yêu anh đi mẹ anh bán bánh mì <br>
        <div class="subtitle">Phúc Du</div>`,
        poster: "img/13.jpg"
    },
    {
        id: '14',
        songName: ` Tình đắng như cà phê <br>
        <div class="subtitle">nân</div>
        <div class="subtitle">Ngơ</div>`,
        poster: "img/14.jpg"
    },
    {
        id: '15',
        songName: ` Hai mươi hai (22) <br>
        <div class="subtitle">Amee</div>`,
        poster: "img/15.jpg"
    },
    {
        id: '16',
        songName: ` Hương <br>
        <div class="subtitle">Văn Mai Hương</div>`,
        poster: "img/16.jpg"
    },
    {
        id: '17',
        songName: ` Gió (Lofi) <br>
        <div class="subtitle">Jank</div>
        <div class="subtitle">1 9 6 7</div>`,
        poster: "img/17.jpg"
    },
    {
        id: '18',
        songName: ` Không yêu xin đừng nói (Speed Up) <br>
        <div class="subtitle">UMIE</div>`,
        poster: "img/18.jpg"
    },
    {
        id: '19',
        songName: ` Bân ơi <br>
        <div class="subtitle">Myra Trần</div>`,
        poster: "img/19.jpg"
    },
    {
        id: '20',
        songName: ` Ta cười vào mặt ta đấy <br>
        <div class="subtitle">Long Nón Lá</div>`,
        poster: "img/20.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster; //đổi hình bài nhạc tương ứng
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName; //đổi tên bái nhạc tương ứng
})

let play = document.getElementById('play');

//setting nút play
play.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        play.classList.remove('bi-play-circle-fill');
        play.classList.add('bi-pause-circle-fill');

    } else {
        music.pause();
        play.classList.add('bi-play-circle-fill');
        play.classList.remove('bi-pause-circle-fill');

    }
} )

const allPlay = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}

const background = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;

let dic = document.getElementById('dic') //hình bài nhạc đang chạy
let title = document.getElementById('title') //tên bài nhạc đang chạy

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) =>{
        index = e.target.id;
        allPlay(); //chỉ bài nhạc đang chạy mới có nút =
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`; 
        dic.src =`img/${index}.jpg`;
        music.play();

        // đổi hình bài hát đang chạy
        let songTitle = songs.filter((el) =>{
            return el.id == index;
        })
        //đổi thành tên bài nhạc đang chạy
        songTitle.forEach(el =>{
            let {songName} = el;
            title.innerHTML = songName;
        })

        //chuyển đổi nút play theo bài nhạc đang chạy
        play.classList.remove('bi-play-circle-fill');
        play.classList.add('bi-pause-circle-fill');
        music.addEventListener('ended', ()=>{
            play.classList.add('bi-play-circle-fill');
            play.classList.remove('bi-pause-circle-fill');
        })
        //background bài đang chạy
        background();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

let start = document.getElementById('Start');
let end = document.getElementById('End');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>{
    let curr = music.currentTime; //time hiện tại nhạc đang chạy
    let dur = music.duration;   //tổng time của 1 bài nhạc

    let min = Math.floor(dur/60);
    let sec = Math.floor(dur%60);

    if(sec < 10){
        sec = `0${sec}`;
    }
    end.innerText = `${min}:${sec}`

    let min1 = Math.floor(curr/60);
    let sec1 = Math.floor(curr%60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    start.innerText = `${min1}:${sec1}`

    //thanh chạy nhạc
    let bar = parseInt((music.currentTime/music.duration)*100);
    seek.value = bar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

//chọn khoảng nhạc muốn chạy
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', ()=>{
    index++; // Tăng chỉ số bài nhạc
    if (index > songs.length) {
        index = 1; // Quay lại bài đầu tiên nếu đã chạy hết danh sách
    }

    // Cập nhật thông tin bài nhạc mới
    music.src = `audio/${index}.mp3`;
    dic.src = `img/${index}.jpg`;

    // Cập nhật tên bài nhạc mới
    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach((el) => {
        let { songName } = el;
        title.innerHTML = songName;
    });

    play.classList.add('bi-play-circle-fill');
    play.classList.remove('bi-pause-circle-fill');

    music.play();

    // Đặt background cho bài nhạc đang chạy
    background();

    // Đặt background cho mục chứa bài nhạc đang chạy trong danh sách
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 170, .1)";
    
})

let volume = document.getElementById('volume');
let vol = document.getElementById('vol')
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

window.addEventListener('load', function () {
    // Lấy phần tử thanh âm lượng
    let vol = document.getElementById('vol');

    // Đặt giá trị của thanh âm lượng thành max volume (100)
    vol.value = 100;

    // Triggers sự kiện change để cập nhật giao diện
    let changeEvent = new Event('change');
    vol.dispatchEvent(changeEvent);
});



vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        volume.classList.remove('bi-volume-down');
        volume.classList.add('bi-volume-mute');
        volume.classList.remove('bi-volume-up');
    }

    if(vol.value > 0){
        volume.classList.add('bi-volume-down');
        volume.classList.remove('bi-volume-mute');
        volume.classList.remove('bi-volume-up');
    }

    if(vol.value > 50){
        volume.classList.add('bi-volume-down');
        volume.classList.remove('bi-volume-mute');
        volume.classList.add('bi-volume-up');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

//tới lùi nhạc
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`; 
    dic.src =`img/${index}.jpg`;
    music.play();

    // đổi hình bài hát đang chạy
    let songTitle = songs.filter((el) =>{
        return el.id == index;
    })
    //đổi thành tên bài nhạc đang chạy
    songTitle.forEach(el =>{
        let {songName} = el;
            title.innerHTML = songName;
    })

    allPlay();
    //chuyển đổi nút play theo bài nhạc đang chạy
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');

    background();

    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})

next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`; 
    dic.src =`img/${index}.jpg`;
    music.play();

    // đổi hình bài hát đang chạy
    let songTitle = songs.filter((el) =>{
        return el.id == index;
    })
    //đổi thành tên bài nhạc đang chạy
    songTitle.forEach(el =>{
        let {songName} = el;
            title.innerHTML = songName;
    })

    allPlay();
    //chuyển đổi nút play theo bài nhạc đang chạy
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');

    background();

    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})

//scroll thanh 'Phổ biến'
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let popular_song = document.getElementsByClassName('popular_song')[0];

left_scroll.addEventListener('click', () => {
    popular_song.scrollLeft -= 330;
});

right_scroll.addEventListener('click', () => {
    popular_song.scrollLeft += 330;
});

//scroll thanh "ca sĩ"
let left_scroll_singer = document.getElementById('left_scroll_singer');
let right_scroll_singer = document.getElementById('right_scroll_singer');
let itemSinger = document.getElementsByClassName('itemSinger')[0];

left_scroll_singer.addEventListener('click', () => {
    itemSinger.scrollLeft -= 330;
});

right_scroll_singer.addEventListener('click', () => {
    itemSinger.scrollLeft += 330;
});


    