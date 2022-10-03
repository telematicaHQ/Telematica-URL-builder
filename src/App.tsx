import { useState } from 'react'
import './App.css'
export enum E_OEM {
  TESLA = 'TESLA',
  VWID_EU = 'VWID_EU',
  BMW_EU = 'BMW_EU',
  RENAULT_EU = 'RENAULT_EU',
  HYUNDAI_EU = 'HYUNDAI_EU',
  KIA_EU = 'KIA_EU',
  BMW_US = 'BMW_US',
  TOYOTA_EU = 'TOYOTA_EU',

  JAGUAR = 'JAGUAR',
  LANDROVER = 'LANDROVER',
  VOLVO = 'VOLVO',

  //eu
  MINI_EU = 'MINI_EU',
  FORD_EU = 'FORD_EU',
  FIAT_EU = 'FIAT_EU',
  JEEP_EU = 'JEEP_EU',
  NISSAN_EU = 'NISSAN_EU',
  AUDI_EU = 'AUDI_EU',
  VW_EU = 'VW_EU',
  PORSCHE_EU = 'PORSCHE_EU',
  ENYAQ_EU = 'ENYAQ_EU',
  CUPRA_EU = 'CUPRA_EU',
  SEAT_EU = 'SEAT_EU',
  SMART_EU = 'SMART_EU',
  SKODA_EU = 'SKODA_EU',
  CITROEN_EU = 'CITROEN_EU',
  DS_EU = 'DS_EU',
  PEUGEOT_EU = 'PEUGEOT_EU',
  OPEL_EU = 'OPEL_EU',

  //us
  FORD_US = 'FORD_US',
  MINI_US = 'MINI_US',
  HYUNDAI_US = 'HYUNDAI_US',
  KIA_US = 'KIA_US',
  NISSAN_US = 'NISSAN_US',
  PORSCHE_US = 'PORSCHE_US',

  //in
  ATHER = 'ATHER',
  TATA = 'TATA',
  ALTIGREEN = 'ALTIGREEN',
  EULER = 'EULER',
}
export default function App() {
  const [appId, setAppId] = useState('');
  const [region, setRegion] = useState<"US" | "EU" | "IN" | "">('');
  const [callbackUrl, setCallbackUrl] = useState<string>('');
  const [redirectUrl, setRedirectUrl] = useState<string>('');
  const [brand, setBrand] = useState<E_OEM | undefined>();
  return (
    <main>
      <div 
      <div style={{
        border:'1px solid blue'
      }}></div>
      <input onChange={(e) => {
      setAppId(e.target.value)
      }}>
      </input>
    </main>
  )
}