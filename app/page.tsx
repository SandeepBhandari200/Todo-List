"use client";

import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mainTask, setMainTask] = useState<
  { title: string; description: string }[]
>([]);

  const submitHandler = (e :React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setMainTask([...mainTask, {title, description}]);
    setTitle("");
    setDescription("");
    
    }

    const deleteHandler = (i: number )=>{
      let copyTask = [...mainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)

    }


    let renderTask: React.ReactNode = "No Task Available";

    if(mainTask.length>0){
      

    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i}  className='flex items-center justify-between mb-6'>
        <div className='  w-2/3' >
                    <h2 className='font-semibold text-4xl mb-4'>{t.title}</h2>
                   <h3 className='font-semibold text-lg'>{t.description}</h3>
                   
             </div>
             <button 
             onClick={()=>{
              deleteHandler(i )
            }}
             className='bg-red-500 py-2 px-3 rounded font-bold '>Delete Task
             </button>
      </li>

      );
      

    })
    }

  return (
    <div>

      <h1 className='bg-black text-white text-5xl p-6 font-bold text-center'>My Todo List</h1>
      <form onSubmit={submitHandler} >
        <input type="text" className='border-b-red-950 border-2 m-4 p-3 rounded-xl' placeholder='Enter Task here'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          }}
        />

         <input type="text" className='border-b-red-950 border-2 m-4 p-3 rounded-xl' placeholder='Enter Description here'
         value={description}
         onChange={(e)=>{
          setDescription(e.target.value)

         }}
         />

         <button type="submit" className='bg-black text-white border-2 m-4 py-3 rounded-xl px-6 rounded-1xl'>Add Task</button>

      </form>

      <hr/>
      <div className='p-8 bg-amber-800 '>
           <ol className="list-decimal ml-6 font-bold ">
               {renderTask}
           </ol>
      </div>
      
    </div>
  )
}

export default page
