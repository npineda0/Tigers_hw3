import PlushStyle from "./plush.module.css";

export default function TigerInfo() {
  return (
    <main>
      <div className={PlushStyle.InfoOne}>
        <div className={PlushStyle.plushOne}>
          <div className={PlushStyle.photoOne}></div>
          <div>
            <h6 className={PlushStyle.infoOne}>Tiger Tilly</h6>
            <p className={PlushStyle.textOne}>Tiger Tilly Strips are unique!</p>
            <button className={PlushStyle.shop}>Shop</button>
          </div>
        </div>

        <div className={PlushStyle.plushOne}>
          <div className={PlushStyle.photoTwo}></div>
          <div>
            <h6 className={PlushStyle.infoOne}>Tiger Tally</h6>
            <p className={PlushStyle.textOne}>
              Tiger Tally Use Their Ears to communicate!
            </p>
            <button className={PlushStyle.shop}>Shop</button>
          </div>
        </div>
      </div>
    </main>
  );
}
