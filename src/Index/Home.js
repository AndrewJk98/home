import React from 'react';

function Home(){
    return (
        <section className="layout">
          <div className="header">
            <h1>
              Preguntas frecuentes - ETS
            </h1>
            <div>
              <button href='' type='submit'>
                Estoy suscrito
              </button>
              <div>
              <img className='logo' src={require('../img/logo.png')}/>
              </div>
            </div>
          </div>

          <div className="main">
            <div>
              <img className='banner' src={require('../img/banner.jpg')} />
            </div>
            <div className='pregunta1'>
              <h2>¿Cómo cuidarme de una ETS?</h2>
              <p>-Usa protección: Utiliza condones o barreras de protección en todas las relaciones sexuales.</p>
              <p>-Sé monógamo: Mantén una relación monógama y a largo plazo con una pareja que esté libre de ETS.</p>
              <p>-Realiza pruebas: Hazte pruebas regulares si eres sexualmente activo y, si eres diagnosticado con una ETS, sigue el tratamiento adecuado.</p>
              <p>-Educa: Infórmate sobre ETS y practica relaciones sexuales seguras.</p>
              <p>Comunicación: Habla abiertamente con tu pareja sobre el historial sexual y la prevención de ETS.</p>
            </div>
            <div className='pregunta2'>
                <h2>¿Cómo saber si tengo ETS?</h2>
                <p>-Para saber si tienes una ETS (Enfermedad de Transmisión Sexual), debes realizarte pruebas médicas 
                  específicas en un centro de salud o clínica. No es posible determinarlo por síntomas, ya que algunas 
                  ETS pueden ser asintomáticas. Si tienes preocupaciones, consulta a un profesional de la salud y 
                  considera hacerse pruebas regularmente, especialmente si eres sexualmente activo.</p>
            </div>
            <div>
              <img className='banner2' src={require('../img/banner2.jpg')} />
            </div>
              <div className='pregunta3'>
                <h2>¿Qué pasa si mi pareja tiene ETS?</h2>
                <p>-Ambos deben hacerse la prueba.</p>
                <p>-Utilicen protección, como condones, para prevenir la transmisión.</p>
                <p>Consulten a un profesional de la salud para obtener tratamiento si es necesario.</p>
                <p>Comuniquen abiertamente su situación y sigan las recomendaciones médicas para proteger su salud y prevenir la propagación.</p>
              </div>
          </div>
          <div className="footer">
            <div className='contactanos'>
                <h3>Contactanos</h3>
                <a href=''>
                    <img className='logos' src={require('../img/fb.png')}/>
                </a>
                <a href=''>
                    <img className='logos' src={require('../img/tw.png')}/>
                </a>
                <a href=''>
                    <img className='logos' src={require('../img/ig.png')}/>
                </a>
            </div>
            <div className='hacemos'>
                <h3>¿Que hacemos?</h3>
                <p>Nosotros somos una empresa como primaria instancia para calcular
                    <br/>
                    el estado de nuestros clientes que cuentan con dudas sobre si
                    <br/> 
                    tienen los primeros sintomas de una ETS, por lo que ayudamos
                    <br/>
                    con consejos y ayuda profesional de manera online
                </p>
            </div>
            <div className='conocenos'>
                <h3>¿Quieres conocernos?</h3>
                <p>Ven a nuestra sede en Jr Carabaya 2198, 
                <br/>Centro de lima, Lima</p>

            </div>
          </div>
        </section>
        );
}

export default Home;