import './footer.css';
const Footer = () => {
  return (
    <>
      <footer className='text-center text-white fixed-bottom'>
        <div className='container p-1'></div>

        <div className='text-center p-3  first-div'>
          © 2022 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            Almacen de repuestos aldereca
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
