import React from 'react'
import './SectionSobre.css'

function SectionSobre() {
  return (
    <section className='container-fluid'>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-4 sobre-texto'>
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolorum autem veritatis officiis, eius ipsam repudiandae quis voluptates sit non minus laborum ipsa commodi consequatur. Ipsam expedita soluta iusto accusantium!
            Natus animi repudiandae, dolorum fugit facere deleniti veritatis? Et assumenda fugiat totam accusantium necessitatibus nesciunt tempora aut vel nobis. Maxime vero illo quod non? Aperiam eius voluptatum ipsa iusto exercitationem?
            Amet possimus consequuntur fugiat itaque assumenda impedit, nulla, doloremque illum inventore fuga quos atque quam fugit. Nobis reiciendis libero corrupti perspiciatis enim eligendi debitis ipsam eius blanditiis? Explicabo, temporibus aliquam.
            </p>
        </div>
        <div className='col-1'></div>
        <div className='col-3 sobre-img-holder'><img src='https://via.placeholder.com/200'/></div>
        <div className='col-2'></div>
      </div>
    </section>
  )
}

export default SectionSobre