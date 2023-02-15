function CategoryCard() {
  return (
    <article className="relative flex flex-col items-center justify-center">
      <img
        width={200}
        src="/image-category-thumbnail-headphones.png"
        alt="headphones"
      />
      <h6>Headphones</h6>
      <p>Test</p>
      <div className="rounded-lg bg-grey absolute inset-0 top-[30%] z-[-1]"></div>
    </article>
  );
}

export default CategoryCard;
