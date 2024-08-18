import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Registration from './Pages/Registration.jsx'
import ChenalPage from './Pages/ChenalPage.jsx'
import SingleChenal from './Pages/SingleChenal.jsx'
import VedioPage from './Pages/VedioPage.jsx'
import Upload from './Pages/UploadVideo.jsx'
import Histroy from './Pages/Histroy.jsx'
import ForgotPassword from './Pages/ForgotPassword.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Category from './Pages/Category.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import Download from './Pages/Download.jsx'
import VedioList from './Pages/VedioList.jsx'
import Music from './Pages/Music.jsx'
import { Protected } from './Protected.jsx'
import ProfileUpdate from './Pages/ProfileUpdate.jsx'
import SHome from './Shubham-Comp/SHome.jsx'
import RHome from './Shubham-Comp/RHome.jsx'
import CreateChannel from './Pages/CreateChannel.jsx'
import SCreateChannel from './Shubham-Comp/SCreateChannel.jsx'
import Settings from './Pages/Settings.jsx'
import SUploadVedio from './Shubham-Comp/SUploadVideo.jsx'
import SProfileUpdate from './Shubham-Comp/SProfileUpdate.jsx'
import MyChannel from './Pages/MyChannel.jsx'
import MusicPage from './Pages/MusicPage.jsx'
import UploadVideo from './Pages/UploadVideo.jsx'
import UploadMusic from './Pages/UploadMusic.jsx'


const loginStatus  = (()=>{
  let status  = localStorage.getItem('logedUser')
  console.log("loginStatus", status);
  if(status){
    return true
  }else{
    return false
  }

 
})



const router = createBrowserRouter(createRoutesFromElements(


    <Route path="/" element={<Layout />} >
     
       <Route path="" element={<Home />} />
       <Route path="login" element={<Login />} />
       <Route path="registration" element={<Registration />} />
       <Route path="forget-pass" element={<ForgotPassword />} />
       <Route path="page-not-found" element={<ErrorPage />} />
       <Route path="categories" element={<Category />} />
       <Route path="vedio-play" element={<Protected ComponentName = {VedioPage} />} />
       <Route path="musics" element={<Protected ComponentName = {Music} />} />
       <Route path="music-page" element={<Protected ComponentName = {MusicPage} />} />


   
 

   
       
    

       <Route path="update-profile" element={<SProfileUpdate />} />
       <Route path="chenals" element={<ChenalPage />} />
 
       <Route path="single-channel-page" element={<Protected ComponentName = {SingleChenal} />} />
       <Route path="upload_video" element={<Protected ComponentName = {UploadVideo} /> } />
       <Route path="upload_music" element={<Protected ComponentName = {UploadMusic} /> } />
 
       <Route path="history" element= {<Histroy />}  />

       <Route path="create-channel" element={<Protected ComponentName = {SCreateChannel} /> } />
       <Route path="my-channel" element={<Protected ComponentName = {MyChannel} /> } />
       {/* <Route path="create-channel" element={<Protected ComponentName = {CreateChannel} /> } /> */}
       <Route path="profile" element={<Protected ComponentName = {ProfilePage} /> } />
       <Route path="profile-update" element={<Protected ComponentName = {ProfileUpdate} /> } />
       <Route path="settings" element={<Protected ComponentName = {Settings} /> } />
       <Route path="downloads" element={<Download />} />

       <Route path='*' element={<ErrorPage />} />


   </Route>
  
  

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
    
  </React.StrictMode>,
)
