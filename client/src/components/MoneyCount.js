import React, {PureComponent} from 'react';



export default class MoneyCount extends PureComponent{

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="dateList col-md-3">
                        <table className="table">
                            <tr>
                                <th className="text-center"> 날짜 <button type="button" className="btn btn-default pull-right">+</button></th>
                            </tr>
                            <tr>
                                <td> date</td>
                            </tr>
                        </table>
                    </div>
                    <div className=" col-md-9">
                        <div className="table-responsive">
                            <table className="table table-hover">
                            <tr>
                                <th>돈 낸 사람</th>
                                <th>내용</th>
                                <th>금액</th>
                            </tr>
                            <tr>
                                <td className="dropdown">
                                    <button className="btn btn-default dropdown-toggle" type="button" data-role="dropdown">
                                        사용자 목록<span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li>user</li>
                                    </ul>
                                </td>
                                <td>content</td>
                                <td>amount</td>
                                <td>number</td>
                                <td>sum</td>
                            </tr>
                            <tr>
                                <td className="dropdown">
                                    <a className="dropdown-toggle" data-role="dropdown">사용자 목록<span className="caret"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li>user</li>
                                    </ul>
                                </td>
                                <td>content</td>
                                <td>amount</td>
                                <td>number</td>
                                <td>sum</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <h1>오늘의 총합 : TotalToday 원</h1>
                        <button className="btn btn-primary btn-lg col-md-9">돈나누기</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
