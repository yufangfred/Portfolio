import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { BsLaptop } from 'react-icons/bs'
import {
	AiFillEyeInvisible,
	AiFillGithub,
	AiOutlineEyeInvisible,
} from 'react-icons/ai'

function MyWork() {
	return (
		<Fragment>
			<div className="col p-4">
				<div className="p-4 slide-in-top">
					<div className="row">
						<div className="col-6">
							<h2 className="ff-jose fw-bold ls-2">My Work</h2>
						</div>
					</div>
					<hr></hr>
					<div className="row">
						<div className="col-md-6 text-center my-2">
							<div
								id="carouselExampleControls1"
								className="carousel slide my-1"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											src="../portfolio-images/HailerIMG_01.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
									<div className="carousel-item">
										<img
											src="../portfolio-images/HailerIMG_02.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
									<div className="carousel-item">
										<img
											src="../portfolio-images/HailerIMG_03.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#carouselExampleControls1"
									data-bs-slide="prev"
								>
									<GrPrevious />
									<span className="visually-hidden">
										Previous
									</span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#carouselExampleControls1"
									data-bs-slide="next"
								>
									<GrNext />
									<span className="visually-hidden">
										Next
									</span>
								</button>
							</div>
							<h5 className="ff-jose my-1">Hailer App</h5>
							<div className="row d-flex justify-content-center">
								<a
									href="https://www.youtube.com/watch?v=h_-wnBVXmlA"
									className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
									target="_blank"
								>
									<BsLaptop /> Watch Live
								</a>
								<a
									className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
									target="_blank"
								>
									<AiFillEyeInvisible /> Private Repo
								</a>
							</div>
						</div>
						<div className="col-md-6 text-center my-2">
							<div
								id="carouselExampleControls2"
								className="carousel slide my-1"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											src="../portfolio-images/BellaApp_01.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
									<div className="carousel-item">
										<img
											src="../portfolio-images/BellaApp_02.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
									<div className="carousel-item">
										<img
											src="../portfolio-images/BellaApp_03.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#carouselExampleControls2"
									data-bs-slide="prev"
								>
									<GrPrevious />
									<span className="visually-hidden">
										Previous
									</span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#carouselExampleControls2"
									data-bs-slide="next"
								>
									<GrNext />
									<span className="visually-hidden">
										Next
									</span>
								</button>
							</div>
							<div>
								<h5 className="ff-jose my-1">Bella Connect</h5>
								<div className="row d-flex justify-content-center">
									<a
										href="https://bella.everythingeverywhere.link/"
										className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
										target="_blank"
									>
										<BsLaptop /> Watch Live
									</a>
									<a
										href="https://github.com/yufangfred/BELLA_APP"
										className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
										target="_blank"
									>
										<AiFillGithub /> Source Code
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center my-2">
							<div
								id="carouselExampleControls3"
								className="carousel slide my-1"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											src="../portfolio-images/ToyotaApp_01.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
									<div className="carousel-item">
										<img
											src="../portfolio-images/ToyotaApp_01.png"
											className="d-block w-100"
											alt="..."
										/>
									</div>
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#carouselExampleControls3"
									data-bs-slide="prev"
								>
									<GrPrevious />
									<span className="visually-hidden">
										Previous
									</span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#carouselExampleControls3"
									data-bs-slide="next"
								>
									<GrNext />
									<span className="visually-hidden">
										Next
									</span>
								</button>
							</div>
							<h5 className="ff-jose my-1">
								Toyota One App Service Book
							</h5>
							<div className="row d-flex justify-content-center">
								<a
									href="https://www2.cdkglobal.com/smartpath"
									className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
									target="_blank"
								>
									<BsLaptop /> Watch Live
								</a>
								<a
									className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
									target="_blank"
								>
									<AiOutlineEyeInvisible /> Private
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default MyWork
