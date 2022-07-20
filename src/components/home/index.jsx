import React from "react";
import "./style.scss";
const Home = () => {
  return (
    <div>
      <div className="logo">
        <div className="logo__img">
          <img src="./logoNCC.png" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="content__title">Lorem ipsum dolor sit asmet?</div>
        <p className="content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>

      <div className="content-list-wrap">
        <div className="content-list">
          <div className="content-item">
            <p className="content-item__title">Lorem ipsum dolor sit amet</p>
            <div className="content-item__box">
              <div className="content-item__top">
                <div className="content-item__img">
                  <img src="./html-icon.png" alt="" />
                </div>
                <span className="content-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc atullamcorper
                  ultricies. Donec feugiat velit nulla, vel sodales est
                  ullamcorper id. Aenean consequat condimentum velit ut tempor.
                  Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <p className="content-item__title">Lorem ipsum dolor sit amet</p>

            <div className="content-item__box">
              <div className="content-item__top">
                <div className="content-item__img">
                  <img src="./css-icon.png" alt="" />
                </div>
                <span className="content-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc atullamcorper
                  ultricies. Donec feugiat velit nulla, vel sodales est
                  ullamcorper id. Aenean consequat condimentum velit ut tempor.
                  Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <p className="content-item__title">Lorem ipsum dolor sit amet</p>

            <div className="content-item__box">
              <div className="content-item__top">
                <div className="content-item__img">
                  <img src="./url-icon.png" alt="" />
                </div>
                <span className="content-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc atullamcorper
                  ultricies. Donec feugiat velit nulla, vel sodales est
                  ullamcorper id. Aenean consequat condimentum velit ut tempor.
                  Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
