import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLimits } from "../../store/userProcessSlice";
import { AppDispatch, RootState } from "../../store/store";
import Loader from "../loader";

export default function Limits(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const loadingLimits = useSelector(
    (state: RootState) => state.user.loadingLimits
  );
  const eventFiltersInfo = useSelector(
    (state: RootState) => state.user.eventFiltersInfo
  );

  useEffect(() => {
    dispatch(getLimits());
    console.log("LIMITS в компоненте", eventFiltersInfo);
  }, [dispatch]);

  return (
    <div className="header_menu-limits">
      {loadingLimits ? (
        <Loader />
      ) : (
        <>
          <p className="header_menu-limits-used">
            Использовано компаний{" "}
            <span>
              {eventFiltersInfo &&
              eventFiltersInfo.usedCompanyCount !== undefined
                ? eventFiltersInfo.usedCompanyCount
                : 0}
            </span>
          </p>
          <p className="header_menu-limits-limit">
            Лимит по компаниям{" "}
            <span>{eventFiltersInfo?.companyLimit || 100}</span>
          </p>
        </>
      )}
    </div>
  );
}
