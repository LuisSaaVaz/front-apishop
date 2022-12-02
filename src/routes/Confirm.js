import ButtonTo from "../components/Buttons/ButtonTo";
import Message from "../components/Message";
import Loading from "../components/Loading";
import Modal from "../components/Modal/Modal";
import useConfirm from "../shared/hooks/useConfirm";

const Confirm = () => {
  const { loading, data, error } = useConfirm();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Modal>
          <Message text={error ? error : data} />
          <ButtonTo to="/login" text={"login"} />
        </Modal>
      )}
    </>
  );
};

export default Confirm;
