import FetchData from "./FetchData/FetchData";
import "../ForGuru/Guru.css";
import EventHandle from "./EventS/EventHandle";
import ToDoList from "./ToDo_list/ToDoList";
import Hooks from "./FetchData/Hooks/Hooks";
import DataProvider from "./context/DataProvider";
import ReferenceHook from "./USEREFERENCE/UseReference";
import Header from "../header/Header";

const Guru = () => {
   return(
    <>
      <Header/>
       <nav className="text-center guru_navbar"> 
          <ul className="d-flex">
            <li  className="me-2 ms-3">  
                <a href="#fetch_data">Fetch Data</a>
            </li>
           <li  className="me-2 ms-3">
              <a href="#Event_handling"> Event handlign</a>
           </li>
           <li  className="me-2 ms-3">
              <a href="#To_Do_List"> To Do List</a>
           </li>
           <li  className="me-2 ms-3">
              <a href="#Hooks"> Hooks</a>
           </li>
           <li  className="me-2 ms-3">
              <a href="#use_reference_Hook"> use reference Hook</a>
           </li>
          
          </ul>
        </nav>
        <h1 className="text-center text-success mt-2 mb-2" id="fetch_data">--- Fetch data and shown in Table ---</h1>
        <FetchData/>
        <hr/>
        <h1 className="text-center text-success mt-2 mb-2" id="Event_handling">--- Event handlign practice ---</h1>
       <EventHandle/>
        <h1 className="text-center text-success mt-2 mb-2" id="To_Do_List">--- To Do List ---</h1>
       <ToDoList/>
        <h1 className="text-center text-success mt-2 mb-2" id="Hooks">--- Hooks ---</h1>

      <DataProvider>
         <Hooks></Hooks>
      </DataProvider>

      <h1 className="text-center text-success mt-2 mb-2" id="use_reference_Hook">--- Use Reference Hook ---</h1>
      <ReferenceHook/>
    </>
   )
}
export default Guru;