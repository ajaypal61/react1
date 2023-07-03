


// yaha jo bhi kam ya codeing ki jayegi vo copy ki hai to ise index.js me paest kre

import ComA from "./ComA";
import ComB from "./ComB";
import ComC from "./ComC";









// import React from 'react';
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <>
//     <h1>Netflix Pick</h1>
//     <p>Here The list of my 5 netflix pick</p>
//     <ol>
//       <li>DARK</li>
//       <li>DAEK</li>
//       <li>DAEK</li>
//       <li>DAEK</li>
//       <li>DAEK</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );





// iska use {} ke liye hai


// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Ajay";
// ReactDOM.render(
//     <>
//         <h1>My name is {fname}</h1>
//         <p>My number {3 * 3}</p>
//     </>,
//     document.getElementById("root")
// )








// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Ajay";
// const lname = "Rathore";
// ReactDOM.render(
//     <>
//         <h1>My name is {`${fname} ${lname}`}</h1>
//         <p>My number {3 * 3}</p>
//     </>,
//     document.getElementById("root")
// )








// import React from "react";
// import ReactDOM from "react-dom";

// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
//     <h1>My name Ajay </h1>
//     <p>Today Date is {currdate} </p>
//     <p>Today Time is {currtime} </p>
//     </>,
//     document.getElementById("root")
// )








// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Ajay";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/500";
// ReactDOM.render(
//     <>
//         <h1 contentEditable="true">My name is {fname}</h1>
//         <img src={img1} alt="img" />
//         <img src={img2} alt="img" />
//             <img src={img3} alt="img" />
//     </>,
//     document.getElementById("root")
// )







// css #############################################




// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// const fname = "Ajay";

// ReactDOM.render(
//     <>
//         <h1 className='h'>My name is {fname}</h1>
      
//     </>,
//     document.getElementById("root")
// )





// import React from 'react';
// import ReactDOM from 'react-dom';
// const fname = "Ajay";

// const h = {
//     color: "red",
//     textAlign:'center',
// };
// ReactDOM.render(
//     <>
//         <h1 style={h} >My name is {fname}</h1>
      
//     </>,
//     document.getElementById("root")
// )







// project css inline



// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";


// const cssStyle = {};

// let currDate = new Date(2022, 3, 17, 11);
// currDate = currDate.getHours();
// let greeting = "";


// if (currDate >= 1 && currDate < 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "green";
// } else if (currDate >= 12 && currDate < 19) {
//     greeting = "Good Afternoon";
//     cssStyle.color = "orange";

// } else {
//     greeting = "Good Night";
//     cssStyle.color = "black";

// }
// ReactDOM.render(
//     <>
//         <h1>Hello Sir, <span style={cssStyle}> { greeting}</span></h1>
      
//     </>,
//     document.getElementById("root")
// )




// #########################################






// import React from 'react';
// import ReactDOM from 'react-dom';
// import { add, sub, mult, div } from './pre/Calc';

// ReactDOM.render(
//   <>
//     <ul>
//       <li>sum{add(40, 4)}</li>
//       <li>sum{sub(40, 4)}</li>
//       <li>sum{mult(40, 4)}</li>
//       <li>sum{div(40, 4)}</li>
//     </ul>
//   </>,
//   document.getElementById("root")
// );








// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from "./Cards"

// ReactDOM.render(
//     <>
//         <Card
//           imgsrc="https://picsum.photos/200/300"
//           title="A Netflix Series"
//           sname="DARK"
//           link="https://youtu.be/VB4WHq7uxJ8"
//         />
//         <Card
//           imgsrc="https://picsum.photos/201/300"
//           title="A Netflix Series"
//           sname="THOR"
//           link="https://youtu.be/VB4WHq7uxJ8"
//         />
//         <Card
//           imgsrc="https://picsum.photos/203/300"
//           title="A Netflix Series"
//           sname="IRON MAN"
//           link="https://youtu.be/VB4WHq7uxJ8"
//         />
//     </>,
//     document.getElementById("root")
// )

















// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";


// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );

// import React, {useState} from "react";

// const App = () => {
    
    
//     const state = useState();

//     const [count, setCount] = useState(0);



//     const IncNum = () => {
//         setCount(count + 1);
//     };



