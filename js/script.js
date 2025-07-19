        AOS.init({
            duration: 3000,
            once: true,
        });

        const countdown = () => {
            const countDate = new Date('September 25, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const gap = countDate - now;

            if (gap > 0) {
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;

                const textDay = Math.floor(gap / day);
                const textHour = Math.floor((gap % day) / hour);
                const textMinute = Math.floor((gap % hour) / minute);
                const textSecond = Math.floor((gap % minute) / second);

                document.getElementById('days').innerText = String(textDay).padStart(2, '0');
                document.getElementById('hours').innerText = String(textHour).padStart(2, '0');
                document.getElementById('minutes').innerText = String(textMinute).padStart(2, '0');
                document.getElementById('seconds').innerText = String(textSecond).padStart(2, '0');
            }
        };
        setInterval(countdown, 1000);

        const music = document.getElementById('background-music');
        const playPauseBtn = document.getElementById('play-pause-btn');
        let isMusicPlaying = false;

        function toggleMusic() {
            if (isMusicPlaying) {
                music.pause();
            } else {
                music.play().catch(err => console.error('Error playing audio:', err));
            }
            isMusicPlaying = !isMusicPlaying;
            playPauseBtn.innerHTML = isMusicPlaying ? '⏸️' : '▶️';
        }

        document.querySelector('.hero-button').addEventListener('click', () => {
            if (!isMusicPlaying) {
                toggleMusic();
            }
        });

        playPauseBtn.addEventListener('click', toggleMusic);

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Nomor berhasil disalin!');
            }).catch(err => {
                console.error('Gagal menyalin teks: ', err);
            });
        }
