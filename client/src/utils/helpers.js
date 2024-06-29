import { v4 as uuidv4 } from "uuid";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import {
  MdOutlineHistory,
  MdOutlineRateReview,
  MdOutlineSettings,
} from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { IoShareSocial, IoWallet } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import {
  RiCustomerService2Fill,
  RiInboxArchiveFill,
  RiRefundFill,
} from "react-icons/ri";
import { SiZalo } from "react-icons/si";

import { auth } from "../config/firebase.config";
import { FaBoxes } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { LuBarChartHorizontal } from "react-icons/lu";
import { PiCoinThin } from "react-icons/pi";

const googleProider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProider).then((useCred) => {
    window.location.reload();
  });
};

export const signOutAction = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  });
};

export const Menus = [
  {
    id: uuidv4(),
    icon: <BsShop />,
    name: <div className="text-nowrap">Trang người bán</div>,
    uri: "/seller/productlist",
  },
  {
    id: uuidv4(),
    icon: <MdOutlineSettings />,
    name: <div className="text-nowrap">Cài đặt</div>,
    uri: "/user/information",
  },
];

export const ClientMenus = [
  {
    title: "Sản Phẩm",
    Icon: AiFillProduct,
    spacing: true,
    submenu: true,
    subMenuItems: [
      {
        title: "Quản lý sản phẩm",
        Icon: FaBoxes,
        uri: "/seller/productlist",
      },
      {
        title: "Thêm sản phẩm",
        Icon: RiInboxArchiveFill,
        uri: "/seller/publish",
      },
    ],
  },
  {
    title: "Đơn hàng",
    Icon: LuBarChartHorizontal,
    spacing: true,
    submenu: true,
    subMenuItems: [
      {
        title: "Đơn đặt hàng",
        Icon: TbTruckDelivery,
        uri: "/seller/order",
      },
      {
        title: "Quản lý đơn hoàn trả",
        Icon: RiRefundFill,
        uri: "/seller/reverse",
      },
      {
        title: "Quản lý đánh giá",
        Icon: MdOutlineRateReview,
        uri: "/seller/review",
      },
    ],
  },
  {
    title: "Tài Chính",
    Icon: IoWallet,
    spacing: true,
    submenu: true,
    subMenuItems: [
      {
        title: "Thu nhập của tôi",
        Icon: PiCoinThin,
        uri: "/seller/myIncome",
      },
      {
        title: "Lịch sử giao dịch",
        Icon: MdOutlineHistory,
        uri: "/seller/myTransaction",
      },
    ],
  },
  {
    title: "Hỗ trợ",
    Icon: RiCustomerService2Fill,
    spacing: true,
    submenu: true,
    subMenuItems: [
      {
        title: "Zalo",
        Icon: SiZalo,
        uri: "/dash/zalo",
      },
      {
        title: "Social",
        Icon: IoShareSocial,
        uri: "/dash/social",
      },
    ],
  },
];

export const DashboardMenus = [
  {
    id: 10003,
    menu: "Chức năng",
    uri: "/dash/account",
    isAdmin: true,
  },
  {
    id: 10004,
    menu: "Cài đặt",
    uri: "/admin/users",
    isAdmin: true,
  },
];
