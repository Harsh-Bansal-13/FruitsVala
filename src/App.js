import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CreateContainer, Header, MainContainer} from './components';
import { AnimatePresence } from 'framer-motion';
import "D:/Fruit Wala/fruits-wala/src/";

const App = () => {
    return (
        <AnimatePresence >        
            <div className="w-screen h-auto flex flex-col bg-purple-100">
            <Header></Header>
            <main className='mt-24 p-6 md:mt-10 md:px-16 w-full '>
                <Routes>
                    <Route path="/*" element={<MainContainer/>}></Route>
                    <Route path="/createItem" element={<CreateContainer/>}></Route>
                </Routes>
            </main>
        </div>
        </AnimatePresence>

    )
};

export default App