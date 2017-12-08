import React from 'react';


export default class AddWoulo extends React.Component {
    state = {
        error: undefined
    };

    handleAddWoulo = (x) => {
        x.preventDefault();

        const Woulo = x.target.elements.Woulo.value.trim();
        const error = this.props.handleAddWoulo(Woulo);

        this.setState(() => ({ error }));

        if(!error){
            x.target.elements.Woulo.value = '';
        }

    };


    render(){
        return (
            <div>
                {this.state.error && <p className="add-Woulo-error" > {this.state.error} </p>}
                <form className="add-Woulo" onSubmit={this.handleAddWoulo}>
                <input className="add-Woulo__input" type="text" name="Woulo"/>
                <button className="button" >Add Woulo</button>
                </form>
            </div>
        );
    }
}
