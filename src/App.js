import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Quizs from './components/Quizs/Quizs';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/quiz/:id',
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quizs></Quizs>
        }
        
      ]
    },
    {
      path: '*',
      element: <div className='text-center'><h1>You are routing ulta palta page !! Please with our website.</h1></div>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
