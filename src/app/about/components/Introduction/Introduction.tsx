import styles from './Introduction.module.css'

const Introduction = () => {
  return (
    <section className={styles['introduction-container']}>
      <h1 className={styles.heading}>
        <span>Ying-Wei Lai</span>
        <span>Front End Engineer</span>
      </h1>
      <section>
        Software Engineer, since 2018, having worked in eCommerce, Video Tech and, currently,
        a FinTech company, Nutmeg, an investment management company, focusing on the onboarding journey of our customers.

        Expertise focused solely in the Front-End space - HTML, CSS, JavaScript with React.js as my core tool.
        Always striving to find innovative methods to solve and create better experiences for users and clients,
        to improve team workflows and to improve myself further as an Engineer.
      </section>
    </section>
  );
};

export default Introduction;