//     return (
//         <>
//             <h1> {count}</h1>
//         <button onClick={IncNum}>Click Me </button>
//         </>
//     )
// }



// export default App;









// watch ##################


// import React, {useState} from "react";

// const App = () => {

//     let newTime = new Date().toLocaleTimeString();
//     const [cTime, setCtime] = useState(newTime);

//     const UpdateTime = () => {
//         newTime = new Date().toLocaleTimeString();
//         setCtime(newTime);
//     };
//     return (
//         <>
//         <h1>{cTime}</h1>
//         <button onClick={UpdateTime}>Get Time</button>
//         </>
//     )
// }



// export default App;



// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";


// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );












// import React, {useState} from "react";

// const App = () => {

//     let time = new Date().toLocaleTimeString();


//     const [cTime, setCtime] = useState(time);

//     const UpdateTime = () => {
//         time = new Date().toLocaleTimeString();
//         setCtime(time);
//     }

//     setInterval(UpdateTime, 1000);
//     return (
//         <>
//             <h1>{ cTime}</h1>
//         </>
//     )
// }



// export default App;



// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";


// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );












// ###################################################################




// import React,{useState} from "react";

// const App = () => {
//     const purple = '#8e44ad';
//     const [bg, setBg] = useState(purple);

//     const [name, setName] = useState("click Me");
//     const bgChange = () => {
//         let newBg = "#34495e";
//         setBg(newBg);
//         setName("OHH");
//     }

//     const bgBack = () => {
//         setBg(purple);
//         setName('AJAY');
//     }
//     return (
//         <>
//             <div style={{ backgroundColor:bg}}>
//                 <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
//             </div>
//         </>
//     );
// };



// export default App;



// import React from 'react';
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";



// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );











// form   ###################################



// import React,{useState} from "react";

// const App = () => {
//     const [name, setName] = useState("");
//     const [fullName, setFullName] = useState();


//     const inputEvent = (event) => {
//         setName(event.target.value);
//     };

//     const onSubmit = () => {
//         setFullName(name);
//     }
//     return (
//         <>
//             <h1>Hello {fullName}</h1>
//             <input type="text" onChange={inputEvent} value={name} placeholder="Enter Your Name" />
//             <button onClick={onSubmit}>Click Me</button>
//         </>
//     );
// };



// export default App;




// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );










// form 2 ##################################################




// import React,{useState} from "react";

// const App = () => {
//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [fullName, setFullName] = useState("");
//     const [lasrNameNew, setLastNameNew] = useState("");


//     const inputEvent = (event) => {
//         setName(event.target.value);
//     };

//     const inputEventTwo = (event) => {
//         setLastName(event.target.value);
//     }

//     const onSubmit = (event) => {
//         event.preventDefault();
//         setFullName(name);
//         setLastNameNew(lastName);
//     }
//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <h1>Hello {fullName} {lasrNameNew}</h1>
//                 <input type="text" onChange={inputEvent} value={name} placeholder="Enter Your Name" />
//                 <br />
//                 <input type="text" onChange={inputEventTwo} value={lastName} placeholder="Enter Your LastName" />
//                 <button type="submit">Submit Me</button>
//                 </form>
//         </>
//     );
// };



// export default App;



// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );









// #####################################################################################




// import React,{useState} from "react";

// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         phone: "",
//     });
    


//     const inputEvent = (event) => {
//         // const value = event.target.value;
//         // const name = event.target.name;


//         const { value, name } = event.target;
//         setFullName((preValue) => {
//             if (name === "fName") {
//                 return {
//                     fname: value,
//                     lname: preValue.lname,
//                     email: preValue.email,
//                     phone: preValue.phone,
//                 };
//             } else if (name === "lName") {
//                 return {
//                     fname: preValue.fname,
//                     lname: value,
//                     email: preValue.email,
//                     phone: preValue.phone,
//                 }
//             }else if (name === "email") {
//                 return {
//                     fname: preValue.fname,
//                     lname: preValue.lname,
//                     email: value,
//                     phone: preValue.phone,
//                 }
//             }else if (name === "phone") {
//                 return {
//                     fname: preValue.fname,
//                     lname: preValue.lname,
//                     email: preValue.email,
//                     phone: value,
//                 }
//             }
//         });
//     };

   
//     const onSubmit = (event) => {
//         event.preventDefault();
//         alert("form submitted");
//     }
//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <h1>Hello {fullName.fname} {fullName.lname} </h1>
//                 <p>{fullName.email}</p>
//                 <p>{fullName.phone}</p>
//                 <input type="text" onChange={inputEvent}
//                     name="fName"
//                     value={fullName.fname}
//                     placeholder="Enter Your Name" />
//                 <br />
//                 <hr />
//                 <hr />
//                 <hr />
//                 <hr />
//                 <hr />
//                 <hr />
            
