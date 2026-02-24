<<<<<<< HEAD
=======
import { string } from 'prop-types';

>>>>>>> SIT
import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

<<<<<<< HEAD
=======
HelpBox.propTypes = {
  title: string,
  text: string,
};

>>>>>>> SIT
export default HelpBox;
