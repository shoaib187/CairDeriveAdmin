import { RFValue } from "react-native-responsive-fontsize";

export const FONT_SIZES = {
  xs: RFValue(10),
  sm: RFValue(12),
  md: RFValue(14),
  lg: RFValue(18),
  xl: RFValue(22),
};

export const FONT_STYLES = {
  xs: {
    fontSize: FONT_SIZES.xs,
    fontWeight: "400",
  },
  sm: {
    fontSize: FONT_SIZES.sm,
    fontWeight: "400",
  },
  md: {
    fontSize: FONT_SIZES.md,
    fontWeight: "500",
  },
  lg: {
    fontSize: FONT_SIZES.lg,
    fontWeight: "700", // bold
  },
  xl: {
    fontSize: FONT_SIZES.xl,
    fontWeight: "700", // bold
  },
};


export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};
