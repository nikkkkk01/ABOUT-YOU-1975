document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is running");
    const audio = document.getElementById('audio');
    const lyricsContainer = document.getElementById('lyrics');

    const lyrics = [
    {time: 0, text: "DO U THINK..."},
    {time: 2, text: "I HAVE"},
    {time: 3, text: "FORGOTTEN?"},
    {time: 5, text: "DO U THINK..."},
    {time: 7, text: "I HAVE"},
    {time: 8, text: "FORGOTTEN?"},
    {time: 10, text: "DO U THINK..."},
    {time: 12, text: "I HAVE"},
    {time: 13, text: "FORGOTTEN?"},
    {time: 15, text: "ABOUT YOU..."},
    {time: 21, text: "THERE WAS SOMETHING 'BOUT YOU"},
    {time: 23, text: "THAT NOW I CAN'T REMEMBER"},
    {time: 25, text: "IT'S THE SAME DAMN THING"},
    {time: 28, text: "THAT MADE MY HEART SURRENDER"},
    {time: 31, text: "AND I MISS YOU ON A TRAIN"},
    {time: 33, text: "I MISS YOU IN THE MORNING"},
    {time: 35, text: "I..."},
    {time: 37, text: "NEVER KNOW WHAT TO THINK ABOUT"},
    {time: 40, text: "I THINK ABOUT.."},
    {time: 41, text: "YOU...🫵🫵🫵"},
    ];

    function createLyricElements() {
        lyrics.forEach((lyric, index) => {
            const p = document.createElement('p');
            p.textContent = lyric.text;
            p.classList.add('lyric-line');
            p.id = `lyric-${index}`;
            lyricsContainer.appendChild(p);
        });
    }

    function updateLyrics() {
        const currentTime = audio.currentTime;
        lyrics.forEach((lyric, index) => {
            const lyricElement = document.getElementById(`lyric-${index}`);
            if (currentTime >= lyric.time && (index === lyrics.length - 1 || currentTime < lyrics[index + 1].time)) {
                lyricElement.classList.add('active');
            } else {
                lyricElement.classList.remove('active');
            }
        });
    }

    createLyricElements();
    audio.addEventListener('timeupdate', updateLyrics);
});