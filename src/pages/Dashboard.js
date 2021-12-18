import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BarraInferior from "../components/BarraInferior";
import BarraSuperior from "../components/BarraSuperior";

function Dashboard() {
  return (
    <body>
      <BarraSuperior />
      {/* <!-- ======= Breadcrumbs Section ======= -->*/}
      <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Dashboard</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Dashboard</li>
              </ol>
            </div>
          </div>
        </section>{/*<!-- End Breadcrumbs Section -->*/}
      {/*<!-- ======= Sidebar ======= -->*/}
      <aside id="sidebar" className="sidebar1">

        <ul className="sidebar-nav1" id="sidebar-nav1">

          <li className="nav-item1">
            <a className="nav-link1 " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>{/*<!-- End Dashboard Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Opcion</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav1" className="nav-content1 collapse " data-bs-parent="#sidebar-nav1">
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i><span>Alerts</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i><span>Accordion</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i><span>Badges</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="components-buttons.html">
                  <i className="bi bi-circle"></i><span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="components-cards.html">
                  <i className="bi bi-circle"></i><span>Cards</span>
                </a>
              </li>
              <li>
                <a href="components-carousel.html">
                  <i className="bi bi-circle"></i><span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="components-list-group.html">
                  <i className="bi bi-circle"></i><span>List group</span>
                </a>
              </li>
              <li>
                <a href="components-modal.html">
                  <i className="bi bi-circle"></i><span>Modal</span>
                </a>
              </li>
              <li>
                <a href="components-tabs.html">
                  <i className="bi bi-circle"></i><span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="components-pagination.html">
                  <i className="bi bi-circle"></i><span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="components-progress.html">
                  <i className="bi bi-circle"></i><span>Progress</span>
                </a>
              </li>
              <li>
                <a href="components-spinners.html">
                  <i className="bi bi-circle"></i><span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="components-tooltips.html">
                  <i className="bi bi-circle"></i><span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>{/*<!-- End Components Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content1 collapse " data-bs-parent="#sidebar-nav1">
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i><span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i><span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="forms-editors.html">
                  <i className="bi bi-circle"></i><span>Form Editors</span>
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="bi bi-circle"></i><span>Form Validation</span>
                </a>
              </li>
            </ul>
          </li>{/*<!-- End Forms Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content1 collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle"></i><span>General Tables</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle"></i><span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>{/*<!-- End Tables Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content1 collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle"></i><span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="charts-apexcharts.html">
                  <i className="bi bi-circle"></i><span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                  <i className="bi bi-circle"></i><span>ECharts</span>
                </a>
              </li>
            </ul>
          </li>{/*<!-- End Charts Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" className="nav-content1 collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="icons-bootstrap.html">
                  <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-remix.html">
                  <i className="bi bi-circle"></i><span>Remix Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i className="bi bi-circle"></i><span>Boxicons</span>
                </a>
              </li>
            </ul>
          </li>{/*<!-- End Icons Nav -->*/}

          <li className="nav-heading1">Pages</li>

          <li className="nav-item1">
            <a className="nav-link1 collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>{/*<!-- End Profile Page Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>{/*<!-- End F.A.Q Page Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>{/*<!-- End Contact Page Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" href="pages-register.html">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>{/*<!-- End Register Page Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>{/*<!-- End Login Page Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>{/*<!-- End Error 404 Page Nav -->*/}

          <li className="nav-item1">
            <a className="nav-link1 collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li>{/*<!-- End Blank Page Nav -->*/}

        </ul>

      </aside>{/*<!-- End Sidebar-->*/}

      <main id="main1" className="main">

        <div className="pagetitle" data-aos="fade-up">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>{/*<!-- End Page Title -->*/}

        <section className="section dashboard" data-aos="fade-up">
          <div className="row">

            {/*<!-- Left side columns -->*/}
            <div className="col-lg-8">
              <div className="row">

                {/*<!-- Sales Card -->*/}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">

                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div className="card-body1">
                      <h5 className="card-title1">Sales <span>| Today</span></h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                          <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>{/*<!-- End Sales Card -->*/}

                {/*<!-- Revenue Card -->*/}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">

                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div className="card-body1">
                      <h5 className="card-title1">Revenue <span>| This Month</span></h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                          <h6>$3,264</h6>
                          <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>{/*<!-- End Revenue Card -->*/}

                {/*<!-- Customers Card -->*/}
                <div className="col-xxl-4 col-xl-12">

                  <div className="card info-card customers-card">

                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div className="card-body1">
                      <h5 className="card-title1">Customers <span>| This Year</span></h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>{/*<!-- End Customers Card -->*/}

                {/*<!-- Reports -->*/}
                <div className="col-12">
                  <div className="card">

                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div className="card-body1">
                      <h5 className="card-title1">Reports <span>/Today</span></h5>

                      {/*<!-- Line Chart -->*/}
                      <div id="reportsChart"></div>

                      <script>

                      </script>
                      {/*<!-- End Line Chart -->*/}

                    </div>

                  </div>
                </div>{/*<!-- End Reports -->*/}

                {/*<!-- Recent Sales -->*/}
                <div className="col-12">
                  <div className="card recent-sales">

                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div className="card-body1">
                      <h5 className="card-title1">Recent Sales <span>| Today</span></h5>

                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><a href="#">#2457</a></th>
                            <td>Brandon Jacob</td>
                            <td><a href="#" className="text-primary">At praesentium minu</a></td>
                            <td>$64</td>
                            <td><span className="badge bg-success">Approved</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2147</a></th>
                            <td>Bridie Kessler</td>
                            <td><a href="#" className="text-primary">Blanditiis dolor omnis similique</a></td>
                            <td>$47</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2049</a></th>
                            <td>Ashleigh Langosh</td>
                            <td><a href="#" className="text-primary">At recusandae consectetur</a></td>
                            <td>$147</td>
                            <td><span className="badge bg-success">Approved</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2644</a></th>
                            <td>Angus Grady</td>
                            <td><a href="#" className="text-primar">Ut voluptatem id earum et</a></td>
                            <td>$67</td>
                            <td><span className="badge bg-danger">Rejected</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2644</a></th>
                            <td>Raheem Lehner</td>
                            <td><a href="#" className="text-primary">Sunt similique distinctio</a></td>
                            <td>$165</td>
                            <td><span className="badge bg-success">Approved</span></td>
                          </tr>
                        </tbody>
                      </table>

                    </div>

                  </div>
                </div>{/*<!-- End Recent Sales -->*/}

                {/*<!-- Top Selling -->*/}
                <div className="col-12">
                  <div className="card top-selling">

                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div className="card-body1 pb-0">
                      <h5 className="card-title1">Top Selling <span>| Today</span></h5>

                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                            <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                            <td>$64</td>
                            <td className="fw-bold">124</td>
                            <td>$5,828</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt="" /></a></th>
                            <td><a href="#" className="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                            <td>$46</td>
                            <td className="fw-bold">98</td>
                            <td>$4,508</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt="" /></a></th>
                            <td><a href="#" className="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                            <td>$59</td>
                            <td className="fw-bold">74</td>
                            <td>$4,366</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt="" /></a></th>
                            <td><a href="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                            <td>$32</td>
                            <td className="fw-bold">63</td>
                            <td>$2,016</td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt="" /></a></th>
                            <td><a href="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                            <td>$79</td>
                            <td className="fw-bold">41</td>
                            <td>$3,239</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>

                  </div>
                </div>{/*<!-- End Top Selling -->*/}

              </div>
            </div>{/*<!-- End Left side columns -->*/}

            {/*<!-- Right side columns -->*/}
            <div className="col-lg-4">

              {/*<!-- Recent Activity -->*/}
              <div className="card1">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div className="card-body1">
                  <h5 className="card-title1">Recent Activity <span>| Today</span></h5>

                  <div className="activity">

                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                      <div className="activity-content">
                        Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                      </div>
                    </div>{/*<!-- End activity item-->*/}

                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>{/*<!-- End activity item-->*/}

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>{/*<!-- End activity item-->*/}

                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                      <div className="activity-content">
                        Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                      </div>
                    </div>{/*<!-- End activity item-->*/}

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>{/*<!-- End activity item-->*/}

                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                      </div>
                    </div>{/*<!-- End activity item-->*/}

                  </div>

                </div>
              </div>{/*<!-- End Recent Activity -->*/}

              {/*<!-- Budget Report -->*/}
              <div className="card1">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div className="card-body1 pb-0">
                  <h5 className="card-title1">Budget Report <span>| This Month</span></h5>

                  <div id="budgetChart" style={{ minHeight: "400px" }} className="echart"></div>

                  <script>

                  </script>

                </div>
              </div>{/*<!-- End Budget Report -->*/}

              {/*<!-- Website Traffic -->*/}
              <div className="card1">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div className="card-body1 pb-0">
                  <h5 className="card-title1">Website Traffic <span>| Today</span></h5>

                  <div id="trafficChart" style={{ minHeight: "400px" }} className="echart"></div>

                  <script>

                  </script>

                </div>
              </div>{/*<!-- End Website Traffic -->*/}

              {/*<!-- News & Updates Traffic -->*/}
              <div className="card1">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div className="card-body1 pb-0">
                  <h5 className="card-title1">News &amp; Updates <span>| Today</span></h5>

                  <div className="news">
                    <div className="post-item clearfix">
                      <img src="assets/img/news-1.jpg" alt="" />
                      <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                      <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                    </div>

                    <div className="post-item clearfix">
                      <img src="assets/img/news-2.jpg" alt="" />
                      <h4><a href="#">Quidem autem et impedit</a></h4>
                      <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                    </div>

                    <div className="post-item clearfix">
                      <img src="assets/img/news-3.jpg" alt="" />
                      <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                      <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                    </div>

                    <div className="post-item clearfix">
                      <img src="assets/img/news-4.jpg" alt="" />
                      <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                      <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                    </div>

                    <div className="post-item clearfix">
                      <img src="assets/img/news-5.jpg" alt="" />
                      <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                      <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                    </div>

                  </div>{/*<!-- End sidebar recent posts-->*/}

                </div>
              </div>{/*<!-- End News & Updates -->*/}

            </div>{/*<!-- End Right side columns -->*/}

          </div>
        </section>
      </main>{/*<!-- End #main -->*/}
      <BarraInferior/>
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </body>
  );
}

export default Dashboard;
