import ArrowRightCircleIcon from "@heroicons/react/24/outline/ArrowRightCircleIcon";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Services(props: CardProps) {
  return (
    <div className="md:h-80 p-4 md:px-10 md:py-6 flex flex-col items-start justify-center text-start gap-4 md:w-2/5 bg-grey-600 rounded-xl">
      <img src={props.image} alt="service picture" />
      <h4 className="text-2xl font-bold"> {props.title}</h4>
      <div className="flex w-full items-end justify-between gap-2">
        <h4 className=""> {props.description}</h4>{" "}
        <ArrowRightCircleIcon className="h-1/4 w-1/4 text-accent " />
      </div>
    </div>
  );
}
