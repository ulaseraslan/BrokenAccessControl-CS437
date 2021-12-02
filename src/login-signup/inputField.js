import React from 'react';


class Inputfield extends React.Component {
    render(){
        return (
            <div className="inputField">
                <input
                    className='input2'
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={(e)=> this.props.onChange(e.target.value)}
                />
            </div>
        );
    }
}

export default Inputfield;