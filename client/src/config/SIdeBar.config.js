import {
  DeleteOutline,
  DeleteOutlined,
  InsertDriveFileOutlined,
  MailOutline,
  Photo,
  SendOutlined,
  StarOutline,
} from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: Photo,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutline,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlined,
  },
  {
    name: "draft",
    title: "Draft",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlined,
  },
  {
    name: "mail",
    title: "Mail",
    icon: MailOutline,
  },
];
