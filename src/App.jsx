import React from "react";

const App = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-6">
          <div className="card custom-card">
            <div className="card-header justify-content-between">
              <div className="card-title">Light Buttons</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light">
                  Show Code
                  <i className="ri-code-line ms-2 d-inline-block align-middle"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="btn-list">
                <button
                  type="button"
                  className="btn btn-primary-light btn-wave waves-effect waves-light"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-secondary-light btn-wave"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-success-light btn-wave"
                >
                  Success
                </button>
                <button type="button" className="btn btn-danger-light btn-wave">
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-warning-light btn-wave"
                >
                  Warning
                </button>
                <button type="button" className="btn btn-info-light btn-wave">
                  Info
                </button>
                <button type="button" className="btn btn-purple-light btn-wave">
                  purple
                </button>
                <button type="button" className="btn btn-teal-light btn-wave">
                  teal
                </button>
                <button type="button" className="btn btn-orange-light btn-wave">
                  orange
                </button>
              </div>
            </div>
            <div className="card-footer d-none border-top-0">
              <pre className="language-html">
                <code className="language-html">
                  &lt;div className="btn-list"&gt; &lt;button type="button"
                  className="btn btn-primary-light
                  btn-wave"&gt;Primary&lt;/button&gt; &lt;button type="button"
                  className="btn btn-secondary-light
                  btn-wave"&gt;Secondary&lt;/button&gt; &lt;button type="button"
                  className="btn btn-success-light
                  btn-wave"&gt;Success&lt;/button&gt; &lt;button type="button"
                  className="btn btn-danger-light
                  btn-wave"&gt;Danger&lt;/button&gt; &lt;button type="button"
                  className="btn btn-warning-light
                  btn-wave"&gt;Warning&lt;/button&gt; &lt;button type="button"
                  className="btn btn-info-light btn-wave"&gt;Info&lt;/button&gt;
                  &lt;button type="button" className="btn btn-purple-light
                  btn-wave"&gt;purple&lt;/button&gt; &lt;button type="button"
                  className="btn btn-teal-light btn-wave"&gt;teal&lt;/button&gt;
                  &lt;button type="button" className="btn btn-orange-light
                  btn-wave"&gt;orange&lt;/button&gt; &lt;/div&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
