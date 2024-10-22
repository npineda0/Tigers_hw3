import tigerStyle from "./tiger.module.css";
export default function TigerImage({}) {
  return (
    <div className={tigerStyle.tigerInfo}>
      <h1>The Tiger Shop!</h1>
      <div className={tigerStyle.images}></div>
    </div>
  );
}
