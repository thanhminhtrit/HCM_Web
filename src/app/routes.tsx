import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Hero } from "./pages/Hero";
import { MindMap } from "./pages/MindMap";
import { GocReLyLuan } from "./pages/GocReLyLuan";
import { DiemHenGiaoThoa } from "./pages/DiemHenGiaoThoa";
import { MatTranAnhSang } from "./pages/MatTranAnhSang";
import { KhatVongVuonXa } from "./pages/KhatVongVuonXa";
import { PhuLucAI } from "./pages/PhuLucAI";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Hero },
      { path: "ban-do", Component: MindMap },
      { path: "goc-re-ly-luan", Component: GocReLyLuan },
      { path: "diem-hen-giao-thoa", Component: DiemHenGiaoThoa },
      { path: "mat-tran-anh-sang", Component: MatTranAnhSang },
      { path: "khat-vong-vuon-xa", Component: KhatVongVuonXa },
      { path: "phu-luc-ai", Component: PhuLucAI },
    ],
  },
]);
