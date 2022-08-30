import colors from "../../../configuration/style/colors";

function colorByStateProvider(state) {
    return state ? colors.success : colors.off;
}

export default colorByStateProvider;
