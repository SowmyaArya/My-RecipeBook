// import React from 'react'
// import Box from '@mui/material/Box';
// import { Routes, Route } from 'react-router-dom'
// import ClippedDrawer from '../components/ClippedDrawer';

// import Dashboard from '../components/Dashboard';
// import AdminLogin from '../components/AdminLogin';

// export default function AdminRoute() {
//   return (
//     <div>
       
//   <Box sx={{ display: 'flex' }}>
            
//                 <Box component="main" sx={{ flexGrow: 1, p: 3,background:'#f0f1f6' }}>
             
                    
//                     <Routes>

//                         {/* <Route exact path="/" element={<ClippedDrawer />} /> */}
//                         <Route exact path="/" element={<AdminLogin/>} />

//                         <Route exact path="/ClippedDrawer" element={<ClippedDrawer />} />
//                         {/* <Route exact path="/Add-Catgeory" element={<Manage Category />} />
//                         <Route exact path="/view-chapter/:id" element={<ViewChapters />} />
//                         <Route exact path="/update-course/:id" element={<UpdateCourse />} />
//                          */}

//                     </Routes>
//                 </Box>

//             </Box>

//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ClippedDrawer from '../components/ClippedDrawer';
import Dashboard from '../components/Dashboard';
import AdminLogin from '../components/AdminLogin';
import AddCategory from '../components/AddCategory';
import ViewCategory from '../components/ViewCategory';
import AddRecipe from '../components/Addrecipe';
import ViewRecipe from '../components/Viewrecipe';
import Tables from '../components/Table';
import ViewSuggestion from '../components/ViewSuggestion';

const AdminRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('AdminToken');
        if (token) {
            setIsLoggedIn(true);
        }else{
            navigate('/admin/AdminLogin')
        }
    }, []);

    if (!isLoggedIn) {
        return (
            <Routes>
                <Route path="/AdminLogin" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />
                {/* Add any other routes that should be accessible before login */}
            </Routes>
        );
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <ClippedDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#f0f1f6' }}>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/addcategory" element={<AddCategory />} />
                    <Route path="/viewcategory" element={<ViewCategory />} />
                    <Route path="/addrecipe" element={<AddRecipe />} />
                    <Route path="/viewrecipe" element={<ViewRecipe />} />
                    <Route path="/manageuser" element={<Tables />} />
                    <Route path="/managesuggestion" element={<ViewSuggestion />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default AdminRoute;
