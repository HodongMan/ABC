import React, {PureComponent} from 'react';

export default class ScheduleForm extends PureComponent{

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6"> <h4><strong>새 일정표 만들기</strong></h4>
	                   <form className="form-group">
  		                   <div className="form-group">
   			                     <label htmlFor="exampleInputName">일정표이름</label>
    			                 <input type="text" className="form-control" id="exampleInputName" />
  		                   </div>

  		                   <div className="form-group"><strong>출발하는날</strong>
    			                <input id="inpStartDate" className="btn btn-default" type="date" />
		                   </div>
 		                   <div className="form-group"><strong>도착하는 날</strong>
   			                     <input id="inpEndDate" className="btn btn-default" type="date" />
                           </div>
	                   </form>
	                </div>
                    <div className="col-md-6"><h4> <strong>여행가는 멤버 및 역할 </strong></h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <h5>멤버</h5>
                                    <input type="text" className="form-control" aria-label="..." />
                                    <input type="text" className="form-control" aria-label="..." />
                                    <input type="text" className="form-control" aria-label="..." />
                                    <input type="text" className="form-control" aria-label="..." />
                                </div>

                            <div className="row">
                                <div className="col-md-4"></div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn btn-default btn-md">
                                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
     	                    <button type="button" className="btn btn-primary btn-lg" onclick="">일정표 만들기</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
