import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./SignUpContent.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpContent = () => {
  const [inputValue, setInputValue] = useState("");
  const [firstName, setFirstName] = useState('');

  const showToastMessage = () => {
    toast.success("Uğurlu qeydiyyat !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const signUp = async () => {
    try {
      const user = await axios.post(
        "https://api.chec.io/v1/customers",
        {
          email: inputValue,
          firstname: firstName,
        },
        {
          headers: {
            "X-Authorization":
              "sk_473748babac69b8b86f0ac839cb29a956009e80e628ef",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <form className="login-form">
        <h3>Daxil ol</h3>
        <div className="login-with-social">
          <svg
            width="112"
            height="32"
            viewBox="0 0 112 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#4267B2" />
            <path
              d="M41.128 20V11.48H46.084V12.536H42.244V15.116H45.28V16.172H42.244V20H41.128ZM49.362 20.12C48.53 20.12 47.83 19.816 47.262 19.208C46.702 18.6 46.422 17.864 46.422 17C46.422 16.136 46.702 15.4 47.262 14.792C47.83 14.184 48.53 13.88 49.362 13.88C49.802 13.88 50.21 13.98 50.586 14.18C50.97 14.372 51.266 14.62 51.474 14.924V14H52.506V20H51.474V19.076C51.266 19.38 50.97 19.632 50.586 19.832C50.21 20.024 49.802 20.12 49.362 20.12ZM49.518 19.172C50.11 19.172 50.598 18.964 50.982 18.548C51.366 18.132 51.558 17.616 51.558 17C51.558 16.384 51.366 15.868 50.982 15.452C50.598 15.036 50.11 14.828 49.518 14.828C48.918 14.828 48.426 15.036 48.042 15.452C47.658 15.868 47.466 16.384 47.466 17C47.466 17.616 47.658 18.132 48.042 18.548C48.426 18.964 48.918 19.172 49.518 19.172ZM57.1126 20.12C56.2086 20.12 55.4606 19.82 54.8686 19.22C54.2766 18.612 53.9806 17.872 53.9806 17C53.9806 16.128 54.2766 15.392 54.8686 14.792C55.4606 14.184 56.2086 13.88 57.1126 13.88C57.8566 13.88 58.5006 14.088 59.0446 14.504C59.5886 14.912 59.9526 15.448 60.1366 16.112H59.0326C58.8886 15.72 58.6486 15.408 58.3126 15.176C57.9766 14.944 57.5766 14.828 57.1126 14.828C56.4966 14.828 55.9926 15.036 55.6006 15.452C55.2166 15.868 55.0246 16.384 55.0246 17C55.0246 17.616 55.2166 18.132 55.6006 18.548C55.9926 18.964 56.4966 19.172 57.1126 19.172C57.5766 19.172 57.9766 19.056 58.3126 18.824C58.6486 18.592 58.8886 18.28 59.0326 17.888H60.1366C59.9606 18.552 59.6006 19.092 59.0566 19.508C58.5126 19.916 57.8646 20.12 57.1126 20.12ZM64.0592 20.12C63.1873 20.12 62.4633 19.824 61.8873 19.232C61.3193 18.64 61.0353 17.896 61.0353 17C61.0353 16.096 61.3113 15.352 61.8633 14.768C62.4233 14.176 63.1633 13.88 64.0833 13.88C65.0113 13.88 65.7393 14.208 66.2673 14.864C66.7953 15.52 67.0273 16.324 66.9633 17.276H62.0793C62.0953 17.82 62.2953 18.276 62.6793 18.644C63.0633 19.004 63.5273 19.184 64.0713 19.184C64.8873 19.184 65.4673 18.848 65.8113 18.176H66.8672C66.7153 18.736 66.3913 19.2 65.8953 19.568C65.3993 19.936 64.7873 20.12 64.0592 20.12ZM65.2353 15.224C64.9073 14.936 64.5113 14.792 64.0473 14.792C63.5833 14.792 63.1673 14.932 62.7993 15.212C62.4393 15.492 62.2153 15.908 62.1273 16.46H65.8713C65.7753 15.916 65.5633 15.504 65.2353 15.224ZM71.5965 20.12C71.1565 20.12 70.7445 20.024 70.3605 19.832C69.9845 19.632 69.6925 19.38 69.4845 19.076V20H68.4525V11H69.4845V14.924C69.6925 14.62 69.9845 14.372 70.3605 14.18C70.7445 13.98 71.1565 13.88 71.5965 13.88C72.4285 13.88 73.1245 14.184 73.6845 14.792C74.2525 15.4 74.5365 16.136 74.5365 17C74.5365 17.864 74.2525 18.6 73.6845 19.208C73.1245 19.816 72.4285 20.12 71.5965 20.12ZM69.9765 18.548C70.3605 18.964 70.8485 19.172 71.4405 19.172C72.0325 19.172 72.5205 18.964 72.9045 18.548C73.2885 18.132 73.4805 17.616 73.4805 17C73.4805 16.384 73.2885 15.868 72.9045 15.452C72.5205 15.036 72.0325 14.828 71.4405 14.828C70.8485 14.828 70.3605 15.036 69.9765 15.452C69.5925 15.868 69.4005 16.384 69.4005 17C69.4005 17.616 69.5925 18.132 69.9765 18.548ZM78.6751 20.12C77.7711 20.12 77.0191 19.82 76.4191 19.22C75.8271 18.612 75.5311 17.872 75.5311 17C75.5311 16.128 75.8271 15.392 76.4191 14.792C77.0191 14.184 77.7711 13.88 78.6751 13.88C79.5711 13.88 80.3151 14.184 80.9071 14.792C81.5071 15.392 81.8071 16.128 81.8071 17C81.8071 17.872 81.5071 18.612 80.9071 19.22C80.3151 19.82 79.5711 20.12 78.6751 20.12ZM77.1631 18.536C77.5551 18.952 78.0591 19.16 78.6751 19.16C79.2911 19.16 79.7911 18.952 80.1751 18.536C80.5591 18.12 80.7511 17.608 80.7511 17C80.7511 16.392 80.5591 15.88 80.1751 15.464C79.7911 15.048 79.2911 14.84 78.6751 14.84C78.0591 14.84 77.5551 15.048 77.1631 15.464C76.7791 15.88 76.5871 16.392 76.5871 17C76.5871 17.608 76.7791 18.12 77.1631 18.536ZM85.9524 20.12C85.0484 20.12 84.2964 19.82 83.6964 19.22C83.1044 18.612 82.8084 17.872 82.8084 17C82.8084 16.128 83.1044 15.392 83.6964 14.792C84.2964 14.184 85.0484 13.88 85.9524 13.88C86.8484 13.88 87.5924 14.184 88.1844 14.792C88.7844 15.392 89.0844 16.128 89.0844 17C89.0844 17.872 88.7844 18.612 88.1844 19.22C87.5924 19.82 86.8484 20.12 85.9524 20.12ZM84.4404 18.536C84.8324 18.952 85.3364 19.16 85.9524 19.16C86.5684 19.16 87.0684 18.952 87.4524 18.536C87.8364 18.12 88.0284 17.608 88.0284 17C88.0284 16.392 87.8364 15.88 87.4524 15.464C87.0684 15.048 86.5684 14.84 85.9524 14.84C85.3364 14.84 84.8324 15.048 84.4404 15.464C84.0564 15.88 83.8644 16.392 83.8644 17C83.8644 17.608 84.0564 18.12 84.4404 18.536ZM94.8498 20L91.5978 17V20H90.5658V11H91.5978V16.34L94.2138 14H95.5818L92.6298 16.652L96.2418 20H94.8498ZM100.739 12.188C100.603 12.324 100.431 12.392 100.223 12.392C100.015 12.392 99.8387 12.324 99.6947 12.188C99.5507 12.044 99.4787 11.868 99.4787 11.66C99.4787 11.46 99.5507 11.288 99.6947 11.144C99.8387 11 100.015 10.928 100.223 10.928C100.431 10.928 100.603 11 100.739 11.144C100.875 11.288 100.943 11.46 100.943 11.66C100.943 11.868 100.875 12.044 100.739 12.188ZM99.6947 20V14H100.727V20H99.6947ZM102.683 20V11H103.715V20H102.683ZM108.167 13.88C109.031 13.88 109.743 14.176 110.303 14.768C110.863 15.36 111.143 16.104 111.143 17C111.143 17.944 110.879 18.7 110.351 19.268C109.831 19.836 109.103 20.12 108.167 20.12C107.223 20.12 106.479 19.792 105.935 19.136C105.391 18.48 105.151 17.676 105.215 16.724H110.099C110.067 16.18 109.867 15.728 109.499 15.368C109.131 15 108.687 14.816 108.167 14.816C107.319 14.816 106.723 15.152 106.379 15.824H105.311C105.463 15.264 105.787 14.8 106.283 14.432C106.787 14.064 107.415 13.88 108.167 13.88ZM108.203 19.208C108.667 19.208 109.067 19.072 109.403 18.8C109.747 18.52 109.963 18.1 110.051 17.54H106.295C106.391 18.076 106.611 18.488 106.955 18.776C107.307 19.064 107.723 19.208 108.203 19.208Z"
              fill="#4F4F4F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.1667 8.91667C20.1667 8.68667 19.9792 8.5 19.75 8.5H17.6667C15.365 8.5 13.5 10.1792 13.5 12.25V14.5H11.4167C11.1867 14.5 11 14.6867 11 14.9167V17.0833C11 17.3133 11.1867 17.5 11.4167 17.5H13.5V23.0833C13.5 23.3133 13.6867 23.5 13.9167 23.5H16.4167C16.6458 23.5 16.8333 23.3133 16.8333 23.0833V17.5H19.0158C19.2033 17.5 19.3675 17.375 19.4183 17.195L20.0192 15.0283C20.0933 14.7633 19.8933 14.5 19.6183 14.5H16.8333V12.25C16.8333 11.8358 17.2058 11.5 17.6667 11.5H19.75C19.9792 11.5 20.1667 11.3133 20.1667 11.0833V8.91667Z"
              fill="white"
            />
          </svg>
          <svg
            width="98"
            height="32"
            viewBox="0 0 98 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#DB4437" />
            <path
              d="M44.968 20.144C43.712 20.144 42.66 19.724 41.812 18.884C40.972 18.036 40.552 16.988 40.552 15.74C40.552 14.492 40.972 13.448 41.812 12.608C42.66 11.76 43.712 11.336 44.968 11.336C45.928 11.336 46.776 11.596 47.512 12.116C48.248 12.628 48.744 13.256 49 14H47.764C47.524 13.52 47.156 13.132 46.66 12.836C46.164 12.54 45.6 12.392 44.968 12.392C44.024 12.392 43.236 12.716 42.604 13.364C41.98 14.004 41.668 14.796 41.668 15.74C41.668 16.684 41.98 17.48 42.604 18.128C43.236 18.768 44.024 19.088 44.968 19.088C45.84 19.088 46.556 18.816 47.116 18.272C47.684 17.728 48.008 17.028 48.088 16.172H44.92V15.128H49.24C49.352 16.632 48.992 17.844 48.16 18.764C47.328 19.684 46.264 20.144 44.968 20.144ZM53.4329 20.12C52.5289 20.12 51.7769 19.82 51.1769 19.22C50.5849 18.612 50.2889 17.872 50.2889 17C50.2889 16.128 50.5849 15.392 51.1769 14.792C51.7769 14.184 52.5289 13.88 53.4329 13.88C54.3289 13.88 55.0729 14.184 55.6649 14.792C56.2649 15.392 56.5649 16.128 56.5649 17C56.5649 17.872 56.2649 18.612 55.6649 19.22C55.0729 19.82 54.3289 20.12 53.4329 20.12ZM51.9209 18.536C52.3129 18.952 52.8169 19.16 53.4329 19.16C54.0489 19.16 54.5489 18.952 54.9329 18.536C55.3169 18.12 55.5089 17.608 55.5089 17C55.5089 16.392 55.3169 15.88 54.9329 15.464C54.5489 15.048 54.0489 14.84 53.4329 14.84C52.8169 14.84 52.3129 15.048 51.9209 15.464C51.5369 15.88 51.3449 16.392 51.3449 17C51.3449 17.608 51.5369 18.12 51.9209 18.536ZM60.7102 20.12C59.8062 20.12 59.0542 19.82 58.4542 19.22C57.8622 18.612 57.5662 17.872 57.5662 17C57.5662 16.128 57.8622 15.392 58.4542 14.792C59.0542 14.184 59.8062 13.88 60.7102 13.88C61.6062 13.88 62.3502 14.184 62.9422 14.792C63.5422 15.392 63.8422 16.128 63.8422 17C63.8422 17.872 63.5422 18.612 62.9422 19.22C62.3502 19.82 61.6062 20.12 60.7102 20.12ZM59.1982 18.536C59.5902 18.952 60.0942 19.16 60.7102 19.16C61.3262 19.16 61.8262 18.952 62.2102 18.536C62.5942 18.12 62.7862 17.608 62.7862 17C62.7862 16.392 62.5942 15.88 62.2102 15.464C61.8262 15.048 61.3262 14.84 60.7102 14.84C60.0942 14.84 59.5902 15.048 59.1982 15.464C58.8142 15.88 58.6222 16.392 58.6222 17C58.6222 17.608 58.8142 18.12 59.1982 18.536ZM67.9636 22.628C67.1716 22.628 66.5116 22.432 65.9836 22.04C65.4636 21.656 65.1556 21.16 65.0596 20.552H66.0676C66.3316 21.328 66.9716 21.716 67.9876 21.716C68.5556 21.716 69.0116 21.532 69.3556 21.164C69.7076 20.804 69.8836 20.296 69.8836 19.64V18.932C69.6676 19.252 69.3756 19.508 69.0076 19.7C68.6396 19.892 68.2356 19.988 67.7956 19.988C66.9556 19.988 66.2556 19.696 65.6956 19.112C65.1356 18.52 64.8556 17.792 64.8556 16.928C64.8556 16.072 65.1356 15.352 65.6956 14.768C66.2636 14.176 66.9636 13.88 67.7956 13.88C68.2356 13.88 68.6396 13.976 69.0076 14.168C69.3756 14.36 69.6676 14.612 69.8836 14.924V14H70.9156V19.628C70.9156 20.588 70.6356 21.328 70.0756 21.848C69.5236 22.368 68.8196 22.628 67.9636 22.628ZM66.4756 18.44C66.8516 18.832 67.3396 19.028 67.9396 19.028C68.5396 19.028 69.0276 18.832 69.4036 18.44C69.7796 18.04 69.9676 17.536 69.9676 16.928C69.9676 16.32 69.7756 15.82 69.3916 15.428C69.0156 15.028 68.5316 14.828 67.9396 14.828C67.3476 14.828 66.8596 15.028 66.4756 15.428C66.0996 15.82 65.9116 16.32 65.9116 16.928C65.9116 17.536 66.0996 18.04 66.4756 18.44ZM72.8587 20V11H73.8907V20H72.8587ZM78.403 20.12C77.531 20.12 76.807 19.824 76.231 19.232C75.663 18.64 75.379 17.896 75.379 17C75.379 16.096 75.655 15.352 76.207 14.768C76.767 14.176 77.507 13.88 78.427 13.88C79.355 13.88 80.083 14.208 80.611 14.864C81.139 15.52 81.371 16.324 81.307 17.276H76.423C76.439 17.82 76.639 18.276 77.023 18.644C77.407 19.004 77.871 19.184 78.415 19.184C79.231 19.184 79.811 18.848 80.155 18.176H81.211C81.059 18.736 80.735 19.2 80.239 19.568C79.743 19.936 79.131 20.12 78.403 20.12ZM79.579 15.224C79.251 14.936 78.855 14.792 78.391 14.792C77.927 14.792 77.511 14.932 77.143 15.212C76.783 15.492 76.559 15.908 76.471 16.46H80.215C80.119 15.916 79.907 15.504 79.579 15.224ZM86.7348 12.188C86.5988 12.324 86.4268 12.392 86.2188 12.392C86.0108 12.392 85.8348 12.324 85.6908 12.188C85.5468 12.044 85.4748 11.868 85.4748 11.66C85.4748 11.46 85.5468 11.288 85.6908 11.144C85.8348 11 86.0108 10.928 86.2188 10.928C86.4268 10.928 86.5988 11 86.7348 11.144C86.8708 11.288 86.9388 11.46 86.9388 11.66C86.9388 11.868 86.8708 12.044 86.7348 12.188ZM85.6908 20V14H86.7228V20H85.6908ZM88.679 20V11H89.711V20H88.679ZM94.1633 13.88C95.0273 13.88 95.7393 14.176 96.2993 14.768C96.8593 15.36 97.1393 16.104 97.1393 17C97.1393 17.944 96.8753 18.7 96.3473 19.268C95.8273 19.836 95.0993 20.12 94.1633 20.12C93.2193 20.12 92.4753 19.792 91.9313 19.136C91.3873 18.48 91.1473 17.676 91.2113 16.724H96.0953C96.0633 16.18 95.8633 15.728 95.4953 15.368C95.1273 15 94.6833 14.816 94.1633 14.816C93.3153 14.816 92.7193 15.152 92.3753 15.824H91.3073C91.4593 15.264 91.7833 14.8 92.2793 14.432C92.7833 14.064 93.4113 13.88 94.1633 13.88ZM94.1993 19.208C94.6633 19.208 95.0633 19.072 95.3993 18.8C95.7433 18.52 95.9593 18.1 96.0473 17.54H92.2913C92.3873 18.076 92.6073 18.488 92.9513 18.776C93.3033 19.064 93.7193 19.208 94.1993 19.208Z"
              fill="#4F4F4F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5786 17.6503C20.0236 19.4353 18.6403 20.6712 16.7995 20.9437C13.9903 21.3595 11.232 19.2295 11.0136 16.3962C10.787 13.4562 13.1061 11.0003 16.0003 11.0003C16.6695 11.0003 17.3078 11.132 17.8911 11.3703C18.0936 11.4528 18.3228 11.382 18.4261 11.1903L19.622 8.98449C19.7353 8.77366 19.6536 8.50199 19.4353 8.40366C18.3878 7.93033 17.2261 7.66699 16.0028 7.66699C11.3178 7.66699 7.53531 11.5303 7.66948 16.2445C7.79198 20.5453 11.342 24.1437 15.6395 24.3262C20.2611 24.5212 24.0945 20.9545 24.327 16.4353C24.3361 16.2703 24.3328 15.3095 24.3295 14.7462C24.3286 14.5162 24.142 14.3337 23.9128 14.3337H16.4136C16.1836 14.3337 15.997 14.5195 15.997 14.7503V17.2337C15.997 17.4628 16.1836 17.6503 16.4136 17.6503H20.5786Z"
              fill="white"
            />
          </svg>
        </div>
        <div id="and"> və ya</div>
        <div className="name">
          <label>Ad,Soyad</label>
          <input type="text" onChange={(e) => {
              setFirstName(e.target.value);
            }}/>
        </div>
        <div className="email">
          <label>E-mail</label>
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="email"
          />
        </div>
        <div className="mobile">
          <label>Mobil Telefon</label>
          <input type="text" placeholder="+994XX-XXX-XX-XX" />
        </div>

        <button
          onClick={() => {
            signUp();
            showToastMessage();
          }}
          type="button"
        >
          Qeydiyyat
        </button>
        <ToastContainer />
      </form>
      <div className="login-picture">
        <svg
          width="460"
          height="298"
          viewBox="0 0 460 298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.16" clipPath="url(#clip0_0_1)">
            <circle cx="265" cy="5" r="5" fill="#2DD06E" />
            <circle cx="285" cy="5" r="5" fill="#2DD06E" />
            <circle cx="305" cy="5" r="5" fill="#2DD06E" />
            <circle cx="325" cy="5" r="5" fill="#2DD06E" />
            <circle cx="345" cy="5" r="5" fill="#2DD06E" />
            <circle cx="365" cy="5" r="5" fill="#2DD06E" />
            <circle cx="385" cy="5" r="5" fill="#2DD06E" />
            <circle cx="405" cy="5" r="5" fill="#2DD06E" />
            <circle cx="425" cy="5" r="5" fill="#2DD06E" />
            <circle cx="445" cy="5" r="5" fill="#2DD06E" />
            <circle cx="265" cy="25" r="5" fill="#2DD06E" />
            <circle cx="285" cy="25" r="5" fill="#2DD06E" />
            <circle cx="305" cy="25" r="5" fill="#2DD06E" />
            <circle cx="325" cy="25" r="5" fill="#2DD06E" />
            <circle cx="345" cy="25" r="5" fill="#2DD06E" />
            <circle cx="365" cy="25" r="5" fill="#2DD06E" />
            <circle cx="385" cy="25" r="5" fill="#2DD06E" />
            <circle cx="405" cy="25" r="5" fill="#2DD06E" />
            <circle cx="425" cy="25" r="5" fill="#2DD06E" />
            <circle cx="445" cy="25" r="5" fill="#2DD06E" />
            <circle cx="265" cy="45" r="5" fill="#2DD06E" />
            <circle cx="285" cy="45" r="5" fill="#2DD06E" />
            <circle cx="305" cy="45" r="5" fill="#2DD06E" />
            <circle cx="325" cy="45" r="5" fill="#2DD06E" />
            <circle cx="345" cy="45" r="5" fill="#2DD06E" />
            <circle cx="365" cy="45" r="5" fill="#2DD06E" />
            <circle cx="385" cy="45" r="5" fill="#2DD06E" />
            <circle cx="405" cy="45" r="5" fill="#2DD06E" />
            <circle cx="425" cy="45" r="5" fill="#2DD06E" />
            <circle cx="445" cy="45" r="5" fill="#2DD06E" />
            <circle cx="265" cy="65" r="5" fill="#2DD06E" />
            <circle cx="285" cy="65" r="5" fill="#2DD06E" />
            <circle cx="305" cy="65" r="5" fill="#2DD06E" />
            <circle cx="325" cy="65" r="5" fill="#2DD06E" />
            <circle cx="345" cy="65" r="5" fill="#2DD06E" />
            <circle cx="365" cy="65" r="5" fill="#2DD06E" />
            <circle cx="385" cy="65" r="5" fill="#2DD06E" />
            <circle cx="405" cy="65" r="5" fill="#2DD06E" />
            <circle cx="425" cy="65" r="5" fill="#2DD06E" />
            <circle cx="445" cy="65" r="5" fill="#2DD06E" />
            <circle cx="265" cy="85" r="5" fill="#2DD06E" />
            <circle cx="285" cy="85" r="5" fill="#2DD06E" />
            <circle cx="305" cy="85" r="5" fill="#2DD06E" />
            <circle cx="325" cy="85" r="5" fill="#2DD06E" />
            <circle cx="345" cy="85" r="5" fill="#2DD06E" />
            <circle cx="365" cy="85" r="5" fill="#2DD06E" />
            <circle cx="385" cy="85" r="5" fill="#2DD06E" />
            <circle cx="405" cy="85" r="5" fill="#2DD06E" />
            <circle cx="425" cy="85" r="5" fill="#2DD06E" />
            <circle cx="445" cy="85" r="5" fill="#2DD06E" />
            <circle cx="265" cy="105" r="5" fill="#2DD06E" />
            <circle cx="285" cy="105" r="5" fill="#2DD06E" />
            <circle cx="305" cy="105" r="5" fill="#2DD06E" />
            <circle cx="325" cy="105" r="5" fill="#2DD06E" />
            <circle cx="345" cy="105" r="5" fill="#2DD06E" />
            <circle cx="365" cy="105" r="5" fill="#2DD06E" />
            <circle cx="385" cy="105" r="5" fill="#2DD06E" />
            <circle cx="405" cy="105" r="5" fill="#2DD06E" />
            <circle cx="425" cy="105" r="5" fill="#2DD06E" />
            <circle cx="445" cy="105" r="5" fill="#2DD06E" />
            <circle cx="265" cy="125" r="5" fill="#2DD06E" />
            <circle cx="285" cy="125" r="5" fill="#2DD06E" />
            <circle cx="305" cy="125" r="5" fill="#2DD06E" />
            <circle cx="325" cy="125" r="5" fill="#2DD06E" />
            <circle cx="345" cy="125" r="5" fill="#2DD06E" />
            <circle cx="365" cy="125" r="5" fill="#2DD06E" />
            <circle cx="385" cy="125" r="5" fill="#2DD06E" />
            <circle cx="405" cy="125" r="5" fill="#2DD06E" />
            <circle cx="425" cy="125" r="5" fill="#2DD06E" />
            <circle cx="445" cy="125" r="5" fill="#2DD06E" />
            <circle cx="265" cy="145" r="5" fill="#2DD06E" />
            <circle cx="285" cy="145" r="5" fill="#2DD06E" />
            <circle cx="305" cy="145" r="5" fill="#2DD06E" />
            <circle cx="325" cy="145" r="5" fill="#2DD06E" />
            <circle cx="345" cy="145" r="5" fill="#2DD06E" />
            <circle cx="365" cy="145" r="5" fill="#2DD06E" />
            <circle cx="385" cy="145" r="5" fill="#2DD06E" />
            <circle cx="405" cy="145" r="5" fill="#2DD06E" />
            <circle cx="425" cy="145" r="5" fill="#2DD06E" />
            <circle cx="445" cy="145" r="5" fill="#2DD06E" />
            <circle cx="265" cy="165" r="5" fill="#2DD06E" />
            <circle cx="285" cy="165" r="5" fill="#2DD06E" />
            <circle cx="305" cy="165" r="5" fill="#2DD06E" />
            <circle cx="325" cy="165" r="5" fill="#2DD06E" />
            <circle cx="345" cy="165" r="5" fill="#2DD06E" />
            <circle cx="365" cy="165" r="5" fill="#2DD06E" />
            <circle cx="385" cy="165" r="5" fill="#2DD06E" />
            <circle cx="405" cy="165" r="5" fill="#2DD06E" />
            <circle cx="425" cy="165" r="5" fill="#2DD06E" />
            <circle cx="445" cy="165" r="5" fill="#2DD06E" />
            <circle cx="265" cy="185" r="5" fill="#2DD06E" />
            <circle cx="285" cy="185" r="5" fill="#2DD06E" />
            <circle cx="305" cy="185" r="5" fill="#2DD06E" />
            <circle cx="325" cy="185" r="5" fill="#2DD06E" />
            <circle cx="345" cy="185" r="5" fill="#2DD06E" />
            <circle cx="365" cy="185" r="5" fill="#2DD06E" />
            <circle cx="385" cy="185" r="5" fill="#2DD06E" />
            <circle cx="405" cy="185" r="5" fill="#2DD06E" />
            <circle cx="425" cy="185" r="5" fill="#2DD06E" />
            <circle cx="445" cy="185" r="5" fill="#2DD06E" />
          </g>
          <g clipPath="url(#clip1_0_1)">
            <path
              d="M201.969 295.62H198.758L199.828 232.912H200.898L201.969 295.62Z"
              fill="#E6E6E6"
            />
            <path
              d="M204.502 193.375L209.676 185.389C208.142 181.156 206.37 177.012 204.368 172.978L201.022 175.677L203.672 171.588C201.147 166.625 199.16 163.498 199.16 163.498C199.16 163.498 188.784 179.829 185.317 197.121L191.957 207.369L184.606 201.44C184.345 203.454 184.21 205.483 184.203 207.514C184.203 227.993 190.9 244.595 199.16 244.595C207.421 244.595 214.118 227.993 214.118 207.514C214.118 201.165 212.68 194.523 210.696 188.379L204.502 193.375Z"
              fill="#E6E6E6"
            />
            <path
              d="M120.656 295.62H117.445L118.516 232.912H119.585L120.656 295.62Z"
              fill="#E6E6E6"
            />
            <path
              d="M124.393 193.375L129.567 185.389C128.033 181.156 126.26 177.012 124.259 172.978L120.913 175.677L123.562 171.588C121.038 166.625 119.051 163.498 119.051 163.498C119.051 163.498 108.674 179.829 105.208 197.121L111.847 207.369L104.497 201.44C104.235 203.454 104.101 205.483 104.094 207.514C104.094 227.993 110.79 244.595 119.051 244.595C127.312 244.595 134.008 227.993 134.008 207.514C134.008 201.165 132.57 194.523 130.587 188.379L124.393 193.375Z"
              fill="#E6E6E6"
            />
            <path
              d="M160.556 295.426H154.135L156.275 166.447H158.416L160.556 295.426Z"
              fill="#E6E6E6"
            />
            <path
              d="M166.138 85.1273L176.807 68.6603C173.643 59.9316 169.989 51.3882 165.862 43.0706L158.963 48.6356L164.425 40.2044C159.22 29.9701 155.124 23.522 155.124 23.522C155.124 23.522 133.728 57.1965 126.58 92.8501L140.27 113.981L125.115 101.755C124.575 105.909 124.297 110.092 124.283 114.28C124.283 156.506 138.091 190.736 155.124 190.736C172.157 190.736 185.964 156.506 185.964 114.28C185.964 101.189 182.999 87.4939 178.909 74.8252L166.138 85.1273Z"
              fill="#E6E6E6"
            />
            <path
              d="M129.382 76.145C145.735 76.145 158.991 62.9049 158.991 46.5725C158.991 30.2401 145.735 17 129.382 17C113.03 17 99.7734 30.2401 99.7734 46.5725C99.7734 62.9049 113.03 76.145 129.382 76.145Z"
              fill="#E6E6E6"
            />
            <path d="M384 295.248H0V296.216H384V295.248Z" fill="#3F3D56" />
            <path
              d="M345.614 143.297C345.774 143.297 345.933 143.266 346.081 143.205C346.229 143.143 346.363 143.054 346.476 142.94C346.59 142.827 346.68 142.693 346.741 142.545C346.802 142.397 346.834 142.239 346.834 142.079V129.08C346.836 128.885 346.79 128.692 346.701 128.518C346.612 128.344 346.481 128.194 346.321 128.081C346.161 127.969 345.976 127.897 345.782 127.872C345.588 127.846 345.391 127.868 345.207 127.936V113.238C345.207 112.705 345.102 112.176 344.897 111.684C344.693 111.191 344.394 110.743 344.016 110.366C343.638 109.989 343.19 109.689 342.696 109.485C342.203 109.281 341.674 109.176 341.14 109.176H208.147C207.613 109.176 207.084 109.281 206.591 109.485C206.097 109.689 205.649 109.989 205.271 110.366C204.894 110.743 204.594 111.191 204.39 111.684C204.185 112.176 204.08 112.705 204.08 113.238V291.562C204.08 292.64 204.509 293.673 205.271 294.435C206.034 295.197 207.068 295.625 208.147 295.625H341.14C342.219 295.625 343.253 295.197 344.016 294.435C344.779 293.673 345.207 292.64 345.207 291.562V161.502C345.391 161.57 345.588 161.592 345.782 161.566C345.976 161.541 346.161 161.469 346.321 161.357C346.481 161.244 346.611 161.094 346.701 160.92C346.79 160.746 346.836 160.553 346.834 160.358V147.359C346.836 147.164 346.79 146.971 346.701 146.797C346.611 146.623 346.481 146.473 346.321 146.361C346.161 146.248 345.976 146.176 345.782 146.151C345.588 146.126 345.391 146.148 345.207 146.215V143.223C345.337 143.271 345.475 143.296 345.614 143.297V143.297Z"
              fill="#3F3D56"
            />
            <path
              d="M333.006 117.097C333.541 117.097 334.069 117.202 334.563 117.406C335.056 117.611 335.505 117.91 335.882 118.287C336.26 118.664 336.56 119.112 336.764 119.605C336.968 120.098 337.074 120.626 337.074 121.159V283.642C337.074 284.719 336.645 285.752 335.882 286.514C335.12 287.276 334.085 287.704 333.006 287.704H216.282C215.203 287.704 214.169 287.276 213.406 286.514C212.643 285.752 212.215 284.719 212.215 283.642V121.159C212.215 120.082 212.643 119.049 213.406 118.287C214.169 117.525 215.203 117.097 216.282 117.097H333.006Z"
              fill="white"
            />
            <path
              d="M274.644 114.863C275.543 114.863 276.271 114.135 276.271 113.238C276.271 112.341 275.543 111.613 274.644 111.613C273.746 111.613 273.018 112.341 273.018 113.238C273.018 114.135 273.746 114.863 274.644 114.863Z"
              fill="white"
            />
            <path
              d="M322.944 138.412H222.979V148.334H322.944V138.412Z"
              fill="#2DD06E"
            />
            <path
              d="M322.944 161.784H222.979V165.542H322.944V161.784Z"
              fill="#E6E6E6"
            />
            <path
              d="M322.944 173.254H222.979V177.012H322.944V173.254Z"
              fill="#E6E6E6"
            />
            <path
              d="M274.63 184.87H222.979V188.628H274.63V184.87Z"
              fill="#E6E6E6"
            />
            <path
              d="M322.944 196.692H222.979V200.45H322.944V196.692Z"
              fill="#E6E6E6"
            />
            <path
              d="M322.944 208.514H222.979V212.272H322.944V208.514Z"
              fill="#E6E6E6"
            />
            <path
              d="M272.901 220.336H222.979V224.094H272.901V220.336Z"
              fill="#E6E6E6"
            />
            <path
              d="M322.944 232.158H222.979V235.916H322.944V232.158Z"
              fill="#E6E6E6"
            />
            <path
              d="M322.944 243.98H222.979V247.738H322.944V243.98Z"
              fill="#E6E6E6"
            />
            <path
              d="M323.064 258.48H291.496V268.846H323.064V258.48Z"
              fill="#2DD06E"
            />
            <path
              d="M115.869 175.111H115.158V151.454C115.158 147.807 113.707 144.309 111.125 141.73C108.543 139.151 105.041 137.702 101.389 137.702H50.9343C49.1262 137.702 47.3358 138.058 45.6654 138.749C43.995 139.44 42.4771 140.453 41.1986 141.73C39.9201 143.007 38.906 144.523 38.2141 146.191C37.5221 147.86 37.166 149.648 37.166 151.454V281.873C37.166 283.679 37.5221 285.467 38.2141 287.136C38.906 288.804 39.9201 290.32 41.1986 291.597C42.4771 292.874 43.995 293.887 45.6654 294.578C47.3358 295.269 49.1262 295.625 50.9343 295.625H101.389C105.041 295.625 108.543 294.176 111.125 291.597C113.707 289.018 115.158 285.52 115.158 281.873V191.922H115.869V175.111Z"
              fill="#3F3D56"
            />
            <path
              d="M112.076 150.511V281.567C112.076 284.29 110.993 286.903 109.064 288.828C107.136 290.754 104.521 291.836 101.793 291.836H51.2414C48.5143 291.836 45.899 290.754 43.9706 288.828C42.0423 286.903 40.959 284.29 40.959 281.567V150.511C40.959 148.056 41.9354 145.701 43.6735 143.965C45.4116 142.229 47.769 141.254 50.227 141.254H57.3642C57.0947 141.927 56.9747 142.651 57.0124 143.375C57.0502 144.099 57.2448 144.806 57.5829 145.448C57.9945 146.157 58.5774 146.751 59.2783 147.176C59.9792 147.602 60.7757 147.845 61.595 147.883H91.0062C91.8256 147.845 92.6222 147.602 93.3231 147.176C94.024 146.751 94.6069 146.157 95.0184 145.448C95.3564 144.806 95.551 144.099 95.5887 143.375C95.6264 142.651 95.5064 141.927 95.2369 141.254H102.808C105.266 141.254 107.623 142.229 109.361 143.965C111.099 145.701 112.076 148.056 112.076 150.511V150.511Z"
              fill="white"
            />
            <path
              d="M170.651 114.939C170.651 114.939 165.288 113.026 161.84 120.679C158.392 128.331 153.029 136.748 153.029 136.748L156.094 137.513C156.094 137.513 156.86 132.157 158.775 131.392L158.009 138.278C158.009 138.278 180.994 146.313 191.337 137.513L190.954 134.835C190.954 134.835 192.486 135.218 192.486 137.513L193.636 136.365C193.636 136.365 192.486 134.07 189.039 131.009C186.776 129 185.998 125.178 185.731 122.788C185.531 120.793 184.731 118.904 183.438 117.371C181.146 114.719 176.972 111.9 170.651 114.939Z"
              fill="#2F2E41"
            />
            <path
              d="M139.154 180.584L144.169 186.959L147.361 183.315L144.625 178.762L139.154 180.584Z"
              fill="#FBBEBE"
            />
            <path
              d="M137.331 278.485L135.508 288.048L140.067 290.325L143.258 288.048V278.485H137.331Z"
              fill="#FBBEBE"
            />
            <path
              d="M169.245 278.485L171.069 288.048L166.51 290.325L163.318 288.048V278.485H169.245Z"
              fill="#FBBEBE"
            />
            <path
              d="M150.552 192.423L144.169 237.958L135.051 279.396L145.993 280.762L154.656 242.057L165.597 209.271L164.23 248.432L161.95 280.762H170.157L176.083 237.048L182.637 204.547L182.466 192.423H150.552Z"
              fill="#2F2E41"
            />
            <path
              d="M138.698 287.137C138.698 287.137 136.418 284.405 135.051 285.771C133.683 287.137 130.491 292.602 130.491 292.602C130.491 292.602 123.197 296.7 129.124 297.61C135.051 298.521 136.874 297.61 136.874 297.155C136.874 296.7 137.786 295.334 137.786 295.334L140.066 295.789L143.257 294.878C143.257 294.878 144.625 286.488 143.257 286.813C141.889 287.137 139.154 288.503 138.698 287.137Z"
              fill="#2F2E41"
            />
            <path
              d="M167.876 287.137C167.876 287.137 170.156 284.405 171.523 285.771C172.891 287.137 176.083 292.602 176.083 292.602C176.083 292.602 183.377 296.7 177.45 297.61C171.523 298.521 169.7 297.61 169.7 297.155C169.7 296.7 168.788 295.334 168.788 295.334L166.508 295.789L163.317 294.878C163.317 294.878 161.949 286.488 163.317 286.813C164.685 287.137 167.42 288.503 167.876 287.137Z"
              fill="#2F2E41"
            />
            <path
              d="M172.208 138.463C177.244 138.463 181.327 134.386 181.327 129.356C181.327 124.326 177.244 120.249 172.208 120.249C167.172 120.249 163.09 124.326 163.09 129.356C163.09 134.386 167.172 138.463 172.208 138.463Z"
              fill="#FBBEBE"
            />
            <path
              d="M178.363 135.048C178.363 135.048 177.451 142.789 177.907 144.61C178.363 146.432 179.275 149.164 179.275 149.164L164.686 146.432C164.686 146.432 168.789 137.78 167.877 136.414C166.965 135.048 178.363 135.048 178.363 135.048Z"
              fill="#FBBEBE"
            />
            <path
              d="M179.731 145.977L164.686 142.789L156.023 195.61C159.928 194.546 164.066 194.705 167.877 196.066C174.26 198.343 182.923 196.066 182.923 196.066L181.099 146.432L179.731 145.977Z"
              fill="#2DD06E"
            />
            <path
              d="M167.749 138.605L162.406 141.423L155.567 142.789L148.272 160.093L149.184 172.387C149.184 172.387 141.433 186.503 140.521 194.244C140.521 194.244 141.433 206.084 156.479 205.628L166.509 177.851C166.509 177.851 170.612 156.905 166.509 150.985C166.509 150.985 169.446 139.886 167.749 138.605Z"
              fill="#2F2E41"
            />
            <path
              d="M158.302 142.789L156.826 142.537L155.567 142.789C155.567 142.789 152.375 143.244 148.728 146.432C145.081 149.619 132.771 159.637 131.859 162.369C130.947 165.101 131.403 169.655 132.771 172.387C134.139 175.119 136.874 178.762 136.874 178.762L138.242 181.95L145.993 179.673C145.993 179.673 140.978 170.11 141.433 166.012L150.552 158.726L158.302 142.789Z"
              fill="#2F2E41"
            />
            <path
              d="M177.858 140.664L184.745 149.164L188.393 153.717L183.833 169.2L181.554 182.405C181.554 182.405 187.025 203.351 182.466 209.726C182.466 209.726 179.73 212.914 178.818 209.271C177.907 205.628 177.907 188.325 177.907 188.325C177.907 188.325 174.259 165.557 176.083 159.637C177.907 153.717 175.985 141.727 177.858 140.664Z"
              fill="#2F2E41"
            />
            <path
              d="M184.291 206.539V211.092C184.291 211.092 183.379 226.119 187.939 224.298C192.498 222.476 189.306 211.092 189.306 211.092L188.85 206.083L184.291 206.539Z"
              fill="#FBBEBE"
            />
            <path
              d="M162.045 129.841C165.513 127.335 168.32 124.448 170.176 121.014C170.176 121.014 176.54 128.076 180.429 128.429C184.318 128.782 180.783 119.955 180.783 119.955L173.712 118.189L166.995 118.895L161.691 122.426L162.045 129.841Z"
              fill="#2F2E41"
            />
            <path
              d="M184.745 152.351L188.393 153.717L188.849 158.271L190.672 186.048L189.76 206.995L182.922 207.45L180.642 184.226L179.73 158.727L184.745 152.351Z"
              fill="#2F2E41"
            />
            <path
              d="M104.127 178.396H48.709V183.897H104.127V178.396Z"
              fill="#2DD06E"
            />
            <path
              d="M104.127 191.353H48.709V193.437H104.127V191.353Z"
              fill="#E6E6E6"
            />
            <path
              d="M104.127 197.712H48.709V199.796H104.127V197.712Z"
              fill="#E6E6E6"
            />
            <path
              d="M77.3434 204.152H48.709V206.235H77.3434V204.152Z"
              fill="#E6E6E6"
            />
            <path
              d="M104.127 210.706H48.709V212.789H104.127V210.706Z"
              fill="#E6E6E6"
            />
            <path
              d="M104.127 217.259H48.709V219.343H104.127V217.259Z"
              fill="#E6E6E6"
            />
            <path
              d="M76.3845 223.813H48.709V225.897H76.3845V223.813Z"
              fill="#E6E6E6"
            />
            <path
              d="M104.127 230.367H48.709V232.45H104.127V230.367Z"
              fill="#E6E6E6"
            />
            <path
              d="M104.127 236.921H48.709V239.004H104.127V236.921Z"
              fill="#E6E6E6"
            />
            <path
              d="M104.194 244.959H86.6934V250.706H104.194V244.959Z"
              fill="#2DD06E"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="200"
                height="200"
                fill="white"
                transform="translate(260)"
              />
            </clipPath>
            <clipPath id="clip1_0_1">
              <rect
                width="384"
                height="281"
                fill="white"
                transform="translate(0 17)"
              />
            </clipPath>
          </defs>
        </svg>

        <p className="log-in-p">
          Artıq hesabınız var?
          <Link to="/login" className="log-in">
            Daxil olun
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpContent;
