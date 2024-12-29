import Dialog from "react-native-dialog";
import { ReactNode } from "react";

interface IBaseDialogProps {
    open: boolean;
    title: string;
    description: string;
    cancelBtnLabel: string;
    submitBtnLabel: string;
    onClose: () => void;
    onSubmit: () => void;
    children?: ReactNode;
}

export const BaseDialog = (p: IBaseDialogProps) => {
    return (
        <Dialog.Container visible={p.open}>
            <Dialog.Title>{p.title}</Dialog.Title>
            <Dialog.Description>{p.description}</Dialog.Description>
            {p.children}
            <Dialog.Button label={p.cancelBtnLabel} onPress={p.onClose} />
            <Dialog.Button label={p.submitBtnLabel} onPress={p.onSubmit} />
        </Dialog.Container>
    );
};
