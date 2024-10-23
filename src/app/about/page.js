import TigerImage from "@/components/TigerImage/tiger";
import AboutStyle from "@/app/about/about.module.css";

export default function About() {
  return (
    <div>
      <TigerImage />
      <p className={AboutStyle.text}>
        The Tiger Shop is a plushie shop that only sells Tiger. Our mission is
        to spread more knowlege about Tiger. We are a company that was founded
        in 2024. We hope that people will be able to learn more about Tigers!
        Please View Our Shop to buy some of the plushies we currently are
        selling.
      </p>
      <button className={AboutStyle.aboutButton}>View Shop</button>
    </div>
  );
}