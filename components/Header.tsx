import styled from "styled-components";
import { CATEGORIES } from "@/constant/constant";
import { FaBars } from "react-icons/fa";
import { useMemo, useState } from "react";
import useOffResize from "@/hooks/useOffResize";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { modeState, optionState } from "@/recoil/store";
import Image from "next/image";

const Header = () => {
  const setOption = useSetRecoilState(optionState);
  const setMode = useSetRecoilState(modeState);
  const router = useRouter();
  const [togle, setTogle] = useState(false);
  const togleHandler = () => {
    setTogle(!togle);
  };

  const moveCategory = (category: string = "/") => {
    router.push(category);
    setTogle(false);
    setOption("high");
    setMode(false);
  };

  const navData = useMemo(
    () => (
      <nav>
        <ul>
          {CATEGORIES.map((category) => (
            <li onClick={() => moveCategory(category)} key={category}>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </nav>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useOffResize(1040, "up", () => setTogle(false));

  return (
    <HeaderBox togle={togle}>
      <div className="logo">
        <a onClick={() => moveCategory()}>
          <Image
            width={129}
            height={28}
            src={"https://www.cookapps.com/img/logo-white.76a0b6f4.svg"}
            alt="logo"
          />
        </a>
      </div>
      <div className="main_nav">{navData}</div>
      <div className="togle_btn">
        <FaBars onClick={togleHandler} />
      </div>
      <div className="togle_nav">{navData}</div>
    </HeaderBox>
  );
};

export default Header;

type HeaderBoxProps = {
  togle: boolean;
};

const HeaderBox = styled.header<HeaderBoxProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px calc((100% - 1400px) / 2);
  align-items: center;
  position: fixed;
  background-color: var(--main-color);
  z-index: 10;
  @media (max-width: 236px) {
    flex-direction: column;
  }

  .logo {
    cursor: pointer;
    margin-left: 28px;
    @media (max-width: 236px) {
      margin-left: 0px;
    }
  }

  .main_nav {
    margin-right: 28px;
    color: white;
    @media (max-width: 1040px) {
      display: none;
    }

    ul {
      display: flex;

      li {
        margin: 0px 20px;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  .togle_btn {
    display: none;
    cursor: pointer;
    margin-right: 28px;
    color: white;
    font-size: 1.5rem;
    @media (max-width: 1040px) {
      display: block;
    }
    @media (max-width: 236px) {
      margin-right: 0px;
      margin-top: 10px;
    }
  }

  .togle_nav {
    position: absolute;
    width: 100%;
    top: 56px;
    @media (max-width: 236px) {
      top: 98px;
    }

    nav {
      width: 100%;

      ul {
        display: none;
        @media (max-width: 1040px) {
          display: block;
          width: 100%;
          background-color: white;
          color: #7a7878;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        li {
          font-weight: 600;
          font-size: 1.2rem;
          padding: 14px 0px;
          display: ${(props) => (props.togle ? "block" : "none")};
          cursor: pointer;
          :hover {
            color: white;
            background-color: black;
          }

          span {
            margin-left: 28px;
          }
        }
      }
    }
  }
`;
