import { duLieu } from './data/movies.js';

const dsPhimGoc = duLieu.data.map(p => ({
	id: p.id,
	ten: p.movieName,
	tap: `Episode ${p.episode}`,
	anh: `assets/${p.image}`,
	theloai: 'Anime',
	moTa: p.description
}));

// Phim hiển thị ở Explore (mặc định lấy Weather With You id=1)
let phimExplore = dsPhimGoc.find(p => p.id === '1') || dsPhimGoc[0];

// Danh sách New Release loại bỏ phim Explore
const dsPhim = dsPhimGoc.filter(p => p.id !== phimExplore.id);

const nutTim = document.getElementById('o-tim');
const luoi = document.getElementById('luoi-phim');
const heroAnh = document.getElementById('hero-anh');
const heroTieuDe = document.getElementById('hero-tieu-de');
const heroMoTa = document.getElementById('hero-mo-ta');

function taoThePhim(phim) {
	const the = document.createElement('article');
	the.className = 'phim';
	the.innerHTML = `
		<div class="phim-anh-wrap">
			<img class="phim-anh" src="${phim.anh}" alt="${phim.ten}">
			<div class="phim-overlay"></div>
			<div class="phim-tap">${phim.tap}</div>
		</div>
		<div class="phim-noi-dung">
			<div class="phim-ten">${phim.ten}</div>
			<div class="phim-phu"><span class="chip">${phim.theloai}</span></div>
		</div>
	`;
	the.addEventListener('click', () => {
		location.href = `detail.html?id=${phim.id}`;
	});
	return the;
}

function doLuoi(danhSach) {
	luoi.innerHTML = '';
	danhSach.forEach(p => {
		const the = taoThePhim(p);
		luoi.appendChild(the);
	});
}

function capNhatHero(p) {
	heroAnh.src = p.anh;
	heroAnh.alt = p.ten;
	heroTieuDe.textContent = p.ten;
	heroMoTa.textContent = p.moTa;
	const link = document.getElementById('hero-xem');
	if (link) link.href = `detail.html?id=${p.id}`;
}

capNhatHero(phimExplore);

doLuoi(dsPhim);

function locTheoTuKhoa(tuKhoa) {
	const tk = tuKhoa.trim().toLowerCase();
	if (!tk) return dsPhim;
	return dsPhim.filter(p => p.ten.toLowerCase().includes(tk) || p.theloai.toLowerCase().includes(tk));
}

let hen;
nutTim.addEventListener('input', () => {
	clearTimeout(hen);
	hen = setTimeout(() => {
		doLuoi(locTheoTuKhoa(nutTim.value));
	}, 120);
}); 