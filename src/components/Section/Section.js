import PropTypes from "prop-types";
import css from "../Section/Section.module.css";

export function Section({ title, children }) {
    return (
      <section className={css.section}>
        <div className={css.paper}>
          {title && <h2 className={css.title}>{title}</h2>}
          {children}
          </div>
      </section>
    );
  }
  
  Section.propTypes = {
    title: PropTypes.string,
  };