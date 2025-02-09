import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import MembersList from "./MembersList";

function MembersOutput({ members, fallbackText, onRemoveMember, isAdmin }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (Array.isArray(members) && members.length > 0) {
    content = (
      <MembersList
        members={members}
        onRemoveMember={onRemoveMember}
        isAdmin={isAdmin}
      />
    );
  }

  return <View style={styles.container}>{content}</View>;
}

export default MembersOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: Colors.primary100,
  },
  infoText: {
    color: Colors.primary800,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
