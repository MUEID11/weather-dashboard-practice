import logoImage from './../../assets/logo.svg'

const Logo = () => {
  return (
    <a>
      <img className="h-9" src={logoImage} alt='weather app' />
    </a>
  );
};

export default Logo;