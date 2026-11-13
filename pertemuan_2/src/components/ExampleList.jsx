import React from "react";
import { coursesData } from "../data/exampleData";



const ExampleList = () => {
    const userDataName = ['Egal' , 'Nabil' , 'Mouad' , 'Youssef' , 'Hicham' , 'Omar' , 'Mohamed' , 'Ahmed' , 'Ali' , 'Said'];
    return(
        <>
          <div style={{padding: '20px', fontFamily: 'Arial', fontSize: '16px', maxWidth: '600px', margin: '0 auto'}}>
                <h2>List of course: </h2>
                
                <p>Data di bawah ini diambil dari file terpisah <code>exampleData.js</code> dan dilooping menggunakan <code>.map()</code>.</p>
                
                {coursesData.map((course) => (
                    <div key={course.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
                        <h3>{course.title}</h3>
                        <p>{course.category}</p>
                        <p>{course.level}</p>
                        <p>{course.isCompleted ? 'Complete' : 'Incomplete'}</p>
                        
                    </div> 
                ))}
          </div>
            
          
        </>
    )
}



export default ExampleList;