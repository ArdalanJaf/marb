import { theme } from "../components/styledComponents/theme";

export default function isMobileMode(
  landscapeThreshold = theme.breakpoint.desktop
) {
  let screenWidth = window.innerWidth;
  if (typeof landscapeThreshold === "string") {
    landscapeThreshold = Number(
      landscapeThreshold.split("").slice(0, -2).join("")
    );
  }

  return screenWidth < landscapeThreshold;
}
