import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import UserProfileContainer from './containers/UserProfileContainer';
import DependentContainer from './containers/DependentContainer';
import AddNewComponent from './components/AddNewComponent';

const App = () => {
  return (
    <div>
      {/* <p>Michael was up in here!</p>
      <p>This is Reem</p>
      <p>Hello Guys Bongi</p> */}
      <main>
        <MainContainer />

        <Routes>
          <Route path="/" element={<UserProfileContainer />} />
          <Route path="user" element={<UserProfileContainer />} />
          <Route path="dependent/:id" element={<DependentContainer />} />
          <Route path="addnew" element={<AddNewComponent />} />
        </Routes>

        {/* </MainContainer> */}
      </main>
    </div>
  );
};

export default App;
