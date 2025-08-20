const { useState, useEffect } = React;

// Lấy dữ liệu từ module ESM thông qua window (được gán bởi script inline phía dưới),
// hoặc fallback tự import động khi chạy qua Babel/UMD.
function useDuLieu() {
	const [ds, setDs] = useState([]);
	useEffect(() => {
		if (window.duLieu && window.duLieu.data) {
			setDs(window.duLieu.data);
			return;
		}
		(async () => {
			try {
				const mod = await import('../data/movies.js');
				setDs(mod.duLieu.data);
			} catch {}
		})();
	}, []);
	return ds;
}

function DauTrang() {
	return (
		<header className="dau-trang">
			<div className="khung-nav">
				<div className="logo">Anonime</div>
				<nav className="menu">
					<a className="muc" href="#">Home</a>
					<a className="muc" href="#">List anime</a>
				</nav>
				<div className="o-tim-wrap">
					<input className="o-tim" placeholder="Search anime or movie" />
				</div>
			</div>
		</header>
	);
}

function Hero({ phim }) {
	if (!phim) return null;
	return (
		<section className="kham-pha">
			<h2 className="td-muc">Explore</h2>
			<p className="phu-de">What are you gonna watch today ?</p>
			<div className="hero">
				<img className="hero-anh" src={`../assets/${phim.image}`} alt={phim.movieName} />
				<div className="hero-phu"></div>
				<div className="hero-nd">
					<h3 className="hero-tieu-de">{phim.movieName}</h3>
					<p className="hero-mo-ta">{phim.description}</p>
				</div>
			</div>
		</section>
	);
}

function ThePhim({ phim, onChon }) {
	return (
		<article className="phim" onClick={() => onChon(phim)} title={phim.movieName}>
			<div className="phim-anh-wrap">
				<img className="phim-anh" src={`../assets/${phim.image}`} alt={phim.movieName} />
				<div className="phim-overlay"></div>
				<div className="phim-tap">Episode {phim.episode}</div>
			</div>
			<div className="phim-noi-dung">
				<div className="phim-ten">{phim.movieName}</div>
				<div className="phim-phu"><span className="chip">Anime</span></div>
			</div>
		</article>
	);
}

function DanhSachPhim({ ds, onChon }) {
	return (
		<section className="phat-hanh">
			<h2 className="td-muc">New Release</h2>
			<div className="luoi-phim">
				{ds.map(p => (
					<ThePhim key={p.id} phim={p} onChon={onChon} />
				))}
			</div>
		</section>
	);
}

function App() {
	const data = useDuLieu();
	const [chonPhim, setChonPhim] = useState(null);

	useEffect(() => {
		if (data.length && !chonPhim) setChonPhim(data[0]);
	}, [data]);

	const dsRelease = chonPhim ? data.filter(p => p.id !== chonPhim.id) : data;

	return (
		<>
			<DauTrang />
			<main className="noi-dung">
				<Hero phim={chonPhim} />
				{dsRelease.length ? (
					<DanhSachPhim ds={dsRelease} onChon={setChonPhim} />
				) : null}
			</main>
		</>
	);
}

const goc = ReactDOM.createRoot(document.getElementById('root'));
goc.render(<App />); 