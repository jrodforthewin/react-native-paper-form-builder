import React, { Fragment, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { HelperText, TextInput, useTheme } from 'react-native-paper';
function InputText(props) {
    const { formState, field, textInputProps } = props;
    const theme = useTheme();
    const errorMessage = formState.errors?.[field.name]?.message;
    const textColor = errorMessage ? theme.colors.error : theme.colors.text;
    const styles = useMemo(() => StyleSheet.create({
        textInputStyle: {
            color: textColor,
        },
    }), [textColor]);
    return (<Fragment>
      <TextInput mode={'outlined'} error={errorMessage ? true : false} {...textInputProps} ref={field.ref} value={field.value} onChangeText={text => field.onChange(text)} style={[styles.textInputStyle, textInputProps?.style]}/>

      {errorMessage && <HelperText type={'error'}>{errorMessage}</HelperText>}
    </Fragment>);
}
export default InputText;
