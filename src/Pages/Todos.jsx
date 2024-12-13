import React from "react";
import Todo from "../Components/Todo";

const Todos = () => {
  return (
    <div>
      <div className="grid grid-cols-3 p-8 gap-3 items-center text-white">
        <Todo
          name="running"
          action="inorder to be awinner in running game you
have to do more exercises"
        />
        <Todo
          name="cooking"
          action=" i neverforget food i am ate wos cooked by annah"
        />
        <Todo
          name="studing "
          action="you have to make more etude inorder to be able to pass exam" 
        />
        <Todo name="clearing" action="i have to clearn house to day" />
        <Todo name="pray" action="can you go to pray on sunday" />
        <Todo name="work" action="i have alot of work to do on that day" />
      </div>
    </div>
  );
};

export default Todos;
