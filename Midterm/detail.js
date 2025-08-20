import { duLieu } from './data/movies.js';

function qs(name){
	const u = new URL(location.href);
	return u.searchParams.get(name);
}

const id = qs('id') || '1';
const data = duLieu.data.map(p => ({
	...p,
	image: `assets/${p.image}`,
	type: 'Tv',
	status: 'Ongoing',
	studio: 'Toei Animation',
	duration: '24 min',
	genres: 'Action, Adventure, Fantasy',
	video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}));

const phim = data.find(p => p.id === id) || data[0];

document.getElementById('ct-tieu-de').textContent = `${phim.movieName} - Episode ${phim.episode}`;
document.getElementById('ct-video').src = phim.video;
document.getElementById('ct-poster').src = phim.image;
document.getElementById('ct-type').textContent = phim.type;
document.getElementById('ct-status').textContent = phim.status;
document.getElementById('ct-studio').textContent = phim.studio;
document.getElementById('ct-duration').textContent = phim.duration;
document.getElementById('ct-genres').textContent = phim.genres;
document.getElementById('ct-sum').textContent = phim.description;

const popularBox = document.getElementById('ct-popular');
popularBox.innerHTML = '';
data.slice(0,6).forEach(p => {
	const a = document.createElement('a');
	a.href = `detail.html?id=${p.id}`;
	a.className = 'pop-item';
	a.innerHTML = `<img src="${p.image}" alt="${p.movieName}">`;
	popularBox.appendChild(a);
}); 