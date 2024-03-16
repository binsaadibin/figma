import styles from "@/styles/Components/listWithOutUl.module.scss"; // Corrected import statement

const ListWithOutUl = ({ item }) => {
  return (
    <div className={styles.listItem}> {/* Corrected reference to styles */}
       {item}
    </div>
  );
};

export default ListWithOutUl;
