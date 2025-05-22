import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import type { ICustomer } from "../models/interfaces";

interface IDetailedCustomerModalProps {
  selectedCustomer: ICustomer;
  onClose: () => void;
}

const DetailedCustomerModal = (props: IDetailedCustomerModalProps) => {
  const { selectedCustomer, onClose } = props;

  return (
    <Dialog open={!!selectedCustomer} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{selectedCustomer?.name}'s Orders</DialogTitle>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailedCustomerModal;
