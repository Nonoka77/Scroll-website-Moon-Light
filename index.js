'use strict' 
{
    (() => {
        const $stars = document.getElementById('stars');
        const $moon = document.getElementById('moon');
        const $mountains_behind = document.getElementById('mountains_behind');
        const $mountains_front = document.getElementById('mountains_front');
        const $text = document.getElementById('text');
        const $btn = document.getElementById('btn');
        const $header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;
            $stars.style.left = value * 0.2 + 'px';
            $moon.style.top = value * 1.2 + 'px';
            $mountains_behind.style.top = value * 0.5 + 'px';
            $mountains_front.style.top = value * 0 + 'px';
            $header.style.top = value * 0.5 + 'px';
            $text.style.marginRight = value * 4 + 'px';
            $text.style.marginTop = value *  1.05 + 'px';
            $btn.style.marginTop = value * 1.05 + 'px';
            
        });
    })();
}