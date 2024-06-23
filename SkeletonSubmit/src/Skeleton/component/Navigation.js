import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
        <div className="text-wrapper">Site name</div>
        <div className="element-search-input">
          <img className="search" alt="Search" src={`${process.env.PUBLIC_URL}/images/search.svg`} />
          <div className="label">Search</div>
        </div>
        <div className="user">
          <div className="overlap-group">
            <div className="element-profile-avatar">
              <div className="graphic" />
            </div>
            <div className="items">
              <button className="button">
                <div className="div">Name</div>
                <img className="polygon" alt="Polygon" src={`${process.env.PUBLIC_URL}/images/Polygon.png`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navigation;