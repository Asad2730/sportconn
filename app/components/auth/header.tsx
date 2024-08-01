
interface HeaderProps {
    title: string;
    subTitle: string;
  }

export const Header = ({title,subTitle}:HeaderProps) => (
    <>
     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mx-auto h-10 w-auto text-2xl font-bold">{title}</h1>
          <h2 className=" text-center tracking-tight ">
             {subTitle}
          </h2>
        </div>
    </>
)

