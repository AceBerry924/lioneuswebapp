import React from "react";
import "./style.css";

class Email extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="main">
          <div className="container">
            <div className="ub_form">
              <div className="form-si-header">
                <img src={require("./logo.1.png")} alt="" />
                <h3>Welcome Asra Ghouri!</h3>
              </div>
              <div className="form-si-description">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="ub_form_buttons">
                <button type="submit" className="lio-btn lio-primary">
                  Lioneus Account
                </button>
              </div>
            </div>
            <div className="form-footer">
              <p>
                Replies to this email aren't monitored. If you have a question
                about your new account, the <a href="https://www.lioneus.com/help">Help Center</a> likely has the answer
                you're looking for.
              </p>
              <span>
                This email is sent to you because you created a Lioneus account.
              </span>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Email;
