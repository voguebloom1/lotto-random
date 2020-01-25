import React, {Component} from 'react';
import "./LottoBoxComponent.css";

class LottoBoxComponent extends Component {
    
    render(){
        const numbers = this.props.lottoNumber.slice(0,6);
        const b_number = this.props.lottoNumber[6];
        return(
            <div className="lotto-box-contents">
                <div className="lotto-box">
                    {numbers.map((n,i)=>
                        <div 
                            className="lotto-box-number"
                            key={i}
                        >{n}</div>
                    )}
                    <div className="lotto-box-plus">+</div>
                    <div className="lotto-box-number">{b_number}</div>
                </div>
            </div>
        );
    }
}
export default LottoBoxComponent;
