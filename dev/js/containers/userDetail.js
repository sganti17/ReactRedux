import React, {Component} from "react";
import {connect} from "react-redux";

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(
                    <div>
                        <h4>
                        Select a User...
                        </h4>
                    </div>
                    );
        }
        return(
                <div>
                    <h4> Type: {this.props.user.type}</h4>
                    <img src={this.props.user.thumbnail}/>
                </div>
              );
    }
};

function mapStateToProps(state){
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);