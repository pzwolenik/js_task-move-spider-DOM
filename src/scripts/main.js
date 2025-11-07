'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const borderOffset = (wall.offsetWidth - wall.clientWidth) / 2;

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  let targetX = e.clientX - wallRect.left - borderOffset - spiderWidth / 2;
  let targetY = e.clientY - wallRect.top - borderOffset - spiderHeight / 2;

  const isClickInsideWall =
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom;

  if (!isClickInsideWall) {
    return;
  }

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  targetX = Math.min(Math.max(0, targetX), maxX);
  targetY = Math.min(Math.max(0, targetY), maxY);

  spider.style.left = targetX + 'px';
  spider.style.top = targetY + 'px';
});
