import { useNavigate } from "react-router-dom";
import { memberState } from "@recoil/user/atoms.mjs";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "@components/Button";
import Theme from "@components/Theme";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const [user, setUser] = useRecoilState(memberState);

  return (
    <header className="text-gray-800 duration-500 ease-in-out bg-gray-200 min-w-80 dark:bg-gray-600 dark:text-gray-200 transition-color">
      <nav className="flex flex-wrap items-center justify-center p-4 md:flex-nowrap md:justify-between">
        <div className="order-1 w-1/2 md:w-auto">
          <a className="flex items-center gap-2" href="/">
            <img
              className="h-6 mr-3 sm:h-9"
              src="/vite.svg"
              alt="로고 이미지"
            />
            <span className="text-xl font-semibold">게시판</span>
          </a>
        </div>
        <div className="order-2 w-auto mt-4 text-lg md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li>
              <Link to="/boards">정보공유</Link>
            </li>
            <li>
              <Link to="/boards">자유게시판</Link>
            </li>
            <li>
              <Link to="/boards">질문게시판</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end order-1 w-1/2 md:order-2 md:w-auto">
          {user ? (
            <p className="flex items-center">
              <img
                className="w-8 mr-2 rounded-full"
                src={`${import.meta.env.VITE_API_SERVER}/files/${user.profile}`}
              ></img>
              {user.name}님 :)
              <Button size="sm" onClick={handleLogout}>
                로그아웃
              </Button>
            </p>
          ) : (
            <div className="flex justify-end">
              <Button size="sm" onClick={() => navigate("/users/login")}>
                로그인
              </Button>
              <Button
                size="sm"
                bgColor="gray"
                onClick={() => navigate("/users/signup")}
              >
                회원가입
              </Button>
            </div>
          )}
          <Theme />
        </div>
      </nav>
    </header>
  );
}

export default Header;
