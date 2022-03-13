import photo from "../Images/myphoto.jpg";

const Header = () => {
  return (
    <div>
      <div>
        <img className="photo" src={photo} alt="priyansh.png" />
      </div>
      <div className="name">
        <h2>Priyansh Singh</h2>
        <h3>Frontend Developer</h3>
      </div>
      <div className="header-button">
        <button>
          <i class="fa fa-envelope"> Email </i>
        </button>
        <button className="linkedin">
          <i class="fa fa-linkedin-square"></i> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Header;
