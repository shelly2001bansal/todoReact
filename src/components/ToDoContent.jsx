import { useState } from "react"
import toast  from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


const ToDoContent = () => {
    const [input,setInput]=useState("");
    const [description,setDescription]=useState("");
    const [tasks,setTasks]=useState([]);
    const [date,setDate]=useState("");
    const [select,setSelect]=useState([]);
    const [passed,setPassed]=useState({});


var q = new Date();
var m = q.getMonth()+1;
var d = q.getDate();
var y = q.getFullYear();

var myDate = y+"-"+m+"-"+d;



    
    function handleAdd(){
        let arr={
            input:input,
            description:description,
            date:date
        }        
        setTasks([...tasks,arr]);
        console.log("print")
        console.log([...tasks,arr]);
        console.log(myDate);
        setInput("");
        setDescription("");
        setDate("");
        
    }

    const handleDelete =(i)=>{
        const filterList = tasks.filter((elm)=> elm!== tasks[i]);
        setTasks(filterList)
        toast.success("Deleted Successfully");
    }
    function handleCheck(taskDate){
        const currentDate = new Date();
        const parsedInputDate = new Date(taskDate);
        const datePassed=currentDate>parsedInputDate;

    setPassed({ ...passed, [taskDate]: datePassed});
        
    }
    

    function handleComplete(i){
        const isClicked = select.includes(i);

    // If the item is not clicked, add it to the clickedItems state
    if (!isClicked) {
      setSelect([...select, i]);
    }
        toast.success("Completed your task")
        
    }

    // const handleAll=()=>{
    //     setIsComplete(true);
    // }

    // const handleLess=()=>{
    //     setIsComplete(false);
    // }

  return (
    <div className="container">
            <div className="container0">
                <div className="container2">
                        <label className="a1">Title:</label>
                        <input type="text" 
                        placeholder="Enter your task" 
                        className="a2" 
                        onChange={(event)=>{setInput(event.target.value)}}
                        value={input}
                        />
                </div>
                    <div className="container2">
                        <label className="a1">Description:</label>
                        <input type="text" 
                        placeholder="Enter your task desciption" 
                        className="a2"
                        onChange={(event)=>{setDescription(event.target.value)}}
                        value={description}
                        />
                    </div>

                    <div className="container2">
                        <label className="a1">Date:</label>
                        <input type="date" 
                        placeholder="Date" 
                        className="a2"
                        onChange={(event)=>{setDate(event.target.value)}}
                        value={date}
                        />
                    </div>
                </div>
        <div className="container2">
            
            <button className="btn-1" onClick={handleAdd} disabled={input.trim().length === 0 && description.trim().length===0 && date.trim().length===0}>Add</button>
            
        
        </div>
        <div className="a3"></div>

        <div>
            {/* <List tasks={tasks} handlDelete={handleDelete}/> */}
            <div >
                { 

                     tasks.map((task,i)=>{
                        return <div key={i} style={
                            {  height: "70px",
                                width: "800px",

                                margin: "auto",
                                marginTop: "30px",
                                display: "flex",
                                justifyContent: "space-between",
                                
                                backgroundColor:
                                select.includes(i)  ? "palegoldenrod" : 'rgb(18, 226, 81)'}
                        } >
                            <div className="b3">
                                <p className="b2">{task.input}</p>
                                <p className="b4">{task.description}</p>
                            </div>
                    <div className="b5">
                    <div className="z1">
                        {
                            (<p >{task.date}</p>)
                        }
                    </div>
                    
                    <button onClick={()=>handleCheck(task.date)} className="btn-2">check</button>
                    {passed[task.date] && <span className="b12">Date has passed</span>}
                    <div className="b6" onClick={()=>handleDelete(i)}><MdDeleteOutline /></div>
                    <div className="b7" onClick={()=>handleComplete(i)} ><FaCheck /></div>
                    </div>
                 </div>
                     })
            
                    } 
</div>
        </div>
        
    </div>
  )
}

export default ToDoContent
