import React from "react";
import "./Contact.css"

const Contact = () => (

<React.Fragment>
    <div className="contact-info">
      <h2>The Author</h2>
      <table>
        <tbody>
          <tr>
            <th>Details</th>
            <th><img src="email_logo.png" height="50" width="50" alt="email logo"/></th>
            <th><img src="Github-Logo.png" height="50" width="50" alt="github logo"/></th>
          </tr>
          <tr>
            <td>Cleyra Uzcategui</td>
            <td><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">cleyra.uzcategui@gmail.com</a></td>
            <td><a href="https://github.com/Cleyrauz">https://github.com/Cleyrauz</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <footer>
      <p className="copyright">&copy; Continuum 2018</p>
    </footer>

  </React.Fragment>

);

export default Contact;
