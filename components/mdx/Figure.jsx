import LargeBlock from "../LargeBlock";

const Figure = ({ src, alt, xl = false, lg = false }) => {
  const isSvg = src.endsWith(".svg");

  return (
    <LargeBlock>
      <figure>
        {isSvg ? (
          <div className='relative'>
            <object data={src} type="image/svg+xml" alt={alt} className="mb-2 w-full">
            </object>
          </div>
        ) : (
          <div className='relative'>
            <img src={src} alt={alt} className="mb-2 w-full" />
          </div>
        )}
        <figcaption className="text-xl mt-8">
          <b>Figure:</b> {alt}
        </figcaption>
      </figure>
    </LargeBlock>
  );
};

export default Figure;
