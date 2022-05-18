import Hobbies from "../Hobbies";
import { useState,useRef } from "react";

function Header() {
  const enterhobby = useRef();
  const enterdt = useRef();
  const img = useRef();
  // const [enterhobby, setEnterhobby] = useState("");
  // const [enterdt, setDt] = useState("");
  // const [img,setImg] = useState("");
  const [hobby,setHobby] = useState([]);
//   function enterhobbyhandler(event) {
//     setEnterhobby(event.target.value);
//   }
//   function enterdthandler(event){
//     setDt(event.target.value);
//   }
//   function hobbyimg (event){
//     console.log(event.target.value);
// setImg(event.target.value);
//   }
  function hobbyhandler(event){
    event.preventDefault();
    const hb = {name:enterhobby.current.value,
      dt:enterdt.current.value,
    img:img.current.value,
  fav:false,
id:Math.random()};
    
setHobby((prev)=>[...prev,hb]);

  }
  function addFav(data){
    let index = hobby.map(function(e) { return e.id; }).indexOf(data);
    console.log(hobby[index]);
    hobby[index].fav = true;
    console.log(hobby[index]);
  }
  return (
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Add hobby
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Hobbies
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          Home
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <form onSubmit={hobbyhandler}>
          <h2>Add new hobby</h2>
          <label>Hobby Image</label><input ref={img} type="text" className="form-control"/>
                <div className="form-group">
                  <label>Enter new hobby</label>{" "}
                  <input
                    type="text"
                    ref={enterhobby}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Enter start date</label>{" "}
                  <input ref={enterdt} type="date" />
                </div>
             <button className="btn btn-info">Submit</button>
             </form>
             </div>
             
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          {hobby.map((item) => (
            <Hobbies id={item.id} key={item.id} hobby={item.name} dt={item.dt} img = {item.img} fav={item.fav} addFavourite={addFav}/>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Header;
