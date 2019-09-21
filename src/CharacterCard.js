import React ,{Component} from 'react'
export default class CharactorCard extends React.Component{
    render(){
        return(
            <div>
                {this.props.value}
            </div>
        )
    }
}