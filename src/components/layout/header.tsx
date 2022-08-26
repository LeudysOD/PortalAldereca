import { Bounce } from 'react-awesome-reveal';

function Header() {
  return (
    <div className='container-fluid '>
      <div
        className='row d-flex bg-azul align-items-center'
        style={{ height: '100%' }}
      >
        <div className='col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center text-sm-center text-md-end text-lg-end text-xl-end'>
          <img
            src='/images/AlderecafullWhite.png'
            alt='Logo Aldereca'
            className='img-fluid mw-100 col-6'
            style={{ width: '140px' }}
          />
        </div>
        <div className='col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 text-center d-flex'>
          <div
            className='text-center text-sm-center text-md-start text-lg-start text-xl-start m-auto 
              col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2'
          >
            <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
              Portal Aldereca
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
