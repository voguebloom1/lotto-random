import React, {Component} from 'react';
import "./LottoRandomSideMenu.css";
import NumberPlateComponent from './number-plate/NumberPlateComponent';

class LottoRandomSideMenu extends Component {
    render(){
        return(
            <div className="lotto-random-sidemenu">
                <NumberPlateComponent/>
            </div>
        );
    }
}
export default LottoRandomSideMenu;