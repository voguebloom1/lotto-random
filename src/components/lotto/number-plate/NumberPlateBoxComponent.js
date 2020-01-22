import React, {Component} from 'react';
import "./NumberPlateBoxComponent.css";

class NumberPlateBoxComponent extends Component {

    handleChange = (e) => {
        const { checked } = e.target;
        this.props.handleChange(checked, this.props.number);
    };
   
    render(){
        return(
            <div className="number-plate-box-contents">
                <div className="number-plate-box">
                    <input
                        type="checkbox"
                        checked={this.props.selected}
                        onChange={this.handleChange}
                    />
                    <span>{this.props.number}</span>
                </div>
            </div>
        );
    }
}
export default NumberPlateBoxComponent;
