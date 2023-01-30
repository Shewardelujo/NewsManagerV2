import React from 'react'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg btnColorr px-3 py-4">
          <img src="./favicon.ico" class="sizing" />
          

  <button
    class="navbar-toggler togglerColor"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white">Top Stories</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white">Read Later</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white">Current News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white">Old News</a>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link text-white dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          Categories
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item">Health</a>
          </li>
          <hr class="dropdown-divider" />
          <li>
            <a class="dropdown-item">Entertainment</a>
          </li>
          <hr class="dropdown-divider" />

          <li>
            <a class="dropdown-item">Business</a>
          </li>
          <hr class="dropdown-divider" />
          <li>
            <a class="dropdown-item">Technology</a>
          </li>
          <hr class="dropdown-divider" />
          <li>
            <a class="dropdown-item" >General</a>
          </li>
          <hr class="dropdown-divider" />
          <li>
            <a class="dropdown-item" >Science</a>
          </li>
          <hr class="dropdown-divider" />
          <li>
            <a class="dropdown-item">Sports</a>
          </li>
        </ul>
      </li>
    </ul>
    <form>
      <div class="d-flex justify-content-between input-field">
        <div class="col-9 d-flex align-items-center py-2">
          <span class="mx-3">
            <i class="fa-solid fa-magnifying-glass mute-color"></i>
                          </span>
                          <input class="w-75" style={{ background: "rgb(86, 24, 24);" }}
            type="text"
            placeholder="Search for a topic..."
            name="task"/>
        </div>
      </div>
    </form>
  </div>
</nav>

  )
}

export default Navbar