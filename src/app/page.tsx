import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import Header from "@/components/app.header";
import All from "@/components/app.allvd";
export default function Home() {
  return (<>
    <Header></Header>
    <All></All>
    </>
  );
 
}
