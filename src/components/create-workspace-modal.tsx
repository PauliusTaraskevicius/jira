"use client";

import { useCreateWorkspaceModal } from "@/features/workspaces/hooks/use-create-workspace-modal";
import { ResponsiveModal } from "./responsive-modal";

import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen } = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
