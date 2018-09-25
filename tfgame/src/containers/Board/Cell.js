import React, {Component} from "react";
import './Cell.less';

class Cell extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        
        const { data } = this.props;

        return (
            <div className="cell" onClick={() => this.props.onClick(this.props.num)}>
                {data.opened ? null: <div className="cardback"></div>}
            </div>
        )


    }

  
}

export default Cell 