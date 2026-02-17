const audio = new Audio();
let isPlaying = false;
let currentTrackIndex = 0;

const tracks = [
    { name: 'Скриптонит Чистый', icon: './img/1.jpg', source: './music/Скриптонит - Чистый.mp3' },
    { name: 'Скриптонит Вечеринка', icon: './img/22.jpg', source: './music/Скриптонит - Вечеринка.mp3' },
    { name: 'Скриптонит feat. Andy Panda, 104 Привычка', icon: './img/10.jpg', source: './music/Скриптонит feat. Andy Panda, 104 - Привычка.mp3' },
    { name: 'Imagine Dragons Enemy', icon: 'img/19.jpg', source: './music/Imagine Dragons - Enemy.mp3' },
    { name: 'Imagine Dragons Believer', icon: 'img/2.jpg', source: './music/Imagine Dragons - Believer.mp3' },
    { name: "Imagine Dragons Demons", icon: 'img/27.jpg', source: './music/Imagine Dragons - Demons.mp3' },
    { name: "The Hatters Город поёт", icon: 'img/18.jpg', source: './music/The Hatters - Город поёт.mp3' },
    { name: "The Hatters Просто Проваливай", icon: 'img/24.jpg', source: './music/The Hatters - Просто Проваливай.mp3' },
    { name: "The Hatters Да, со мной не просто", icon: 'img/23.jpg', source: './music/The Hatters - Да, со мной не просто.mp3' },
    { name: "Eminem Gnat", icon: 'img/32.jpg', source: './music/Eminem - Gnat.mp3' },
    { name: "Eminem Business", icon: 'img/15.jpg', source: './music/Eminem - Business.mp3' },
    { name: "Eminem The Real Slim Shady", icon: 'img/3.jpg', source: './music/Eminem - The Real Slim Shady.mp3' },
    { name: "The Weeknd Blinding Lights", icon: 'img/6.png', source: './music/The Weeknd - Blinding Lights.mp3' },
    { name: "The Weeknd False Alarm", icon: 'img/11.webp', source: './music/The Weeknd - False Alarm.mp3' },
    { name: "The Weeknd Heartless", icon: 'img/13.jpg', source: './music/The Weeknd - Heartless.mp3' },
    { name: "Travis Scott Antidote", icon: 'img/30.jpg', source: './music/Travis Scott - Antidote.mp3' },
    { name: "Travis Scott Drugs You Should Try", icon: 'img/16.jpg', source: './music/Travis Scott - Drugs You Should Try.mp3' },
    { name: "Kanye West Heartless", icon: 'img/12.avif', source: './music/Kanye West - Heartless.mp3' },
    { name: "Kanye West Stronger", icon: 'img/28.png', source: './music/Kanye West - Stronger.mp3' },
    { name: "Kanye West, Jay-Z Niggas in Paris", icon: 'img/4.jpg', source: './music/Kanye West, Jay-Z - Niggas in Paris.mp3' },
    { name: "Макс Корж Малый повзрослел", icon: 'img/14.jpg', source: './music/Макс Корж - Малый повзрослел.mp3' },
    { name: "Макс Корж Малиновый закат", icon: 'img/20.jpg', source: './music/Макс Корж - Малиновый закат.mp3' },
    { name: "Макс Корж Пьяный дождь", icon: 'img/31.jpg', source: './music/Макс Корж - Пьяный дождь.mp3' },
    { name: "MiyaGi Корабли", icon: 'img/5.jpg', source: './music/Miyagi - Корабли.mp3' },
    { name: "MiyaGi Косандра", icon: 'img/5.jpg', source: './music/Miyagi - Косандра.mp3' },
    { name: "MiyaGi Captain", icon: 'img/5.jpg', source: './music/Miyagi - Капитан.mp3' },
    { name: "pyrokinesis Ничего святого", icon: 'img/25.jpg', source: './music/Pyrokinesis - Ничего святого.mp3' },
    { name: "pyrokinesis Восток моей юности", icon: 'img/21.jpg', source: './music/Pyrokinesis - Восток моей юности.mp3' },
    { name: "pyrokinesis Я приду к тебе с клубникой в декабре", icon: 'img/26.jpg', source: './music/Pyrokinesis - Я приду к тебе с клубникой в декабре.mp3' }
];

const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackIcon = document.getElementById('track-icon');
const trackName = document.getElementById('track-name');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');

const musicTextBtn = document.getElementById('musicText');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.source;
    trackIcon.src = track.icon;
    trackName.textContent = track.name;
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;

    playPauseBtn.innerHTML = isPlaying
        ? '<i class="fas fa-circle-pause" style="color: #fff;"></i>'
        : '<i class="fas fa-circle-play" style="color: #fff;"></i>';
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function updateProgressBar() {
    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextTrack);
prevBtn.addEventListener('click', playPrevTrack);

audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', playNextTrack);

volumeControl.addEventListener('input', function () {
    audio.volume = volumeControl.value / 100;
});

loadTrack(currentTrackIndex);
