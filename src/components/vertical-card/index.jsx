import React from 'react'

const VerticalCard = () => {
  return (
    <div class="card h-100">
  <img
    src=""
    onerror="this.src='assets/Images/newsIm.jpg';"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <p class="text-muted mb-1">
      source name
    </p>
    <h5 class="card-title">
      <a
        href=""
        class="text-dark text-decoration-none text-underline-hover"
      >
        News title
      </a>
    </h5>

    <p class="card-text">News title</p>
    <p class="card-text my-3 text-muted">
     Date published
    </p>
  </div>
  <div class="card-footer bg-white border-top-0">
    <a class="btn mb-2 btnColor">Read Later</a>
  </div>
</div>

  )
}

export default VerticalCard