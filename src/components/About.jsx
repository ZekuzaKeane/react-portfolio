import icon from '../assets/images/icon.png';

function About() {
    return (
      <section className="my-5">
        <div className="my-2">
          <div className="profile-img my-5">
          <img src={icon} width="300"></img>
          </div>
          <p>
          Zachary "Zekuza" Mercer is a 21 year old freelance full-stack web developer, storywriter, streamer, and so much more based out of Winter Garden, FL.   
          </p>
          <p>
          I've tried being many things, but coding has always seemed like an impossible endeavor for me - until now! Through a UCF Bootcamp, I will be learning the ins and outs of Full-Stack Development, finally able to put my ideas to paper.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;