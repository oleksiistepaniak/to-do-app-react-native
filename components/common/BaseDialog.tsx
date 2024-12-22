import Dialog from "react-native-dialog";
import { ReactNode } from "react";
import { T } from "@/constants/Text";

interface IBaseDialogProps {
    open: boolean;
    title: string;
    description: string;
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
            <Dialog.Button label={T.common.close} onPress={p.onClose} />
            <Dialog.Button label={T.common.update} onPress={p.onSubmit} />
        </Dialog.Container>
    );
};
