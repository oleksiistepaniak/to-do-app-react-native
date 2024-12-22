import Dialog from "react-native-dialog";

interface IBaseDialogProps {
    open: boolean;
    title: string;
    description: string;
    onClose: () => void;
}

export const BaseDialog = (p: IBaseDialogProps) => {
    return (
        <Dialog.Container visible={p.open}>
            <Dialog.Title>{p.title}</Dialog.Title>
            <Dialog.Description>{p.description}</Dialog.Description>
            <Dialog.Button label="Закрити" onPress={p.onClose}/>
        </Dialog.Container>
    );
};
