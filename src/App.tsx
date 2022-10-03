import {
  Button,
  Column,
  HorizontalSpacer,
  InputField,
  PageContainer,
  Radio,
} from "@cred/neopop-web/lib/components";
import {
  colorGuide,
  colorPalette,
  mainColors,
} from "@cred/neopop-web/lib/primitives";
import { hexToRGBA } from "@cred/neopop-web/lib/utils";
import { SetStateAction, useState } from "react";
import "./App.css";
import { E_OEM } from "./constants";

const colorConfigRadio = {
  background: mainColors.white,
  border: mainColors.black,
  plunk: colorPalette.popWhite[100],
  dotBackground: mainColors.black,
  containerConfig: {
    color: mainColors.black,
    backgroundColor: colorPalette.popWhite[300],
    borderColor: hexToRGBA(mainColors.white, 0.1),
    activeBackgroundColor: colorPalette.popWhite[100],
    activeBorderColor: "black",
  },
};
export default function App() {
  const [appId, setAppId] = useState("");
  const [region, setRegion] = useState<"US" | "EU" | "IN" | "">("");
  const [callbackUrl, setCallbackUrl] = useState<string>("");
  const [redirectUrl, setRedirectUrl] = useState<string>("");
  const [brand, setBrand] = useState<E_OEM | undefined>();
  return (
    <Column
      style={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      <div style={{ background: "white", padding: "30px" }}>
        <InputField
          autoFocus
          colorConfig={{ labelColor: "#0d0d0d", textColor: "#000000" }}
          colorMode="light"
          id="app_id"
          inputMode="text"
          label="app id"
          maxLength={36}
          minLength={36}
          value={appId}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setAppId(e.target.value)
          }
          // onBlur={function noRefCheck() {}}
          // onChange={function noRefCheck() {}}
          // onFocus={function noRefCheck() {}}
          placeholder="enter your app-id"
          type="text"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Radio
          id="US"
          name="region"
          value="US"
          label="US"
          isChecked={region === "US"}
          colorConfig={colorConfigRadio}
          onChange={() => setRegion("US")}
        />

        <Radio
          id="EU"
          name="region"
          value="EU"
          label="EU"
          isChecked={region === "EU"}
          colorConfig={colorConfigRadio}
          onChange={() => setRegion("EU")}
        />
        <Radio
          id="IN"
          name="region"
          value="IN"
          label="India"
          isChecked={region === "IN"}
          colorConfig={colorConfigRadio}
          onChange={() => setRegion("IN")}
        />
      </div>

      <HorizontalSpacer n={3} />
      {/* <Button variant="primary" kind="elevated" size="medium">

      </Button> */}
    </Column>
  );
}
