import { Button } from "antd";
import { FC } from "react";
import { UserState } from "./features/user/user";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setUser } from "./features/user/user";

const App: FC = () => {
  //final userModel = context.watch<UserModel>().user;
  const userVal: UserState = useSelector(
    (state: RootState) => state.userReducer
  );
  if (!userVal.isApproved) {
    return (
      <>
        <LoginPage />
      </>
    );
  }

  return (
    <>
      <h1>Welcome to mother fker of react</h1>
    </>
  );
};

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    //context.read<AppModel>().setUser({
    //    username: "kevin",
    //    []
    //})
    dispatch(
      setUser({
        username: "kevin",
        isApproved: true,
      })
    );
  };
  return (
    <>
      <h1>Login Page</h1>
      <Button onClick={handleLogin}>Login Now</Button>
    </>
  );
};

export default App;
