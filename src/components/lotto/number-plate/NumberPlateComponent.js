import React, {Component} from 'react';
import "./NumberPlateComponent.css";
import NumberPlateBoxComponent from './NumberPlateBoxComponent';

class NumberPlateComponent extends Component {

    state = {
        selected : []
    }

    componentDidMount(){
        const {selected} = this.state;
        for(let i=1; i<47; i++){
            selected.push(false);
        } 
        this.setState({selected});
    }

    handleChange = (checked, number) => {
        console.log(number);
        const { selected } = this.state;
        selected[number-1] = checked;
        this.setState({selected});
    };

    render(){
        return(
            <div>
                <div className="number-plate-contents">
                    { this.state.selected.map((select, index) =>
                        <NumberPlateBoxComponent
                            key={index}
                            number={index+1}
                            selected={select}
                            handleChange={this.handleChange}
                        />
                    )}
                </div>
                <button className="number-button"> 버튼 생성</button>
            </div>
        );
    }
}
export default NumberPlateComponent;
