import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const API = "https://api.github.com/users"
const Team = () => {
   const[users,setUsers] =useState([])
    const getTeams = async (API) => {
        try {
            const res = await fetch(API)
            const resData = await res.json()
            // console.log(resData);
            setUsers(resData)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getTeams(API);
    }, [])
    return (
        <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Our Team</h2>
                    <p>Use the REST API to get public and private information about authenticated users.</p>
                </div>

                <div className="row">
                {users.map((curElem)=>{
                    const {avatar_url,login,id,type,followers_url}=curElem
                    return(
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100" key={id}>
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src={avatar_url} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>{login}</h4>
                                <span>{type}</span>
                                <p>followers_url : <a href={followers_url} >Click Here</a></p>
                                <div className="social">
                                    <a href="#"><i className="ri-twitter-fill"></i></a>
                                    <a href="#"><i className="ri-facebook-fill"></i></a>
                                    <a href="#"><i className="ri-instagram-fill"></i></a>
                                    <a href="#"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                    <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div className="social">
                                    <a href=""><i className="ri-twitter-fill"></i></a>
                                    <a href=""><i className="ri-facebook-fill"></i></a>
                                    <a href=""><i className="ri-instagram-fill"></i></a>
                                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                <div className="social">
                                    <a href=""><i className="ri-twitter-fill"></i></a>
                                    <a href=""><i className="ri-facebook-fill"></i></a>
                                    <a href=""><i className="ri-instagram-fill"></i></a>
                                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                <div className="social">
                                    <a href=""><i className="ri-twitter-fill"></i></a>
                                    <a href=""><i className="ri-facebook-fill"></i></a>
                                    <a href=""><i className="ri-instagram-fill"></i></a>
                                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                <div className="social">
                                    <a href=""><i className="ri-twitter-fill"></i></a>
                                    <a href=""><i className="ri-facebook-fill"></i></a>
                                    <a href=""><i className="ri-instagram-fill"></i></a>
                                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Team