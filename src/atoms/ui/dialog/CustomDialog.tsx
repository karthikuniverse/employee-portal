import React, { type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader } from "./baseDialog";

interface ReusableDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
}

export default function ReusableDialog({ open, onOpenChange, title, children }: ReusableDialogProps) {
  return (
    <React.Fragment>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          {title && <DialogHeader>{title}</DialogHeader>}
          {children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
