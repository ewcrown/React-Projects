import CategoryBlock from "../CategoryBlock/CategoryBlock";

const Categories = () => {
  return (
    <>
      <section className="container mx-auto py-24 px-52">
        <div className="grid grid-cols-3 gap-10">   
        <CategoryBlock />
        </div>
      </section>
    </>
  );
};

export default Categories;
