import './Header.css'

const Header = () => {
    

    return (
        <header className='container-fluid'>
            <div className='row g-0'>
                <div className='col-1'></div>
                <div className='col-10 header-main'>
                    <img src='https://via.placeholder.com/160x80?text=Logo'/>
                    <nav>
                        <ul>
                            <li>Sobre</li>
                            <li>Clientes</li>
                            <li>Contato</li>
                            <li><button className='btn-login'>Login</button></li>
                        </ul>
                    </nav>
                </div>
                <div className='col-1'></div>
            </div>
        </header>
    )
}

export default Header