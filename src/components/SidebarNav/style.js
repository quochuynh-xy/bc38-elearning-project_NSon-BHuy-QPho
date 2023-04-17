import styled from "styled-components";
export const SideNav = styled.div`
  background-color: #ffffff;
  width: 280px;
  max-width: 90vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  bottom: 0;
  color: #1c1d1f;
  transition: 0.4s;
  border-right: 1px solid #ddd;
  &.side-nav-container-hide {
    width: 0;
  }
  .nav-upper,
  .navheading {
    display: grid;
  }
  .nav-heading {
    grid-template-columns: 2fr, 1fr;
    grid-template-rows: 1fr;
    height: 75px;
    .hamburger {
      position: absolute;
      top: 7px;
      right: -7px;
      /* border-radius: 4px 0 0 4px; */
      border-radius:0 4px 4px 0;
      border: 1px solid #ddd;
      background-color: #fff;
      cursor: pointer;
      margin: auto -35px;
      padding: 8px;
      span {
        font-size: 24px;
        transition: 0.4s;
      }
      &:hover {
        span {
          color: #a82ce4;
        }
      }
    }
    .nav-brand {
      display: flex;
      align-items: center;
      img {
        padding: 0 10px;
      }
    }
  }
  .nav-menu {
    margin-left: 20px;
    font-weight: 600;
    .menu-item {
      cursor: pointer;
      padding: 8px 0;
      display: flex;
      align-items: center;
      transition-duration: 0.3s;
      &:hover > p {
        color: #a82ce4;
      }
    }
    .menu-item.droplist {
      display: grid;
      grid-template-columns: 1fr, 1fr;
      /* .list-items-step-1 {
        visibility: hidden;
        opacity: 0;
        height: 0;
        padding-left: 8px;
      } */
      /* &:hover { */
        .list-items-step-1 {
          transition: 0.4s;
          visibility: visible;
          opacity: 1;
          height: initial;
          padding-left: 16px;
          li {
            padding: 4px 0;
            a {
              transition: 0.3s;
            }
          }
          li:hover > a {
            color: #a82ce4;
            padding-left: 16px;
          }
        }
      /* } */
    }
  }
`;
