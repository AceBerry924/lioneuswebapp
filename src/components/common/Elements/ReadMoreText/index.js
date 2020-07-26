import React from 'react'
import { Link } from 'react-router-dom'

const MAX_LENGTH = 40;
export default class Text extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { text } = this.props;

    return (
      <div>
        {text.length > MAX_LENGTH ? (
          <div>
            {`${text.substring(0, MAX_LENGTH)}...`}
            <Link to={"/product/" + this.props.product}>Read more</Link>
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
    );
  }
}