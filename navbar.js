const port = 3000;
const ip = "127.0.0.1";

const nav=`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Js Web</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Login</a>
                    </li>
                  </ul>
                <form class="pe-auto">
                    <select name="lang" class="form-select">
                        <option selected>Language</option>
                        <option value="en">English</option>
                        <option value="zh">中文</option>
                    </select>
                    <button class="btn btn-outline-success" type="submit">Submit</button>
                </form>
              </div>
            </nav>
`
document.write(nav)