import 'styles/sitecard.scss';

type Props = {
  index: number;
  image: string;
  imageAlt: string;
  title: string;
  siteLink: string;
};

const SiteCard = ({ index, image, imageAlt, title, siteLink }: Props) => {
  return (
    <>
      <div className="flex p-0 flex-wrap items-center justify-items-center content-center">
        <div className="web card flex p-0 m-5 w-auto transition-all duration-75 ease-in-out bg-white shadow-[0_1px_3px_0_rgba(0,0,0,.1)] hover:bg-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,.5)]">
          <figure className="flex-1 flex flex-col flex-nowrap justify-around w-[100%] relative p-0 m-0">
            <div className="webpic bg-[#444] relative after:clear-both">
              <img
                className="h-auto opacity-[0.5] transition-all duration-75 ease-in-out w-[100%]"
                src={image}
                alt={imageAlt}
              />
              <span className="animate-[hot_10s_ease_infinite] absolute left-[15px] bottom-[15px] p-[5px] text-white text-[0.8em] bg-gradient-to-br from-[red] to-[orange]">
                {index}
              </span>
            </div>
            <figcaption className="flex flex-col flex-nowrap text-white absolute left-0 top-0 bottom-0 right-0 p-[15px] mb-[30px]">
              <h3 className="text-3xl">
                <a href={siteLink} className="text-white decoration-0">
                  {title}
                </a>
              </h3>
            </figcaption>
            <div className="border h-[35px] bg-transparent flex w-full content-center items-center bg-zinc-100">
              <a
                target="_blank"
                href="mailto:7osary@gmail.com"
                className="flex-1 text-blue-500 transition ease-in-out delay-150 hover:scale-110"
                rel="noreferrer"
              >
                Call us
              </a>
              <div className="h-full border-r"></div>
              <a
                href={siteLink}
                target="_blank"
                className="flex-1 text-blue-500 transition ease-in-out delay-150 hover:scale-110"
                rel="noreferrer"
              >
                <span>Visit site</span>
              </a>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default SiteCard;
