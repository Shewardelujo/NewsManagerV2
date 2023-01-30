import React from 'react'
import HorizontalCard from '../../components/horizontal-card'
import HorizontalPageCard from '../../components/horizontal-page-card'
import VerticalCard from '../../components/vertical-card'

const Homepage = () => {
    return (
        <div>
            {/* // Top Section, contains section 1 and section 2 */}
            {/* // Top Section  */}
            <div class="col-12 mt-3 px-5 d-md-flex justify-content-md-between">
                {/* Section 1 beginning */}

  <div class="col-xs-12 col-md-8">
    <h3 class="mt-4 mb-3">Top Headlines</h3>
        <HorizontalCard/>

    {/* <!-- First item --> */}

    <div class="card mb-3 col-12">
      <div class="row g-0">
        <div class="col-md-5">
          <div class="card-body">
            <p class="text-muted mb-1">
              Source Name
            </p>
            <h5 class="card-title">
              <a
                href="{{ firstData.url }}"
                class="text-dark text-decoration-none text-underline-hover"
                >News Title</a>
            </h5>

            <p class="card-text">
              News Description
            </p>

            <p class="card-text my-3 text-muted">
              Date published
            </p>

            <a class="btn btnColor"
              >Read Later
            </a>
            {/* <!-- <a class="btn btnColor" (click)="openSnackBar()"> Read Later </a> --> */}
          </div>
        </div>
        <div class="col-md-7">
          <img src=""
            onerror="this.src='assets/Images/newsIm.jpg';"
            class="img-fluid rounded-end"
            alt="..."/>
        </div>
      </div>
    </div>

    {/* <!-- other items --> */}
    <div class="row g-2">
            <div class="col-md-4">
                <VerticalCard />
      </div>
    </div>
  </div>
{/* //   <!-- Section 1 end --> */}

{/* //   <!-- Section 2 beginning --> */}
  <div class="col-xs-12 col-md-3">
    <h4 class="mt-4 mb-3">Category News</h4><HorizontalPageCard/>

    <div><HorizontalCard/>
    </div>
  </div>
                {/* <!-- Section 2 end --> */}
            </div>



            {/* <!-- Section 3 --> */}
<div class="col-12 mt-3 px-5">
  <h3 class="mt-4 mb-4 col-12">Recommended topics for you</h3>
  <div class="row">
    <div class="col-md-4 mr-2">
      <h4 class="mb-4">Science</h4><HorizontalCard/>

      <div ><HorizontalCard/>
      </div>
    </div>
    <div class="col-md-4 mr-2">
      <h4 class="mb-4">Technology</h4><HorizontalCard/>

      <div ><HorizontalCard/>
      </div>
    </div>
    <div class="col-md-4 mr-2">
      <h4 class="mb-4">Business</h4><HorizontalCard/>

      <div ><HorizontalCard/>
      </div>
    </div>
    <div class="col-md-4 mr-2 mt-4">
      <h4 class="mb-4">Sports</h4><HorizontalCard/>

      <div><HorizontalCard/>
      </div>
    </div>
    <div class="col-md-4 mr-2 mt-4">
      <h4 class="mb-4">Entertainment</h4><HorizontalCard/>

      <div><HorizontalCard/>
      </div>
    </div>
    <div class="col-md-4 mr-2 mt-4">
      <h4 class="mb-4">Health</h4><HorizontalCard/>

      <div><HorizontalCard/>
      </div>
    </div>
  </div>
            </div>
        </div>
      
      
      
  )
}

export default Homepage