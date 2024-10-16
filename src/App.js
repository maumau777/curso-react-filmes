import './App.css';

const filmes = {
  Search: [
    {
      Title: "Planeta dos Macacos",
      Year: "2001",
      Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3QSLZDwtG8tAEi5SJBGZx7zcWBhN3yfiHA&s",
    },
    {
      Title: "Interestelar",
      Year: "2014",
      Poster: "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
    },
    {
      Title: "Duna",
      Year: "2021",
      Poster: "https://br.web.img3.acsta.net/pictures/21/09/29/20/10/5897145.jpg",
    },
    {
      Title: "Blade Runner 2049",
      Year: "2017",
      Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULg0bRpsDk732SdPG1xim5QAKgadPNQS4KQ&s",
    },
    {
      Title: "X-Men - O Filme",
      Year: "2000",
      Poster: "https://br.web.img3.acsta.net/medias/nmedia/18/91/08/56/20128632.jpg",
    },
  ]
}

function App() {
  return (
    <div className="App">
      <div className="boxFilmes">
        <h2>Buscar Filmes</h2>
        <form>
          <input placeholder="Digite o nome do filme..."/>
          <button type="submit">Buscar</button>
        </form>
        <div className="filmesGrid">
          {filmes.Search.map((filme) => (
            <div className="filmesCard">
              <h3>{filme.Title}</h3>
              <img src={filme.Poster} />
              <p>Ano: {filme.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
