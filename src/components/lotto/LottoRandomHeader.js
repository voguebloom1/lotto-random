import React, {Component} from 'react';
import "./LottoRandomHeader.css";

class LottoRandomHeader extends Component {
    render(){
        return(
            <div className="lotto-random-header">
                <div className="lotto-title">
                    로또 랜덤 번호 생성기
                </div>
            </div>
        );
    }
}
export default LottoRandomHeader;