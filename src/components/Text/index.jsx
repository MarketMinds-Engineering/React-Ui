import React from "react";

const sizeClasses = {
  txtPoppinsRegular22Black900: "font-normal font-poppins",
  txtVigaRegular51: "font-normal font-viga",
  txtMazzardHSemiBold31: "font-mazzard font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsSemiBold54: "font-poppins font-semibold",
  txtMulishRegular17: "font-mulish font-normal",
  txtMazzardHSemiBold36: "font-mazzard font-semibold",
  txtMulishRegular16: "font-mulish font-normal",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold17: "font-poppins font-semibold",
  txtPoppinsSemiBold19: "font-poppins font-semibold",
  txtRobotoMonoBold20Blue600: "font-bold font-robotomono",
  txtMazzardHMedium18Black900aa: "font-mazzard font-medium",
  txtMulishRomanExtraBold40: "font-extrabold font-mulish",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular19: "font-normal font-poppins",
  txtNunitoRegular14: "font-normal font-nunito",
  txtMazzardHMedium28: "font-mazzard font-medium",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsLight22: "font-light font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtMazzardHRegular17Black900: "font-mazzard font-normal",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtMazzardHRegular19Black900: "font-mazzard font-normal",
  txtPoppinsSemiBold27: "font-poppins font-semibold",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium21: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtMazzardHMedium15Black900aa: "font-mazzard font-medium",
  txtNunitoSemiBold20: "font-nunito font-semibold",
  txtMulishRegular24: "font-mulish font-normal",
  txtPoppinsSemiBold40WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold29: "font-poppins font-semibold",
  txtPoppinsRegular17Black900ce: "font-normal font-poppins",
  txtMazzardHMedium17: "font-mazzard font-medium",
  txtPoppinsRegular17Black900c1: "font-normal font-poppins",
  txtMazzardHSemiBold17: "font-mazzard font-semibold",
  txtMazzardHMedium18: "font-mazzard font-medium",
  txtMazzardHSemiBold18: "font-mazzard font-semibold",
  txtMazzardHMedium15: "font-mazzard font-medium",
  txtMazzardHMedium16: "font-mazzard font-medium",
  txtRobotoMonoBold12: "font-bold font-robotomono",
  txtMazzardHRegular14: "font-mazzard font-normal",
  txtMazzardHRegular15: "font-mazzard font-normal",
  txtPoppinsRegular17Black900: "font-normal font-poppins",
  txtPoppinsSemiBold38: "font-poppins font-semibold",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtNunitoRegular20: "font-normal font-nunito",
  txtPoppinsSemiBold17Black900ce: "font-poppins font-semibold",
  txtPoppinsMedium19: "font-medium font-poppins",
  txtMazzardHRegular18: "font-mazzard font-normal",
  txtPoppinsMedium17: "font-medium font-poppins",
  txtMazzardHRegular19: "font-mazzard font-normal",
  txtMazzardHRegular16: "font-mazzard font-normal",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtMazzardHRegular17: "font-mazzard font-normal",
  txtPoppinsRegular13Black900: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray400: "font-normal font-poppins",
  txtPoppinsRegular17Black9007a: "font-normal font-poppins",
  txtPoppinsRegular17WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular14Gray60001: "font-normal font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtRobotoMonoBold20: "font-bold font-robotomono",
  txtPoppinsSemiBold29Blue600: "font-poppins font-semibold",
  txtMulishRomanExtraBold16: "font-extrabold font-mulish",
  txtPoppinsSemiBold42: "font-poppins font-semibold",
  txtMazzardHSemiBold22: "font-mazzard font-semibold",
  txtPoppinsMedium42: "font-medium font-poppins",
  txtMazzardHRegular22: "font-mazzard font-normal",
  txtMazzardHRegular18Black900: "font-mazzard font-normal",
  txtPoppinsRegular6: "font-normal font-poppins",
  txtMazzardHRegular20: "font-mazzard font-normal",
  txtMazzardHRegular18Black900ed: "font-mazzard font-normal",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular14Black9007f01: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
