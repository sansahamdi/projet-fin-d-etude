import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfInformation from "./ProfInformation";
import { getPostProf, getProf } from "../../js/action/ProfAction";
import ProfPosts from "./ProfPosts";
import "./Style.css";
import { HeaderProf } from "./HeaderProf";

const ProfProfile = ({ match }) => {
  const postProf = useSelector((state) => state.prof.profPost);
  const isLoading = useSelector((state) => state.prof.isLoading);
  const prof = useSelector((state) => state.prof.prof);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProf(match.params.id));
    const postProf = async () => {
      const res = await match.params.id;
      dispatch(getPostProf(res));
    };

    postProf();
  }, [dispatch, match.params.id]);

  if (isLoading || !postProf || !prof) {
    return <h2>....loading</h2>;
  }

  return (
    <>
      <div class="container flex-grow-1 container-p-y">
        <div class="container-m-nx container-m-ny theme-bg-white mb-4 head">
          {prof &&
            prof.map((prof) => <HeaderProf prof={prof} postProf={postProf} />)}
        </div>
      </div>
      <div class="prof-post-info ">
        <div>{prof && prof.map((prof) => <ProfInformation prof={prof} />)}</div>
        <div>
          {postProf &&
            postProf.map((postProf) => (
              <ProfPosts match={match} postProf={postProf} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProfProfile;
