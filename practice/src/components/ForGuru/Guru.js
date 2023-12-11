import FetchData from "./FetchData/FetchData";
import "../ForGuru/Guru.css";
import EventHandle from "./EventS/EventHandle";
import ToDoList from "./ToDo_list/ToDoList";

const Guru = () => {
   return(
    <>
       <nav className="text-center guru_navbar"> 
          <ul className="d-flex">
            <li  className="me-2 ms-3">  
                <a href="#fetch_data">Fetch Data</a>
            </li>
           <li  className="me-2 ms-3">
              <a href="#Event_handling"> Event handlign</a>
           </li>
           <li  className="me-2 ms-3">
              <a href="#Event_handling"> To Do List</a>
           </li>
          
          </ul>
        </nav>
        <h1 className="text-center text-success mt-2 mb-2" id="fetch_data">--- Fetch data and shown in Table ---</h1>
        <FetchData/>
        <hr/>
        <h1 className="text-center text-success mt-2 mb-2" id="Event_handling">--- Event handlign practice ---</h1>
       <EventHandle/>
        <h1 className="text-center text-success mt-2 mb-2" id="Event_handling">--- To Do List ---</h1>
       <ToDoList/>

    </>
   )
}
export default Guru;