//                 <input type="text" onChange={inputEvent}
//                     name="lName"
//                     value={fullName.lname}
//                     placeholder="Enter Your LastName" />
              
              
//                 <input type="email" onChange={inputEvent}
//                     name="email"
//                     value={fullName.email}
//                     placeholder="Enter Your email" />
              
              
//                 <input type="number" onChange={inputEvent}
//                     name="phone"
//                     value={fullName.phone}
//                     placeholder="Enter Your phone" />
                

//                 <button type="submit">Submit Me</button>
//                 </form>
//         </>
//     );
// };



// export default App;




// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );






// ######################################################################################


// import React,{useState} from "react";

// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         phone: "",
//         qua  : "",
//     });
    


//     const inputEvent = (event) => {


//         const { value, name } = event.target;


//         setFullName((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value,
//             }
           
//         });
//     };

   
//     const onSubmit = (event) => {
//         event.preventDefault();
//         alert("form submitted");
//     }
//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <h1>Hello {fullName.fname} {fullName.lname} </h1>
//                 <p>{fullName.email}</p>
//                 <p>{fullName.phone}</p>
//                 <p>{fullName.qua}</p>
//                 <input type="text" onChange={inputEvent}
//                     name="fname"
//                     value={fullName.fname}
//                     placeholder="Enter Your Name" />
//                 <br />
//                 <hr />
//                 <hr />
//                 <hr />
//                 <hr />
//                 <hr />
//                 <hr />
            
//                 <input type="text" onChange={inputEvent}
//                     name="lname"
//                     value={fullName.lname}
//                     placeholder="Enter Your LastName" />
              
              
//                 <input type="email" onChange={inputEvent}
//                     name="email"
//                     value={fullName.email}
//                     placeholder="Enter Your email" />
              
              
//                 <input type="number" onChange={inputEvent}
//                     name="phone"
//                     value={fullName.phone}
//                     placeholder="Enter Your phone" />
                
//                 <input type="text" onChange={inputEvent}
//                     name="qua"
//                     value={fullName.qua}
//                     placeholder="Enter Your qua" />
                

//                 <button type="submit">Submit Me</button>
//                 </form>
//         </>
//     );
// };



// export default App;





// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );






// ####################################################################


// import React,{useState} from "react";


// const App = () => {
//     const [num, setNum] = useState(0);



//     const incNum = () => {
//         setNum(num + 1);
//     }

//     const DecNum = () => {
//         if (num > 0) {
//             setNum(num - 1);
//         } else {
//             alert("sorry Zero Limt")
//             setNum(0);
//         }
//     };




//     return (
//         <>
//             <div>
//                 <h1>{num }</h1>
//                 <div>
//                     <button onClick={incNum}>Increm</button>
//                     <button onClick={DecNum}>Decrem</button>
//                 </div>
//         </div>
//         </>
//     );
// };




// export default App;





// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );




// ########################################################################################################





// import React, { useState } from "react";
// import ListCom from "./ListCom";
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';



// const App = () => {
//     const [item, setItem] = useState("");
//     const [newitem, setNewItem] = useState([]);

//     const itemEvent = (event) => {
//         setItem(event.target.value);
//     };

//     const listofItem = () => {
//         setNewItem((prevValue) => {
//             return [...prevValue, item];
//         });
//         setItem("");
//     };
//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <br />
//                     <h1>ToDo List</h1>
//                     <br />
//                     <input type="text" value={item} placeholder="Add An Items" onChange={itemEvent}/>
//                     <Button className="newBtn" onClick={listofItem} ><AddIcon/></Button>
//                     <br />
//                     <ol>
//                         {newitem.map((val, index)=>{
//                             return <ListCom key={index} text={val} />;
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </>
//     );
// };




