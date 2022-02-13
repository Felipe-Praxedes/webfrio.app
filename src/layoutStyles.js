import commonStyles from "./commonStyles"

export default {
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: commonStyles.colors.background,
    },
    scrollView: {
        width: '100%',
        alignContent: 'center',
    },
    logo: {
        position: 'relative',
        alignSelf: 'center',
        marginTop: 20,
        height: 100,
        width: '80%',
        resizeMode: 'stretch',
    },
    formContainer: {
        backgroundColor: commonStyles.colors.backgroundForm,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 5,
        margin: 10,
        height: 150,
        width: '90%',
        borderRadius: 10,
        shadowRadius: 2,
        shadowColor: commonStyles.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    section: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: commonStyles.colors.background,
        height: 60,
        width: '90%',
        borderRadius: 20,
        shadowRadius: 2,
        shadowColor: commonStyles.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    sectionForm: {
        backgroundColor: commonStyles.colors.backgroundForm,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        margin: 5
    }
    ,
    title: {
        fontFamily: commonStyles.fontFamily.bold,
        color: commonStyles.colors.mainText,
        fontSize: 25,
        marginTop: 30,
        marginHorizontal: 15,
        padding: 10,
        alignItems: 'center',
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    contrastText: {
        fontFamily: commonStyles.fontFamily.semiBold,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        textAlign: 'center',
    },
    inputText: {
        flex: 1,
        flexGrow: 1,
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'left',
    },
    button: {
        backgroundColor: commonStyles.colors.enableBackground,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7,
        height: 50,
        width: '90%',
        alignSelf: 'center',
    },
    buttonSecondary: {
        backgroundColor: commonStyles.colors.background,
        borderColor: commonStyles.colors.primary,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 7,
        width: '70%',
        alignSelf: 'center',
    },
    buttonText: {
        flex: 1,
        fontFamily: commonStyles.fontFamily.bold,
        color: commonStyles.colors.background,
        fontSize: 20
    },
    buttonTextSecondary: {
        flex: 1,
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        textAlign: 'center',
    },
    buttonHelp: {
        backgroundColor: null,
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.primary,
        marginTop: 10,
        fontSize: 20,
        alignSelf: 'center'
    },
    icon: {
        marginRight: 10,
        color: commonStyles.colors.icon,
    }
}