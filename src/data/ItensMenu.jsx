import { Link } from 'react-router-dom';

import { IoMdPersonAdd } from "react-icons/io";
import { BsBuildingFillAdd } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";

export const ItensMenu = [  
  {
    key: '1',
    icon: <MdAssignmentAdd />,
    label: <Link to="/">Leituras</Link>,
  },
  {
    key: '2',
    icon: <BsBuildingFillAdd />,
    label: <Link to="/blocos">Blocos</Link>,
  },  
  {
    key: '3',
    icon: <IoMdPersonAdd />,
    label: <Link to="/register">Usuários</Link>,
  },
  {
    key: '4',
    icon: <TbDeviceDesktopAnalytics /> ,
    label: <Link to="/hidrometro">Hidrometros</Link>,
  },
  {
    key: '5',
    icon: <TbDeviceDesktopAnalytics /> ,
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    key: '6',
    icon: <IoMdSettings />,
    label: "Tema",
  },
  {
    key: '7',
    icon: <ImExit />,
    label: 'Sair'
  },
]

