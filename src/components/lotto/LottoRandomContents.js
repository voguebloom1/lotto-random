import React, {Component} from 'react';
import "./LottoRandomContents.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';

class LottoRandomContents extends Component {
    render(){

        const {lottoNumbers} = this.props;
        
        return(
            <div className="lotto-random-contents">
                {lottoNumbers.map((lottoNumber, i) => 
                <LottoBoxComponent
                key={i}
                lottoNumber={lottoNumber}
                />)}
                

            </div>
        );
    }
}
export default LottoRandomContents;
