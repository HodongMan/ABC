import React, {PureComponent} from 'react';


export default class Nav extends PureComponent{

    render(){

        return(
        <div>
            <nav className="navbar navbar-default" role="navigation">
                <a href="#" className="navbar-brand">TRIP</a>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">일정보기</a></li>
                        <li><a href="#">비용보기</a></li>
                        <li><a href="#">menu3</a></li>
                    </ul>
                </div>
            </nav>
            {this.props.children}
        </div>
        );
    }
}
