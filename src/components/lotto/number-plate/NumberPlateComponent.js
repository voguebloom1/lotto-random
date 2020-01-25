import React, {Component} from 'react';
import "./NumberPlateComponent.css";
import NumberPlateBoxComponent from './NumberPlateBoxComponent';

class NumberPlateComponent extends Component {

    render(){
        return(
            <div>
                <div className="number-plate-contents">
                    { this.props.selected.map((select, index) =>
                        <NumberPlateBoxComponent
                            key={index}
                            number={index+1}
                            selected={select}
                            handleChange={this.props.handleChange}
                        />
                    )}
                </div>
                <button className="number-button" onClick={this.props.handleButtonOnClick}>번호 생성</button>
            </div>
        );
    }
}
export default NumberPlateComponent;
