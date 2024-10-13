import React from "react";
import LoaderTwo from "../../components/LoaderTwo";
import HeroPage from "../../components/HeroPage";

type Props = {};

const HomePageTwo = (props: Props) => {
  const [isCompleted, setIsComplete] = React.useState<boolean>(true);
  return (
    <>
      {!isCompleted ? (
        <LoaderTwo setIsComplete={setIsComplete} />
      ) : (
        <HeroPage />
      )}
    </>
  );
};

export default HomePageTwo;
