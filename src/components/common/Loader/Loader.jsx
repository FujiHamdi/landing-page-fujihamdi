import LoaderIcon from "@/assets/logos/colored-hyperhire.svg";

export default function Loader() {
  return (
    <div className="loader-container">
      <img
        src={LoaderIcon}
        alt="Loading..."
        className="loader"
        priority
      />
    </div>
  );
}
