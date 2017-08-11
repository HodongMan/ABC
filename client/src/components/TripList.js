import React, {PureComponent} from 'react';


export default class TripList extends PureComponent{

    render(){

        return(

            <div className="container">
                <div className="row">
                <div className="col-mid-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">일정표 리스트</div>
                    </div>
                    <div className="panel-body">
                        <div className="list-group list-group-flush">
                            <button type="button" className="list-group-item">일정표 이름1</button>
                            <button type="button" className="list-group-item">일정표 이름2</button>
                            <button type="button" className="list-group-item">일정표 이름3</button>
                            <button type="button" className="list-group-item">일정표 이름4</button>
                            <button type="button" className="list-group-item">일정표 이름5</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
