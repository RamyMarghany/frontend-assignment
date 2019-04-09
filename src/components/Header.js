import React, {useState} from 'react'
import {Icon} from 'antd'

import logo from '../assets/images/carrefour.svg'

const Header = () => {
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <div className="header">
    <div className="row">
      <div className="col-sm-6 col-xs-12">   
        <img src = {logo} className="header__logo" alt="carrefour"/>
      </div>
      <div className="col-sm-6 col-xs-12">
        <div className="header__search float-sm-right">
          {displaySearch &&
            <>
              <input type="text" className="header__input"/>
              <Icon type="close" className="header__icon" onClick={() => setDisplaySearch(!displaySearch)}/>
            </>
          }
          {!displaySearch && <Icon type="search" className="header__icon" onClick={() => setDisplaySearch(!displaySearch)}/>}
          </div>
       </div>
      </div>
    </div>
  )
}

export default Header