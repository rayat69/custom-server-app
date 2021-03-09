import { GetStaticProps } from "next";

const about = ({ pName }: { pName: string }) => {
  return (
    <div>
      <h1>This is the {pName} page</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { pName: "about" },
  };
};

export default about;
