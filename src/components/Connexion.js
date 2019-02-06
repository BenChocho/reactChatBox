import React from "react";

class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault();
        // Get pseudo
        const pseudo = this.pseudoInput.value;
        // Change URL
        this.context.router.transitionTo(`/pseudo/${pseudo}`);
    };

    render() {
        return (
            <div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
                <form className="connexion">
                    <input
                        type="text"
                        placeholder="Ton petit nom"
                        required
                        ref={(input) => {this.pseudoInput = input}}
                    />
                    <button>'Go !</button>
                </form>
            </div>
        )
    }

    static contextTypes = {
        router: React.PropTypes.object
    }
}

export default Connexion;
