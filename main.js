import './style.css';

// document.querySelector('#app').innerHTML = /*html*/`
// `;

const gogglestxt = document.querySelector('#goggles');
const gogglesimg = document.querySelector('#img-goggles');
const daytimeel = document.querySelector('#daytime');
const mybutton = document.getElementById('goTop');
let lastScrollTop = 0;

window.addEventListener('resize', checkViewportWidth);

window.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop < lastScrollTop && scrollTop > 100) {
		mybutton.style.opacity = 1;
	} else {
		mybutton.style.opacity = 0;
	}
	lastScrollTop = scrollTop;
});

mybutton.addEventListener('click', ScrollToTop);

window.addEventListener('scroll', () => {
	document.querySelector('.scroll').style.display = 'none';
});

gogglestxt.addEventListener('mouseover', () => {
	gogglesimg.style.transform = 'translateX(0px)';
});

gogglestxt.addEventListener('mouseleave', () => {
	gogglesimg.removeAttribute('style');
});

document.getElementById('cards').onmousemove = (e) => {
	for (const card of document.getElementsByClassName('card')) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty('--mouse-x', `${x}px`);
		card.style.setProperty('--mouse-y', `${y}px`);
	}
};

function setTime() {
	let now = new Date();
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let dayOfWeek = days[now.getDay()];
	let day = now.getDate();
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let month = months[now.getMonth()];
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
	let formattedDay = dayOfWeek + ', ' + day + ' ' + month;
	daytimeel.innerHTML = formattedDay + ' ' + formattedTime;
}

function checkViewportWidth() {
	var viewportWidth = window.innerWidth;
	if (viewportWidth < 1380) {
		document.getElementById('warning-sign').style.display = 'flex';
	} else {
		document.getElementById('warning-sign').style.display = 'none';
	}
}

function ScrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	  });
}

setInterval(setTime, 10000);

setTime();
checkViewportWidth();
