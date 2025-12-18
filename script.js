document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const mainContent = document.getElementById('main-content');
    const fnafContainer = document.getElementById('fnaf-container');
    const fnacContainer = document.getElementById('fnac-container');
    const introText = document.querySelector('.intro p');

    let isFnafVisible = true;
    let isAnimating = false;

    // Ensure initial state
    fnacContainer.classList.add('hidden');

    logo.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        // 1. Fade out EVERYTHING
        mainContent.classList.add('fade-out');

        setTimeout(() => {
            // 2. Perform the swap while invisible
            if (isFnafVisible) {
                // Switch to FNAC
                fnafContainer.classList.add('hidden');
                fnacContainer.classList.remove('hidden');

                logo.src = './scr/images/fnac.png';
                introText.innerHTML = '<b>Click to change back to Five Nights at Freddy\'s</b>';

                isFnafVisible = false;
            } else {
                // Switch back to FNAF
                fnacContainer.classList.add('hidden');
                fnafContainer.classList.remove('hidden');

                logo.src = './scr/images/fnaf.png';
                introText.innerHTML = '<b>Click to change to Five Nights at Candy\'s</b>';

                isFnafVisible = true;
            }

            // Force reflow/scrollTo top if needed (optional)
            // window.scrollTo(0,0); 

            // 3. Fade in EVERYTHING
            mainContent.classList.remove('fade-out');

            setTimeout(() => {
                isAnimating = false;
            }, 500);

        }, 500); // Wait for fade out
    });
});
