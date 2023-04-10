import styled from "styled-components";
export const StyledFooter = styled.section`
  background-color: #1c1d1f;
  color: #ffffff;
  font-size: 14px;
  position: -webkit-sticky;
  position: sticky;
  top: 100%;
  .container {
    .top-content {
      .top-content__col {
        ul li a {
          display: block;
          font-size: 12px;
          padding: 4px 0;
          transition: 0.3s;
          text-underline-offset: 3px;
          &:hover {
            text-decoration: underline;
          }
        }
        ul li:first-child a { 
            font-size: 16px;
            font-weight: 700;
            color: #a435f0;
            &:hover {
            text-decoration: underline;
          }
        }
        &.brand {
          .library {
            color: #a435f0;
            li {
              margin-right: 8px;
              font-size: 20px;
            }
          }
        }
        @media screen and (max-width: 1024px) {
          padding-bottom: 24px;
        }
      }
    }
  }
`;
