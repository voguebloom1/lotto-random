import React, {Component} from 'react';
import LottoRandomHeader from './lotto/LottoRandomHeader';
import LottoRandomSideMenu from './lotto/LottoRandomSideMenu';
import LottoRandomContents from './lotto/LottoRandomContents';

import "./LottoRandomTemplate.css"

class LottoRandomTemplate extends Component {
    render(){
        return(
            <div className="lotto-random-template">
                <LottoRandomHeader/>
                <div className="lotto-random-main">
                    <LottoRandomSideMenu/>
                    <LottoRandomContents/>
                </div>
            </div>
        );
    }
}

export default LottoRandomTemplate;