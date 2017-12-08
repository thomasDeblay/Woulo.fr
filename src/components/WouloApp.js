import React from 'react';
import Header from './Header';
import Action from './Action';
import AddWoulo from './AddWoulo';
import PrintWoulo from './PrintWoulo';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import BestWoulos from './BestWoulos';



export default class WouloApp extends React.Component {
    state = {
        Woulos: [],
        selectedWoulo: undefined
    };

    handleSelecWoulo = () => {
        this.setState(() => ({ selectedWoulo : undefined }));
    }

    handlePick = () => {
            const randomNum = Math.floor(Math.random() * this.state.Woulos.length);
            const Woulo = this.state.Woulos[randomNum];
            this.setState(() => ({
                selectedWoulo: Woulo
            }));
    };

    handleAddWoulo = (Woulo) => {
        if(!Woulo){
            return 'Enter valid value to add item';
        }
        else if(this.state.Woulos.indexOf(Woulo) > -1){
            return 'this item already exist';
        }

        this.setState((prevState) => ({Woulos : prevState.Woulos.concat(Woulo)}));


    };

    componentDidMount(){
        try{
            const json = localStorage.getItem('Woulos');
            const Woulos = JSON.parse(json);

            if(Woulos){
                this.setState(() => ({ Woulos: Woulos }));
            }
        } catch(x){

        }
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.Woulos.length !== this.state.Woulos.length){
            const json = JSON.stringify(this.state.Woulos);
            localStorage.setItem('Woulos', json);
        }
    };

    componentWillUnmount(){
        console.log('componentWillUnmount');
    };

    render(){
        const subtitle = ' Génère les meilleurs Woulo en appuyant sur le bouton si dessous, et chante les pour enflammer la soirée ! ';
        return (
        <div>
        <Nav />
        <section id="hero" className="hero hero-home bg-gray">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-6 text order-2 order-lg-1">
            <Header   subtitle={subtitle} />
            <Action
            hasWoulos={this.state.Woulos.length > 0}
            handlePick={this.handlePick}
            />
            </div>
             <div className="col-lg-6 order-1 order-lg-2"> <PrintWoulo
             selectedWoulo={this.state.selectedWoulo}
             handleSelecWoulo={this.handleSelecWoulo}
             /> </div>
          </div>
        </div>
      </section>
      <BestWoulos />
      <Footer />




        
            
            <div className="container" >
            
            
           <AddWoulo
           handleAddWoulo = {this.handleAddWoulo}
           />
           </div>
        </div>
        );
    }
}

WouloApp.defaultProps = {
    Woulos: []
}
