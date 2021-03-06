export function TodoPreview({todo,removeTodo}) {
    return (
        <div className='todo flex justify-between'>
            <h5>{todo.txt}</h5>
            <button onClick={()=>removeTodo(todo.id)}><i className="fas fa-minus"></i></button>
        </div>
    )

}