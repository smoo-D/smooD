import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/layout/footer';
import Header from './components/layout/header';
import MenuOpenPage from './components/pages/menuOpenPage';
import Mainpage from './components/pages/mainPage';
import Custompage from './components/pages/Custompage';
import Loginpage3 from './components/pages/loginPage';
// import TestPage2 from './components/pages/testPage2';
import './test.css';
const App = (): JSX.Element => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '테스트',
    '/home': '홈',
  };
  React.useEffect(() => {
    // switch (location.pathname) {
    //     case "/" :
    //         setPageTitle("테스트");
    //     break;
    //     case "/home" :
    //         setPageTitle("홈")
    // }
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <div>
      <Header title={pageTitle} />
      <Routes>
        <Route path="/" element={<MenuOpenPage/>} />
        {/* <Route path="/test" element={<TestPage2 />} /> */}
        <Route path="/" element={<Mainpage />} />
        <Route path="/custom" element={<Custompage />} />
        <Route path="/login" element={<Loginpage3 />} />
      </Routes>
    </div>
  );
};

export default App;
