import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import HomeUsersPage from './components/HomeUsersPage'
import PostsPage from './components/PostsPage';
import { CommentsPage } from './components/CommentsPage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeUsersPage/>}/>
          <Route path="/user/:userId/posts" element={<PostsPage/>}/>
          <Route path='/user/:userId/posts/:postId/comments' element={<CommentsPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
