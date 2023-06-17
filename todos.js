export const handleTodo = ()=>{
    addTodo()
    deleteTodo()
    updataTodo()
    getTodo()
}

const addTodo = (ref) => {
    const todosForm = document.querySelector('.todo-form')
    todosForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      console.log("ADD_TODO ", todosForm.todo.value)
  
      
  
    })
  }
  
  const deleteTodo = (db) => {
    const deleteBtns = document.querySelectorAll('#todos span')
    if (!deleteBtns || !deleteBtns.length) return;
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        console.log("DELETE_TODO", e.target.getAttribute('data-id'))
        const id = e.target.getAttribute('data-id')
        const docRef = doc(db, 'todos', id)
  
        
      })
    })
  
  }
  
  const updataTodo = (db) => {
  
    const cboxes = document.querySelectorAll('#todos input')
    if (!cboxes || !cboxes.length) return;
    cboxes.forEach(cbox => {
      cbox.addEventListener('change', async (e) => {
        console.log("UPDATE_TODO", e.target.getAttribute('data-id'), e.target.checked)
  
        const id = e.target.getAttribute('data-id')
        const checked = e.target.checked
        const docRef = doc(db, 'todos', id)
  
       
      })
    })
  }
  
  
  const getTodo = async (db) => {
  
    console.log('getTodo ')
    const docRef = doc(db, 'todos', 'EPypTla3ETDnqJhZfrlA')
    const data = await getDoc(docRef)
    console.log('getTodo', data.data())
  }
  
  