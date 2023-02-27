import { useSelector } from "react-redux"

const AlbumDisplay = (props) => {
  const albumId = props.albumId
  const album = useSelector(state => state.albums.albums).find(a => a.id === albumId)
  const setSelectedAlbumAndAlbumFormMode = props.setSelectedAlbumAndAlbumFormMode
  const user = useSelector(state => state.auth.user)

  return (
    <div className="card bg-dark text-light border rounded border-light">
      <div className="card-header d-flex align-items-center">
        <h5 style={{fontSize: `${10 / album.title.length + 0.8}rem`}}>{album.title}</h5>
        {user &&<button onClick={() => setSelectedAlbumAndAlbumFormMode({album, mode: "edit"})} className="ms-auto btn btn-outline-warning"><i className="bi bi-pencil-square"></i></button>}
        {user &&<button onClick={() => setSelectedAlbumAndAlbumFormMode({album, mode: "delete"})} className="ms-2 btn btn-outline-danger"><i className="bi bi-trash"></i></button>}
      </div>
      <img src={album.coverURL} alt="Album Cover" className="border-top border-bottom border-light"/>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="d-flex list-group-item bg-dark text-light"><b className="me-auto">Artiste: </b>{album.artist}</li>
          <li className="d-flex list-group-item bg-dark text-light"><b className="me-auto">Date de sortie: </b>{new Date(album.releaseDate).toLocaleDateString()}</li>
          <li className="d-flex list-group-item bg-dark text-light"><b className="me-auto">Score: </b>{[...Array(+album.score)].map((_,i) => <i key={i} className="mx-1 bi bi-star-fill text-warning"></i>)}{[...Array(5 - +album.score)].map((_,i) => <i key={i} className="mx-1 bi bi-star text-secondary"></i>)}</li>
          <li className="d-flex list-group-item bg-dark text-light"><b className="me-auto">Prix: </b>${album.price}</li>
        </ul>
      </div>
    </div>
  )
}

export default AlbumDisplay