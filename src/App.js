// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import AdminRoute from './Modules/Admin/Route/AdminRoute';
// import UserRoute from './Modules/User/Route/UserRoute';
// import ClippedDrawer from './Modules/Admin/components/ClippedDrawer'; // Ensure this is correct




// function App() {
//   return (
//     <div className="App">
// <BrowserRouter>

// <Routes>
// <Route exact path="/admin/*"  element={<AdminRoute />}/>
// <Route exact path="/*"  element={<UserRoute />}/>

// </Routes>
// </BrowserRouter>


    
//      {/* <Register />
//      <Table/> */}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoute from './Modules/Admin/Route/AdminRoute';
import UserRoute from './Modules/User/Route/UserRoute';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' based on your theme preference
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminRoute />} />
            <Route path="/*" element={<UserRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
