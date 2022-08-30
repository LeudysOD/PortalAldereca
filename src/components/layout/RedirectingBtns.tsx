import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faTicket,
  faCheck,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

const date = new Date();
const year = date.getFullYear();

const RedirectingBtns = () => {
  return (
    <div className='container my-3 p-3 rounded w-100'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 m-auto'>
          <div className='d-flex justify-content-center flex-column'>
            <a
              className='btn-lg btn-a text-white button rounded mb-1'
              href='http://tickets.aldereca.com.do:3000/'
            >
              <FontAwesomeIcon
                icon={faTicket}
                className='me-2'
              ></FontAwesomeIcon>
              Sistema de tickets
            </a>

            <a
              className='btn-lg btn-a text-white button rounded mb-1'
              href='https://sistema.aldereca.com.do/'
            >
              <FontAwesomeIcon
                icon={faCartPlus}
                className='me-2'
              ></FontAwesomeIcon>
              Sistema de ventas
            </a>

            <a
              className='btn-lg btn-a text-white button rounded mb-1'
              href='!#'
            >
              <FontAwesomeIcon
                icon={faCheck}
                className='me-2'
              ></FontAwesomeIcon>
              Sistema de aprobaciones
            </a>

            <a
              className='btn-lg btn-a text-white button rounded mb-1'
              href='!#'
            >
              <FontAwesomeIcon icon={faPen} className='me-2'></FontAwesomeIcon>
              Solicitud de proyectos
            </a>

            <div className='btn-group'>
              <button
                type='button'
                className='button-others dropdown-toggle btn-lg w-100 '
                data-bs-toggle='dropdown'
                aria-expanded='false'
                id='dropdownMenuButton1'
              >
                Otras opciones
              </button>
              <ul
                className='dropdown-menu '
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a className='dropdown-item' href='https://aldereca.com'>
                    Pagina web
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-auto mt-5'>
          <footer className='text-center text-white fixed-bottom'>
            <div className='text-center p-3  first-div'>
              <p className='m-0'>
                © {year} Copyright: Almacen de Repuestos Aldereca
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RedirectingBtns;
