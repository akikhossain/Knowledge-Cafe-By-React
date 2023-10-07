import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Knowledge Hub</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;