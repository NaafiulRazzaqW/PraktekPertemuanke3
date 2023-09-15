import React from "react";

// Untuk Menangkap value yang dikasih dari luar componen maka dari itu 
// diperlukan pemanggilan dengan mendeklarasikan props dibawah ini agar dapat 
// digunakan



const Footer = (props) => {
    return (
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan Function Bukan class</h3>
            <p>Nilai ini ditampilkan dari props: {props.judul}</p>
            <p>Nama Saya: {props.nama}</p>
        </div>
    );
} 
export default Footer;