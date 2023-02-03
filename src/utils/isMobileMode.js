import { theme } from "../components/styledComponents/theme";

export default function isMobileMode(
  landscapeThreshold = theme.landscapeThreshold
) {
  let screenWidth = window.innerWidth;
  if (typeof landscapeThreshold === "string") {
    landscapeThreshold = Number(
      landscapeThreshold.split("").slice(0, -2).join("")
    );
  }
  // console.log(screenWidth, landscapeThreshold);
  return screenWidth < landscapeThreshold;
}
