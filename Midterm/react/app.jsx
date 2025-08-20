const { useState, useEffect } = React;
const { HashRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

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
					<Link className="muc" to="/">Home</Link>
					<Link className="muc" to="/list">List anime</Link>
				</nav>
				<div className="o-tim-wrap">
					<input className="o-tim" placeholder="Search anime or movie" />
				</div>
			</div>
		</header>
	);
}

function Hero({ phim, to }) {
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
					{to ? <Link className="btn-xem" to={to}>View detail</Link> : null}
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

function CardPhimLink({ phim }) {
	return (
		<article className="phim" title={phim.movieName}>
			<Link to={`/detail/${phim.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
				<div className="phim-anh-wrap">
					<img className="phim-anh" src={`../assets/${phim.image}`} alt={phim.movieName} />
					<div className="phim-overlay"></div>
					<div className="phim-tap">Episode {phim.episode}</div>
				</div>
				<div className="phim-noi-dung">
					<div className="phim-ten">{phim.movieName}</div>
					<div className="phim-phu"><span className="chip">Anime</span></div>
				</div>
			</Link>
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

function HomePage() {
	const data = useDuLieu();
	const [chonPhim, setChonPhim] = useState(null);
	useEffect(() => { if (data.length && !chonPhim) setChonPhim(data[0]); }, [data]);
	const dsRelease = chonPhim ? data.filter(p => p.id !== chonPhim.id) : data;
	return (
		<>
			<Hero phim={chonPhim} to={chonPhim ? `/detail/${chonPhim.id}` : null} />
			{dsRelease.length ? <DanhSachPhim ds={dsRelease} onChon={setChonPhim} /> : null}
		</>
	);
}

function ListPage() {
	const data = useDuLieu();
	const [q, setQ] = useState('');
	const ds = q.trim()
		? data.filter(p => (p.movieName || '').toLowerCase().includes(q.toLowerCase()))
		: data;
	return (
		<main className="noi-dung">
			<h2 className="td-muc">List anime</h2>
			<div style={{ margin: '0 0 16px 0' }}>
				<input className="o-tim" value={q} onChange={e => setQ(e.target.value)} placeholder="Search anime or movie" />
			</div>
			<div className="luoi-phim">
				{ds.map(p => (
					<CardPhimLink key={p.id} phim={p} />
				))}
			</div>
		</main>
	);
}

function DetailPage() {
	const { id } = useParams();
	const data = useDuLieu();
	const phim = data.find(p => p.id === id) || data[0];
	const list = data.slice(0, 6);
	if (!phim) return null;
	return (
		<main className="noi-dung">
			<h2 className="td-muc">{phim.movieName} - Episode {phim.episode}</h2>
			<div className="ct-grid">
				<section className="ct-left">
					<div className="video">
						<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="player" frameBorder="0" allowFullScreen></iframe>
					</div>
					<div className="ct-thongtin">
						<div className="ct-poster">
							<img src={`../assets/${phim.image}`} alt={phim.movieName} />
						</div>
						<ul className="ct-meta">
							<li><strong>Type:</strong> Tv</li>
							<li><strong>Status:</strong> Ongoing</li>
							<li><strong>Studios:</strong> Toei Animation</li>
							<li><strong>Duration:</strong> 24 min</li>
							<li><strong>Genres:</strong> Action, Adventure, Fantasy</li>
						</ul>
					</div>
					<section className="ct-synopsis">
						<h3>Synopsis</h3>
						<p>{phim.description}</p>
					</section>
				</section>
				<aside className="ct-right">
					<h3 className="td-muc">Popular Anime</h3>
					<div className="popular-grid">
						{list.map(p => (
							<Link key={p.id} to={`/detail/${p.id}`} className="pop-item">
								<img src={`../assets/${p.image}`} alt={p.movieName} />
							</Link>
						))}
					</div>
				</aside>
			</div>
		</main>
	);
}

function App() {
	return (
		<HashRouter>
			<DauTrang />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/list" element={<ListPage />} />
				<Route path="/detail/:id" element={<DetailPage />} />
			</Routes>
		</HashRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 