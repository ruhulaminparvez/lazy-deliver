import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../Assets/logo/logo.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const [linkServices, setLinkServices] = useState([]);
  const [linkBlog, setLinkBlog] = useState([]);

  useEffect(() => {
    fetch("https://lazy-deliver-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setLinkServices(data));
  }, []);

  useEffect(() => {
    fetch("https://lazy-deliver-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setLinkBlog(data));
  }, []);

  return (
    <div>
      <footer className="footer p-12 bg-base-200 text-base-content" data-theme="lofi">
        <div>
          <img className="h-16" src={logo} alt="" />
          <p>
            LazyDeliver Ltd.
            <br />
            Providing reliable tech since 2018
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          {
            linkServices.map(service => <Link key={service._id} className="link link-hover">{service.title}</Link>)
          }
        </div>
        <div>
          <span className="footer-title">Blogs</span>
          {
            linkBlog.map(blog => <Link key={blog._id} className="link link-hover">{blog.name}</Link>)
          }
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
