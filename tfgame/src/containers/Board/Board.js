import React, {Component} from "react";
import Cell from './Cell'
import './Board.less';


class Board extends Component {
    constructor(props) {
        super(props);

        let cellDefault = {
            opened: false,
            items: [],
            character: ''
        }
        let cells = [];

        for(let i=0; i<8; i++) {
            for(let k=0; k<8; k++) {
                cells.push(Object.assign({}, cellDefault, {x:i, y:k}));
            }
        }

        this.state = {
            loading: true,
            cells,
        }
    }


    componentDidMount() {

    }


    onClickCell = (num) => {
        console.warn("!!!!"+num);
        
    }

    

    render() {

        let cellViews = [];

        let n=0;
        for(let i=0; i<8; i++) {
            for(let k=0; k<8; k++) {
                cellViews.push(<Cell key={n} num={n} data={this.state.cells[n]} onClick={this.onClickCell} />);
                n++;
            }
        }


        return (
            <div className="board">
                {cellViews}
            </div>
        )


    }

  
}

export default Board 