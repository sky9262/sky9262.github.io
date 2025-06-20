const walkFrames = [
    'https://r2.flowith.net/files/o/1750406152900-stylized_japanese_bobtail_cat_walk_cycle_frame_index_0@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406156448-japanese_bobtail_cat_walk_cycle_frame_index_1@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406185856-stylized_japanese_bobtail_cat_walk_cycle_frame_index_2@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406155655-japanese_bobtail_cat_walk_cycle_frame_index_3@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406151060-japanese_bobtail_cat_walk_cycle_frame_index_4@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406155238-stylized_japanese_bobtail_cat_walk_cycle_frame_index_5@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406161222-japanese_bobtail_cat_walk_cycle_frame_index_6@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406153995-japanese_bobtail_cat_walk_cycle_frame_index_7@1024x1024.png'
];

const idleFrames = [
    'https://r2.flowith.net/files/o/1750406171527-japanese_bobtail_cat_idle_animation_frame_index_8@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406155011-cat_idle_animation_frame_sumi-e_style_index_9@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406153373-cat_licking_shoulder_sumi-e_style_animation_frame_index_10@1024x1024.png',
    'https://r2.flowith.net/files/o/1750406154857-cat_idle_animation_final_frame_in_sumi-e_style_index_11@1024x1024.png'
];

let catImgElement;
let currentWalkFrame = 0;
let currentIdleFrame = 0;
let scrollTimeout;
let animationInterval;
let isScrolling = false;

function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

function stopAnimation() {
    clearInterval(animationInterval);
    animationInterval = null;
}

function startIdleAnimation() {
    stopAnimation();
    isScrolling = false;
    catImgElement.src = idleFrames[currentIdleFrame];
    animationInterval = setInterval(() => {
        currentIdleFrame = (currentIdleFrame + 1) % idleFrames.length;
        catImgElement.src = idleFrames[currentIdleFrame];
    }, 400);
}

function startWalkAnimation() {
    stopAnimation();
    catImgElement.src = walkFrames[currentWalkFrame];
    animationInterval = setInterval(() => {
        currentWalkFrame = (currentWalkFrame + 1) % walkFrames.length;
        catImgElement.src = walkFrames[currentWalkFrame];
    }, 100);
}

export function initCatAnimation() {
    catImgElement = document.getElementById('cat-animation-img');
    if (!catImgElement) {
        console.error('Cat animation element not found.');
        return;
    }

    preloadImages([...walkFrames, ...idleFrames]);

    startIdleAnimation();

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            startWalkAnimation();
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            startIdleAnimation();
        }, 250);
    }, { passive: true });
}
