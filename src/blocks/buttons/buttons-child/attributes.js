const attributes = {
  block_id: {
    type: "string",
  },
  buttonAlignment: {
    type: "string",
    default: "center",
  },
  fontFamily: {
    type: "string",
    default: "Default",
  },
  fontWeight: {
    type: "string",
  },
  fontSubset: {
    type: "string",
  },
  label: {
    type: "string",
    default: "#Click Here",
  },
  link: {
    type: "string",
    default: "",
  },
  target: {
    type: "boolean",
    default: true,
  },
  iconsize: {
    type: "number",
    default: 16,
  },
  counterId: {
    type: "string",
    default: 1,
  },
  vPadding: {
    type: "number",
    default: 10,
  },
  hPadding: {
    type: "number",
    default: 14,
  },
  vPaddingTablet: {
    type: "number",
  },
  hPaddingTablet: {
    type: "number",
  },
  vPaddingMobile: {
    type: "number",
  },
  hPaddingMobile: {
    type: "number",
  },
  vMargin: {
    type: "number",
    default: 10,
  },
  vMarginTablet: {
    type: "number",
  },
  vMarginMobile: {
    type: "number",
  },
  hMargin: {
    type: "number",
    default: 14,
  },
  hMarginTablet: {
    type: "number",
  },
  hMarginMobile: {
    type: "number",
  },
  borderWidth: {
    type: "number",
    default: 1,
  },
  borderRadius: {
    type: "number",
    default: 2,
  },
  borderStyle: {
    type: "string",
    default: "solid",
  },
  borderColor: {
    type: "string",
    default: "#000",
  },
  borderHColor: {
    type: "string",
  },
  color: {
    type: "string",
    default: "#000",
  },
  background: {
    type: "string",
  },
  hColor: {
    type: "string",
    default: "#000",
  },
  sizeType: {
    type: "string",
    default: "px",
  },
  sizeMobile: {
    type: "number",
    default: "",
  },
  sizeTablet: {
    type: "number",
    default: "",
  },
  lineHeight: {
    type: "number",
    default: "",
  },
  lineHeightType: {
    type: "string",
    default: "em",
  },
  lineHeightMobile: {
    type: "number",
    default: "",
  },
  lineHeightTablet: {
    type: "number",
    default: "",
  },
  opensInNewTab: {
    type: "boolean",
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  gradientDirection: {
    type: "number",
    default: 90,
  },
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
  },
  opacity: {
    type: "number",
    default: 100,
  },
  icon: {
    type: "string",
    default: "",
  },
  iconPosition: {
    type: "string",
    default: "after",
  },
  buttonFontFamily: {
    type: "string",
  },
  buttonFontSize: {
    type: "number",
  },
  buttonFontSizeTablet: {
    type: "number",
  },
  buttonFontSizeMobile: {
    type: "number",
  },
  buttonLineHeight: {
    type: "number",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 0,
  },
  boxShadowVOffset: {
    type: "number",
    default: 0,
  },
  boxShadowBlur: {
    type: "number",
  },
  boxShadowSpread: {
    type: "number",
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  icon_hover_color: {
    type: "string",
  },
  hbackground: {
    type: "string",
  },
  iconSpace: {
    type: "number",
    default: 8,
  },
  buttonFontWeight: {
    type: "string",
    default: "400",
  },
  inheritFromTheme: {
    type: "boolean",
    default: false,
  },
  hoverEffect: {
    type: "string",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
  z_index: {
    type: "number",
    default: 1,
  },
  z_indexMobile: {
    type: "number",
    default: 1,
  },
  z_indexTablet: {
    type: "number",
    default: 1,
  },
  blockTopPadding: {
    type: "number",
    default: 10,
  },
  blockTopPaddingMobile: {
    type: "number",
    default: '',
  },
  blockTopPaddingTablet: {
    type: "number",
    default: '',
  },
  blockBottomPadding: {
    type: "number",
    default: 10,
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  blockLeftPadding: {
    type: "number",
    default: 10,
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  blockRightPadding: {
    type: "number",
    default: 10,
  },
  blockRightPaddingMobile: {
    type: "number",
    default: '',
  },
  blockRightPaddingTablet: {
    type: "number",
    default: '',
  },
  blockTopMargin: {
    type: "number",
    default: '',
  },
  blockBottomMargin: {
    type: "number",
    default: '',
  },
  blockLeftMargin: {
    type: "number",
    default: '',
  },
  blockRightMargin: {
    type: "number",
    default: '',
  },
  blockTopMarginTablet: {
    type: "number",
    default: '',
  },
  blockBottomMarginTablet: {
    type: "number",
    default: '',
  },
  blockLeftMarginTablet: {
    type: "number",
    default: '',
  },
  blockRightMarginTablet: {
    type: "number",
    default: '',
  },
  blockTopMarginMobile: {
    type: "number",
    default: '',
  },
  blockBottomMarginMobile: {
    type: "number",
    default: '',
  },
  blockLeftMarginMobile: {
    type: "number",
    default: '',
  },
  blockRightMarginMobile: {
    type: "number",
    default: '',
  },
  blockIsMarginValueUpdated : {
    type: "boolean",
    default: false,
  },
  blockIsPaddingValueUpdated: {
    type: "boolean",
    default: false,
  },
  blockTopRadius : {
    type: "number",
    default: 2,
  },
	blockRightRadius : {
    type: "number",
    default: 2,
  },
	blockBottomRadius : {
    type: "number",
    default: 2,
  },
	blockLeftRadius : {
    type: "number",
    default: 2,
  },
  blockTopRadiusMobile: {
    type: "number",
    default: 2,
  },
	blockRightRadiusMobile: {
    type: "number",
    default: 2,
  },
	blockBottomRadiusMobile: {
    type: "number",
    default: 2,
  },
	blockLeftRadiusMobile: {
    type: "number",
    default: 2,
  },
  blockTopRadiusTablet: {
    type: "number",
    default: 2,
  },
	blockRightRadiusTablet: {
    type: "number",
    default: 2,
  },
	blockBottomRadiusTablet: {
    type: "number",
    default: 2,
  },
	blockLeftRadiusTablet: {
    type: "number",
    default: 2,
  },
};

export default attributes;
