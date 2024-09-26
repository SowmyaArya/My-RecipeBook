// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Appbar from '../../User/components/Appbar';
// import Register from '../../User/components/Register';
// import TablePage from '../../User/components/RecipeList';
// import Home from '../../User/components/Home';
// import Addrecipe from '../components/Addrecipe';
// import Viewrecipe from '../components/Viewrecipe';
// import { Table } from '@mui/material';
// // import Tables from '../components/Table';
// import Viewrecipetable from '../components/Viewrecipetable';
// import Login from '../components/Login';
// import LoginForm from '../components/LoginForm';
// import RegisterForm from '../components/RegisterForm';
// import Signup from '../components/Signup';
// import SuggestionBox from '../components/SuggestionBox';
// import CategoryList from '../components/CategoryList';
// import CategoryRecipes from '../components/CategoryRecipes';
// import Loginform from '../components/LoginForm';
// import RecipeList from '../../User/components/RecipeList';




// export default function UserRoute() {
//   return (
//     <div>
//        <Appbar/>
      
//                     <Routes>
                       
//                     <Route exact path="/" element={<Home />} />
//         <Route exact path="/Register" element={<Register />} />
//         <Route exact path="/Appbar" element={<Appbar />} />
//         <Route exact path="/Recipelist" element={<TablePage />} />
//         <Route exact path="/Addrecipe" element={<Addrecipe />} />
//         <Route exact path="/Viewrecipe"  element={<Viewrecipe />}/>
//         {/* <Route exact path="/Table"  element={<Tables />}/> */}
//         <Route exact path="/Viewrecipetable"  element={<Viewrecipetable />}/>
//         <Route exact path="/SuggestionBox"  element={<SuggestionBox />}/>
//         {/* <Route exact path="/CategoryList"  element={<CategoryList />}/>
//         <Route exact path="/CategoryRecipe"  element={<CategoryRecipes />}/> */}
//         <Route exact path="/Loginform"  element={<Loginform />}/>
//         <Route exact path="/CategoryList"  element={<CategoryList/>} />
//         {/* <Route exact path="/recipes/category/:categoryId" element={<CategoryRecipes/>} /> */}
     
//         <Route exact path="/RecipeList"  element={<RecipeList />}/>
//         {/* // <Route exact path="/Loginform"  element={<LoginForm />}/>
//         // <Route exact path="/Signup"  element={<Signup />}/>  */}


//                      {/* ----------------------------------    */}

//                      {/* <Route exact path="/Home"  element={<Home />}/>
// <Route exact path="/About"  element={<About />}/>
// <Route exact path="/RecipeList"  element={<RecipeList />}/>.
//   <Route exact path="/Register"  element={<Register />}/>.
//   <Route exact path="/Table"  element={<Table />}/>
//   <Route exact path="/Addrecipe"  element={<Addrecipe />}/>.
//   <Route exact path="/Viewrecipe"  element={<Viewrecipe />}/>
//   <Route exact path="/Viewrecipetable"  element={<Viewrecipetable />}/> */}

//                     </Routes>
           
//     </div>
//   )
// }

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Appbar from '../../User/components/Appbar';
import Register from '../../User/components/Register';
import TablePage from '../../User/components/RecipeList';
import Home from '../../User/components/Home';
import Addrecipe from '../components/Addrecipe';
import Viewrecipe from '../components/Viewrecipe';
import { Table } from '@mui/material';
import Viewrecipetable from '../components/Viewrecipetable';
import Login from '../components/Login';
import Loginform from '../components/LoginForm';
import Signup from '../components/Signup';
import SuggestionBox from '../components/SuggestionBox';
import CategoryList from '../components/CategoryList';
import CategoryRecipes from '../components/CategoryRecipes';
import RecipeList from '../../User/components/RecipeList';
import RecipeDetails from '../components/RecipeDetails';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import About from '../components/About';
// import Signup from '../components/Signup';

export default function UserRoute() {
  const location = useLocation();
  const noAppbarRoutes = ['/Register', '/LoginForm'];

  return (
    <div>
      {!noAppbarRoutes.includes(location.pathname) && <Appbar />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Recipelist" element={<TablePage />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Addrecipe" element={<Addrecipe />} />
        <Route exact path="/Viewrecipe" element={<Viewrecipe />} />
        <Route exact path="/Viewrecipetable" element={<Viewrecipetable />} />
        <Route exact path="/SuggestionBox" element={<SuggestionBox />} />
        <Route exact path="/Loginform" element={<Loginform />} />
        <Route exact path="/CategoryList" element={<CategoryList />} />
        <Route exact path="/RecipeList" element={<RecipeList />} />
        <Route path="/CategoryRecipe/:categoryId" element={<CategoryRecipes />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/Footer" element={<Footer />} />
        {/* <Route path="/Signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}
