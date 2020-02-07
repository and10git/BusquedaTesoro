import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({ suplentes, eliminarSuplente }) => (
    <section>
        <h2>Suplentes</h2>
        <div>
            {
                suplentes.map(j => (
                    <article key={j.id} className='titular'>
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => eliminarSuplente(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    eliminarSuplente(jugador) {
        dispatch({ //creo objeto y lo recibo en el store
            type: 'ELIMINAR_SUPLENTE',
            jugador,
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
