import { useState } from "react";
import CrossIcon from "../../assets/icons/CrossIcon";

type ModalProps = {
  title: string;
  trigger: JSX.Element;
  content: (onClose: { onClose: () => void }) => JSX.Element;
};

const Modal = ({ title, trigger, content: ContentComponent }: ModalProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>{trigger}</button>

      {isOpened && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/20">
          <div className="p-10 min-w-80 bg-white border border-gray-4">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xl font-bold">{title}</div>
              <button onClick={() => setIsOpened(false)}>
                <CrossIcon />
              </button>
            </div>

            <ContentComponent onClose={() => setIsOpened(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
