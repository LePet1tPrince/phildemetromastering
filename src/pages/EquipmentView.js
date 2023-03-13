import React from 'react'
import BlankSpace from '../components/BlankSpace';
import EquipmentData from '../components/data/EquipmentData';
import Fade from 'react-reveal/Fade';


export default function EquipmentView() {
  
  return (
    <div className="bg-light">
  <Fade bottom>
    <div className="fullscreen delivery-cover-image">
      <BlankSpace/>
      <div className="text-center font-72 bold pb-3 mb-3 bg-secondary">Equipment</div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly">

      {EquipmentData.map(item => {
        return <div key={item.id} className=" m-2 px-2 py-3  bg-primary bg-opacity-75 rounded-4 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" >
                    <h1 className="text-center card-title fs-1 text-dark bold">{item.title}</h1>
                    <div className=" row">{item.list.map(listitem => {
                      return <p className=" py-2 px-4 text-center rounded text-center text-dark bg-transparent fs-4 col-auto">{listitem}</p>})}
                      </div>
                  </div>
      })}
      </div>
      </div>

      
    </div>
      </Fade>
      </div>
  )
}