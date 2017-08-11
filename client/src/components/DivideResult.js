import React, {PureComponent} from 'react';

export default class DivideResult extends PureComponent{

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className=" col-md-6">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <tr>
                                    <th>멤버</th>
                                    <th>날짜</th>
                                    <th>쓴돈</th>
                                </tr>
                                <tr>
                                    <th rowSpan="numberOfUserSpent">user</th>
                                    <td>date</td>
                                    <td>money</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-6">
                            <div className="col-md-6">
                                <h3><b>멤버당 총 사용 금액</b></h3>
                                <p className="text-center">
                                    <b>user</b>&nbsp&nbsp&nbspsumOfIndividual 원<br />
                                </p>
                            </div>
                        <div className="col-md-6">
                            <h3><b>N분의 1</b></h3>
                            total원
                            <h4>/ numberOfUsers</h4>
                            <h2>  = total / numberOfUsers</h2>원
                        </div>
                    </div>
                    <div className="col-md-offset-6 col-md-6">
                        <h3><b>멤버계좌</b></h3>
                        <dl className="dl-horizontal">
                            <dt>user</dt>
                            <dd>account</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
