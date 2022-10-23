import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { commerce } from "../../../Commerce";
import LoadingSpinner from "../../detailPage/components/LoadingSpinner";

const CreateToken = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token);
  useEffect(() => {
    commerce.customer
      .getToken(`${token}`, "save=true")
      .then(() => navigate("/", { replace: true }));
  }, [token, navigate]);

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
};

export default CreateToken;