// export default App;





// import React,{useState} from "react";
// // import DeleteIcon from '@material-ui/icons/Delete';
// import BackspaceIcon from '@material-ui/icons/Backspace';



// const ListCom = (props) => {
//     const [line, setLine] = useState(false);
//     const cutIt = () => {
//         setLine(true);
//     };

//     return (
//         <div className="todo_style">
//             <span onClick={ cutIt}><BackspaceIcon className="deleteIcon" /></span>
//             <li style={{ textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
//             </div>
//     );
// };


// export default ListCom;









// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";


// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );



// css todo list ....



/* 
*{

    box-sizing: border-box;
  
    padding: 0;
  
    margin: 0;
  
    font-family: "Josefin Sans", "Arial Narrow", Arial, sans-serif;
  
  }
  
  
  
  .main_div {
  
    width: 100%;
  
    height: 100vh;
  
    background: #7bed9f;
  
    display: flex;
    flex-direction: row;

    justify-content: center;
  
    align-items: center;
  
    text-align: center;
  
  }
  
  
  
  .center_div {
  
    width: 25%;
  
    height: 70vh;
  
    background-color: #f4f4f4;
  
    box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
  
    border-radius: 15px;
  
  }
  
  
  
  h1 {
  
    color: rgba(0, 0, 0, 0.87);
  
    font-size: 50px;
  
    margin-bottom: 30px;
  
    min-width: 64px;
  
    box-sizing: border-box;
  
    font-family: "Comfortaa", cursive;
  
  
    font-weight: 500;
  
    border-radius: 4px;
  
    letter-spacing: 0.02857em;
  
    text-transform: uppercase;
  
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  
  }
  
  
  
  
  
  
  
  
  
  
  
  input {
  
    text-align: center;
  
    height: 30px;
  
    border: none;
  
    background: transparent;
  
    font-size: 20px;
  
    font-weight: 500;
  
    width: 60%;
  
    border-bottom: 2px solid #8566aa;
  
    outline: none;
  
    margin-right: 20px;
  
  }
  
  
  
  .newBtn {
  
    width: 50px;
  
    height: 55px;
  
    background-color: #16a085 !important;
  
    color: white !important;
  
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  
  
    border-radius: 50% !important;
  }


  .newBtn:hover {



    color: #16a085 !important;
  
  
  
    background: white !important;
  
  
  
  }
  
  
  
  
  
  
  
  
  .MuiSvgIcon-root {
  
  
  
    width: 2rem !important;
  
  
  
    height: 2rem !important;
  
  
  
  }
  
  
  
  
  
  ol {
  
  
  
    margin-top: 30px;
  
  
  
  
  
  
  }
  
  
  
  
  
  ol li {
  
  
  
    padding-left: 0px;
  
  
  
    text-align: left;
  
  
  
    font-size: 20px;
  
  
  
    font-weight: 500;
  
  
  
    min-height: 40px;
  
  
  
    display: flex;
  
  
  
    align-items: center;
  
  
  
    color: #8566aa;
  
  
  
    text-transform: capitalize;
  
  
  
  
  
  
    list-style: none;
  
  
  
  }
  
  
  
  
  
  .todo_style {
  
  
  
    display: flex;
  
  
  
    flex-direction: row;
  
  
  
    justify-content: left;
  
  
  
    align-items: center;
  
  
  
  }
  
  
  
  
  
  .todo_style .deleteIcon {
  
  
  
    width: 25px;
  
  
  
    height: 25px;
  
  
  
    display: flex;
  
  
  
    justify-content: center;
  
  
  
    align-items: center;
  
  
  
    background-color: #8566aa;
  
  
  
    border-radius: 50%;
  
  
  
    margin: 0 15px 0 35px;
  
  
  
    padding: 5px;
  
  
  
    color: aliceblue;
  
  
  
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  
  
  
  }
  
  
  
  
  
  .todo_style .deleteIcon:hover {
  
  
  
    background-color: transparent;
  
  
  
    color: crimson;
  
  
  
    box-shadow: 5px 5px 15px -5px rgba(255, 0, 0, 0.5);
  
  
  
  }
  
  
  
  
  
  .todo_style .fa-times:hover .list_style {
  
  
  
    color: crimson;
  
  
  
  }
  
  
  
  
  
  @media (max-width: 768px) {
  
  
  
    .center_div {
  
  
  
      width: 55%;
  
  
  
    }
  
  
  
  
  
    .todo_style .fa-times {
  
  
  
      margin: 0 15px 0 15px;
  
  
  
      display: flex;
  
  
  
      justify-content: center;
  
  
  
      align-items: center;
  
  
  
  
  
  
    }
  
  
  
  
  
    button {
  
  
  
      margin-left: 5px;
  
  
  
      min-height: 40px;
  
  
  
      width: 40px;
  
  
  
      color: #fff;
  
  
  
      font-size: 30px;
  
  
  
    }
  
  
  
  } */




// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";


// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );






//   ###########################################################################





// import React, { useState } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//     return (
//         <>
//             <h1 className="text-danger text-center m-5 text-capitalize ">WelCome To My Channel </h1>
//             <div className="container">
//   <div className="row">
//     <div className="col">
//       <div class="card" >
//   <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col">
//       <div class="card" >
//   <img src="https://picsum.photos/202/300" class="card-img-top" alt="..." height="200px"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col">
//       <div class="card" >
//   <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   </div>
// </div>
//         </>
//     );
// };




// export default App;





// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";


// ReactDOM.render(
//   <>
//    <App />
//   </>,
//   document.getElementById("root")
// );





// #############################################################









// import React, { createContext } from "react";
// import ComA from "./ComA";


// const FirstName = createContext();
// const LastName = createContext();


// const App = () => {
//     return (
//         <>
//             <FirstName.Provider value={"Rathore"}>
//                 <LastName.Provider value={"Ajay"}>
//                     <ComA />
//                 </LastName.Provider>
//             </FirstName.Provider>
//         </>
//     );
// };




// export default App;
// export { FirstName, LastName };


// ComA ComB ComC ko use krna hai







// ###########################################################################





// import React, { useState, useEffect} from "react";



// const App = () => {
//     const [num, setNum] = useState(0);
//     const [nums, setNums] = useState(0);


//     useEffect(() => {
//         alert(" I AM Clicked");
//     }, [num]);


//     return (
//         <>
//             <button onClick={() => {
//                 setNum(num + 1);
//             }}>
//                 Click Me {num}
//             </button>
//             <br />
//             <button onClick={() => {
//                 setNums(nums + 1);
//             }}>
//                 Click Me {nums}
//             </button>
//         </>
//     );
// };




// export default App;







// ########################################################### 


// import React,{useState, useEffect} from "react";



// const App = () => {
//     const [num, setNum] = useState(0);

//     useEffect(() => {
//         document.title=`you clicked me ${num} times`
//     });
//     return (
//         <>
//             <button onClick={() => {
//                 setNum(num+1);
//             }}>Click Me {num}</button>
//         </>
//     );
// };

// export default App;






// ###############################


// import React,{useState, useEffect} from "react";
// import axios from "axios";


// const App = () => {
//     const [num, setNum] = useState();


//     useEffect(()=> {
//         alert("hi");
//     })

//     return (
//         <>
//             <h1>You Choose {num} value</h1>
//             <select value={num} onChange={(event) => { setNum(event.target.value); }} >
//                 <option value="1">1</option>
//                 <option value="25">25</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//           </select>
//         </>
//     );
// };

// export default App;





// ###########################################################################



// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Navbar from "./Navbar";
// import Post from "./Post";
// import Dashboard from "./Dashboard";
// import Login from "./Login";
// // import Error from "./Error";



// const App = () => {
//     let isLogged = true
//     let data = {
//         'st': "user not log in"
//    }


    


//     return (
//         <>
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Home />}></Route>
//                     <Route path="/about"  element={<About />}></Route>
//                     <Route path="/contact" element={<Contact />}></Route>
//                     <Route path="/post/:category" element={<Post />}></Route>
//                     {/* <Route path="dashboard" element={<Dashboard />}></Route> */}
//                     <Route path="login" element={<Login />}></Route>

//                     <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/login" replace state={data} />}></Route>
//                 </Routes>
//          </Router>
             
//             {/* <About />
//             <Contact /> */}
//         </>
//     );
// };

// export default App;








































