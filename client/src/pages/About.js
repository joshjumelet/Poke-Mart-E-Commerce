const About = () => {
  return (
    <div className="about">
      <h1>About Poké Mart</h1>
      <span>
        <p>
          Poké Mart is a E-Commerce platform for purchasing items from the world
          of Pokémon. It was designed as a modern application that replicates a
          online store where a user can search through available products and
          make orders. To add to cart a user is required to create a User Auth
          account that offers security to their personal information.
        </p>
        <p>Please come again!</p>
      </span>
      <div className="about-us">
        <div className="Josh-profile">
          <img
            className="josh"
            src={'https://i.imgur.com/rtAwtJu.jpg'}
            alt=""
          />
          <a
            className="josh-git"
            href="https://github.com/joshjumelet"
            target="blank"
          >
            <img
              className="github"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/AjmoOeq.png"
              alt="github"
            />
          </a>
          <a
            className="josh-linkedIn"
            href="https://www.linkedin.com/in/joshua-jumelet/"
            target="blank"
          >
            <img
              className="linkedIn"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/N4ceP5A.png"
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
