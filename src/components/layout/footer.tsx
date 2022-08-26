const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer className='text-center text-white fixed-bottom'>
        <div className='text-center p-3  first-div'>
          <p className='m-0'>
            © {year} Copyright: Almacen de Repuestos Aldereca
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
