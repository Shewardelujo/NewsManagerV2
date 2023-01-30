import React from 'react'

const HorizontalCard = () => {
  return (
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <p class="text-muted mb-1">
          source name
        </p>
        <h5 class="card-title">
          <a
            href=""
            class="text-dark text-decoration-none text-underline-hover"
            >News Title</a>
        </h5>

        <p class="card-text my-3 text-muted">
          Date published
        </p>
        <a class="btn btnColor">Read Later</a>
      </div>
    </div>
    <div class="col-md-4">
      <img
        src=""
        onerror="this.src='assets/Images/newsIm.jpg';"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
  </div>
</div>
  )
}

export default HorizontalCard