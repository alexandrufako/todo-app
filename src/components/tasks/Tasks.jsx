import { useState, useRef } from "react";
import "./tasks.css";
import Card from "../Card/Card";

const Tasks = () => {
    const titleRef = useRef("");
    const descriptionRef = useRef("");

    const [tasks, setTasks] = useState([
        {
            title: "First to-do name",
            description: "description of the to-do task",
            color: '000000'
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempTask = { title: null, description: null, color: null };
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        tempTask.title = titleRef.current.value;
        tempTask.description = descriptionRef.current.value;
        tempTask.color = randomColor;
        setTasks([...tasks, tempTask]);
        e.target.reset();
    };


    const handleDeleteLastItem = (e) => {
        let tempArray = [...tasks];
        tempArray.pop();
        setTasks(tempArray)
    }

    const handleRemoveItem = (title) => {
        setTasks(tasks.filter((obj) => obj.title !== title));
    };

    return (
        <div className="tasks-container">
            <div className="task-title">
                <b>Tasks</b>
            </div>
            {/*<button>Add task - pentru pop-up</button>*/}
            <div className="cards">
                {tasks.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            deleteItem={() => handleRemoveItem(card.title)}
                            color={card.color}
                        />
                    );
                })}
            </div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" ref={titleRef} />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    ref={descriptionRef}
                />
                <button type="submit">Add task</button>
            </form>
            <button className='delete-last-btn' onClick={handleDeleteLastItem}>Delete last task</button>
        </div>
    );
};

export default Tasks;
