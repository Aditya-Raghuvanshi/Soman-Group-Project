import React, { useEffect, useRef } from 'react'
import horizontalLine from '../assets/horizontal-line.svg'
import gsap from 'gsap';
import { MapContainer, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Marker } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const MapComponent = () => {
  const containerRef = useRef(null);
  useEffect(()=>{
    const container = containerRef.current;
    const handleIntersection = (entries, observer) =>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){

          // GSAP staggered animation for the letters
          gsap.fromTo(
            '.map-text', 
            { opacity: 0, y: 50 },  // Start with letters off-screen and transparent
            { 
              opacity: 1, 
              y: 0, 
              duration: 1.2,
              delay:0.2,  // Stagger the animation by 0.1 seconds per letter
              ease: "power4.out"  // Smooth easing effect
            }
          );

          // GSAP staggered animation for the letters
          gsap.fromTo(
            '.map-text1', 
            { opacity: 0, y: 50 },  // Start with letters off-screen and transparent
            { 
              opacity: 1, 
              y: 0, 
              duration: 1.2,
              delay:0.4,  // Stagger the animation by 0.1 seconds per letter
              ease: "ease.out"  // Smooth easing effect
            }
          );

          observer.unobserve(entry.target);
        }
      })
    }
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 30% of the element is in the viewport
    });

    if (container) {
      observer.observe(container);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  },[])

  return (
    <div ref={containerRef} className='px-4 md:px-28 pb-28 md:pt-28'>
        <div>
            <div className="flex mb-6">
                <img className='w-16' src={horizontalLine} alt="" />
                <p className='text-[#996830] text-sm ml-4'>OUR PRESENCE</p>
            </div>
            <p className='map-text text-3xl md:text-6xl font-zodiac'>Building future in</p>
            <p className='map-text1 text-3xl md:text-6xl font-zodiac'><b><i>Pune</i></b></p>
        </div>
        <div className='mt-20'>
        <MapContainer center={[18.520430, 73.856743]} zoom={6} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[17.7255921, 75.3001936]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[17.8930069, 75.0204482]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[20.2997045, 75.6524885]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[19.877263, 75.3390241]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[19.918833, 75.8708599]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[18.9918442, 75.909784]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[18.3921349, 77.1196118]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[31.3225842, 74.7971621]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[20.0112475, 73.7902364]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[17.8499067, 75.2763203]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[16.7028412, 74.2405329]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[21.1498134, 79.0820556]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[20.280310, 78.719292]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[18.622511, 74.022301]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[47.874329, 17.655100]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[18.487553, 74.135976]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[18.184135, 74.610764]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[18.549102, 73.791245]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
          <Marker position={[18.495678, 73.874172]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>Hello, I am a popup!</Popup>
          </Marker>
        </MapContainer>
        {/* <iframe className='w-full map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.494560926017!2d73.79136397496373!3d18.551729182547916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd911eb8f85%3A0xdcbde4fcbad4810f!2sIndiQube%20The%20Kode!5e0!3m2!1sen!2sin!4v1737654133141!5m2!1sen!2sin" height="450" style={{border:"0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Map'></iframe> */}
        </div>
    </div>
  )
}

export default MapComponent
