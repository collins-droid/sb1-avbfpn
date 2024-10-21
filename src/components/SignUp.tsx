import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthStackParamList } from "../NavigationParamList";

type SignUpProps = {
  navigation: FrameNavigationProp<AuthStackParamList, "SignUp">;
};

export function SignUp({ navigation }: SignUpProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    // TODO: Implement sign-up logic
    console.log("Sign up with:", name, email, password);
  };

  return (
    <flexboxLayout style={styles.container}>
      <textField
        hint="Name"
        style={styles.input}
        onTextChange={(args) => setName(args.value)}
      />
      <textField
        hint="Email"
        keyboardType="email"
        autocorrect={false}
        autocapitalizationType="none"
        style={styles.input}
        onTextChange={(args) => setEmail(args.value)}
      />
      <textField
        hint="Password"
        secure={true}
        style={styles.input}
        onTextChange={(args) => setPassword(args.value)}
      />
      <button style={styles.button} onTap={handleSignUp}>
        Sign Up
      </button>
      <button style={styles.link} onTap={() => navigation.navigate("SignIn")}>
        Already have an account? Sign In
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
  button: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#65adf1",
    padding: 10,
    marginTop: 20,
  },
  link: {
    fontSize: 16,
    color: "#65adf1",
    marginTop: 20,
  },
});