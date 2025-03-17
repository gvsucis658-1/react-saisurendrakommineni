import './App.css';
import { useState } from 'react';
import Editmovies from './editmovie';
function App() {
  const[movies,setmovies]=useState([{name:"Devara",actor:"NTR",director:"Shiva",gross:"50M$",yearreleased:"2024"}])
  const[newmovie,setnewmovie]=useState({name:"",actor:"",director:"",gross:"",yearreleased:""})
  const[updatemovie,setupdatemovie]=useState(null)

  function handleadd(){

    setmovies([...movies,{id: movies.length + 1,...newmovie}])
    setnewmovie({name:"",actor:"",director:"",gross:"",yearreleased:""})
  }

  function handleupdate(updatedmovie) {
    setmovies(movies.map(movie => 
      movie.id === updatedmovie.id ? updatedmovie : movie
    ));
    setupdatemovie(null);
  }

  return (
    <div className="App">
      
      <h1>Add New Movie</h1>
      <div className='forms'>
        <div className="formgroup">
            <label>Movie name</label>
            <input className="inptypes" type='text' value={newmovie.name} onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})}></input>
          </div>
        <div className="formgroup">
            <label>Actor name</label>
            <input type='text' className="inptypes" value= {newmovie.actor} onChange={(e)=>setnewmovie({...newmovie,actor:e.target.value})}></input>
          </div>
          <div className="formgroup">
 
            <label>Director name</label>
            <input type='text' className="inptypes" value= {newmovie.director} onChange={(e)=>setnewmovie({...newmovie,director:e.target.value})}></input>
          </div>
          <div className="formgroup">
            <label>Gross</label>
            <input type='text' className="inptypes" value= {newmovie.gross} onChange={(e)=>setnewmovie({...newmovie,gross:e.target.value})}></input>
          </div>
          <div className="formgroup">
            <label>Year Released</label>
            <input type='number' className="inptypes" value= {newmovie.yearreleased} onChange={(e)=>setnewmovie({...newmovie,yearreleased:e.target.value})}></input>
          </div>
          <div>   
            <button onClick={handleadd}>Add Movie</button>
          </div>
          </div>
          <div>
          <table className="movietable">
              <tr>
                <th>Movie Name</th>
                <th>Actor</th>
                <th>Director</th>
                <th>Gross</th>
                <th>Year Released</th>
                <th>Actions</th>
              </tr>
              {movies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.actor}</td>
                  <td>{movie.director}</td>
                  <td>{movie.gross}</td>
                  <td>{movie.yearreleased}</td>
                  <td>
                    <button onClick={() => setupdatemovie(movie)}>Edit</button>
                  </td>
                </tr>
              ))}
          </table>
          {updatemovie && <Editmovies movie={updatemovie} onupdate={handleupdate} oncancel={() => setupdatemovie(null)}></Editmovies>}
          </div>
      </div>

  );
}

export default App;
