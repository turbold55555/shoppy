import React from 'react';
import  css from './_.module.css'
const Birds = () => (
    <div className={css.container}>
  <div className={ `${css.birdcontainerone} ${css.birdcontainer}`}  >
    <div className= {` ${css.birdone} ${css.bird}` } />
  </div>
  <div className={`${css.birdcontainer} ${css.birdcontainertwo}`}>
    <div className="bird bird--two" />
  </div>
  <div className={` ${css.birdcontainer} ${css.birdcontainerthree} `}>
    <div className={ `${css.bird} ${css.birdthree}`} />
  </div>
  <div className={ `${css.birdcontainer} ${css.birdcontainerfour} `} >
    <div className={ `${css.bird} ${css.birdfour}`} />
  </div>
</div>
)
export default Birds