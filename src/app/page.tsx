import AddEntity from "@/components/AddEntity";
import Categories from "@/components/Categories";

const Home = async () => {
  return (
    <>
      <div className="flex-row md:flex justify-center md:justify-between  max-w-5xl mx-auto pt-10 ">
        {/* Categories */}
        <div>
          <Categories />
        </div>

        {/* add entity - animal and category */}
        <div>
          <AddEntity />
        </div>
      </div>
    </>
  );
};

export default Home;
