import "./style.scss";
import { actionResetLoadingStatus } from "../../authReducer";
import { notification } from "antd";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const NotificationBox = () => {
  const loadingStatus = useSelector((store) => store.authReducer.loadingStatus);
  const pageMessage = useSelector((store) => store.authReducer.pageMessage);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const openSuccessNotify = useCallback(
    (type, message) => {
      api[type]({
        message: "Thành công",
        description: message,
        duration: 6,
        onClose: () => {
          dispatch(actionResetLoadingStatus());
        },
      });
    },
    [api, dispatch]
  );
  const openErrorNotify = useCallback(
    (type, message) => {
      api[type]({
        message: "Thất bại",
        description: message,
        duration: 6,
        onClose: () => dispatch(actionResetLoadingStatus()),
      });
    },
    [api, dispatch]
  );
  const openPendingNotify = useCallback(
    (type) => {
      api[type]({
        message: "Đang xử lý thông tin",
        description: `Vui lòng chờ trong giây lát.`,
        duration: 6,
        onClose: () => dispatch(actionResetLoadingStatus()),
      });
    },
    [api, dispatch]
  );
  useEffect(() => {
    switch (loadingStatus) {
      case "SUCCESS": {
        openSuccessNotify("success", pageMessage);
        break;
      }
      case "PENDING": {
        openPendingNotify("info");
        break;
      }
      case "ERROR": {
        openErrorNotify("error", pageMessage);
        break;
      }
      default: {
        return;
      }
    }
  }, [
    loadingStatus,
    pageMessage,
    openSuccessNotify,
    openPendingNotify,
    openErrorNotify,
  ]);
  return <>{contextHolder}</>;
};
export default NotificationBox;
