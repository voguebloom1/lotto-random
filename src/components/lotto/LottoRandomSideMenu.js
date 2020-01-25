import React, {Component} from 'react';
import "./LottoRandomSideMenu.css";
import NumberPlateComponent from './number-plate/NumberPlateComponent';

class LottoRandomSideMenu extends Component {
    render(){
        return(
            <div className="lotto-random-sidemenu">
                <NumberPlateComponent
                    selected={this.props.selected}
                    handleChange={this.props.handleChange}
                    handleButtonOnClick={this.props.handleButtonOnClick}
                />
            </div>
        );
    }
}
export default LottoRandomSideMenu;