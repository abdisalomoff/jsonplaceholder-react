import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import UsersPage from './Pages/Jsonplaceholder/UsersPage';
import PostsPage from './Pages/Jsonplaceholder/PostsPage';
import { CommentsPage } from './Pages/Jsonplaceholder/CommentsPage';
import Header from './components/Header';
import TodoForm from './Pages/AddTodo/TodoForm';
import Crud from './Pages/Crud/Crud';


function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<UsersPage/>}/>
          <Route path="/user/:userId/posts" element={<PostsPage/>}/>
          <Route path='/user/:userId/posts/:postId/comments' element={<CommentsPage/>}/>
          <Route path='/todos' element={<TodoForm/>}/>
          <Route path='crud' element={<Crud/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
