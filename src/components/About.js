import React, { Fragment } from 'react'

function About() {
	return (
		<Fragment>
			<div className="col py-3 d-flex align-items-center about-image">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
							<div>
								<h1 className="font-big text-red slide-in-top">
									About me
								</h1>
								<hr></hr>
								<p className="slide-in-bottom">
									Seasoned full-stack developer, continuous
									learner and team player. <br></br>
								</p>
								<p className="slide-in-bottom">
									I love to build and fix things. <br></br>
									My motto is{' '}
									<span className="text-red ls-2">
										Progress over Perfection
									</span>
								</p>
								<p className="slide-in-bottom">
									Previously worked as Full stack web
									developer.<br></br>
									The technology I've worked on :{' '}
									<span className="text-red ls-2">
										React, Node, .NET, Java Spring <br></br>
										AWS, Azure, GCP, Docker, Kubernetes,
										Jenkins, CI/CD
									</span>
								</p>
								<p className="slide-in-bottom">
									Currently building poker bot and automatic
									trading system.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 col-sm-12">
							<img
								className="img-fluid"
								src="../images/nomad-amico.png"
								alt="..."
							></img>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default About
