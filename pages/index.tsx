import Button from "@ui/button/Button";
import Home from "../app/components/pages/home/Home";

const HomePage = () => {
  // return (
  //   <Home />
  // )
  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <Button>Success</Button>
      <Button size="small">Success</Button>
      <Button intent="secondary">Success</Button>
      <Button intent="outline" size="large">
        Success
      </Button>
    </div>
  );
};

export default HomePage;
