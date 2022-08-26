import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faTicket,
  faCheck,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';
const RedirectingBtns = () => {
  return (
    <div className='container my-3  p-3 form-wrapper rounded w-100'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-auto'>
          <div className='align-items-center'>
            {/*  <h4 className='text-center pt-3'>Menu de opciones</h4> */}
            <div className='d-flex justify-content-center '>
              <div className='d-grid gap-2 col-6 mx-auto'>
                <a
                  className='button btn-lg btn-a'
                  href='http://tickets.aldereca.com.do:3000/'
                >
                  <span></span>
                  <FontAwesomeIcon
                    icon={faTicket}
                    className='me-2'
                  ></FontAwesomeIcon>
                  Sistema de tickets
                </a>

                <a
                  href='https://sistema.aldereca.com.do'
                  className='button   btn-lg'
                >
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className='me-2'
                  ></FontAwesomeIcon>
                  Sistema de ventas
                </a>

                <a href='#!' className='button  btn-lg'>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='me-2'
                  ></FontAwesomeIcon>
                  Sistema de aprobaciones
                </a>

                <a href='#!' className='button btn-lg'>
                  <FontAwesomeIcon
                    icon={faPen}
                    className='me-2'
                  ></FontAwesomeIcon>
                  Solicitud de proyectos
                </a>

                <button
                  className='button-others dropdown-toggle btn-lg'
                  type='button'
                  id='dropdownMenuButton1'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Otras opciones
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton1'
                >
                  <li>
                    <a className='dropdown-item' href='https://aldereca.com'>
                      Pagina web
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#!!'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectingBtns;
