import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({ titulares, eliminarTitular }) => (
    <section>
        <h2>Titulares</h2>
        <div>
            {
                titulares.map(j => (
                    <article key={j.id} className='titular'>
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => eliminarTitular(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    eliminarTitular(jugador) {
        dispatch({ //creo objeto y lo recibo en el store
            type: 'ELIMINAR_TITULAR',
            jugador,
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);