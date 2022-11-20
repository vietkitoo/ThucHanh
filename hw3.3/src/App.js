import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  return (
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <ScrollIntoView selector={"#profile"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Profile
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#experience"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Experiences
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#ability"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Abilities
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#project"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Projects
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#contact"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Contact
                </button>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </nav>
     
      <div>
  <span style={{padding: '50px'}}>
    <div className="content">
      <img src="ava.jpg" width={190} height={220} />
      <div className="content-intro">
        <h2>Nguyễn Văn Quốc Việt</h2>
        <h2>CTTT</h2>
        <h2>ID: 19522518</h2>
        <h2>Deparment: Information System, UIT</h2>
        <ul type="square">
          <li><a href="https://github.com/vietkitoo"> Github</a></li>
          <li><a href="vietkitoo@gmail.com"> Gmail</a><a /></li><a>
          </a></ul><a>
        </a></div><a>
        <hr />
        <hr />
        <div>
          <h3>Subject and learning</h3>
          <ul>
            <li>Web application development</li>
            <li>Distributed database </li>
          </ul>
        </div>
        <hr />
        <div>
          <h3>Working experiece</h3>
          <div className="content-2">
            <div>
              <table border={1}>
                <tbody><tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Time</th>
                    <th>Role</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Netcompany</td>
                    <td>2020-2021</td>
                    <td>Internship</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>FTIS</td>
                    <td>2022-now</td>
                    <td>Researcher</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={3}>None</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        <div className="content-3">
          <h3>Projects</h3>
          <select name id>
            <optgroup label="PYTHON">
              <option value>Bigdata</option>
              <option value>Online store</option>
            </optgroup>
            <optgroup label="C#">
              <option value>Test</option>
              <option value>....</option>
            </optgroup>
          </select>
        </div>
        <div className="content-4">
          <h3>Leave a message for me &lt;3</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </a></div><a>
      <hr />
      <h3>Skills</h3>
      <div className="footer">
        <ul>
          <li>HTML/CSS</li>
          <li>React </li>
          <li>Python</li>
          <li>SQL </li>
        </ul>
      </div>
    </a></span><a>
  </a></div>

    </div>
  );
}

export default App;
