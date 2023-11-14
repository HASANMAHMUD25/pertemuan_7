import React, { useState } from 'react';
import styles from "./AddMovie.module.css"

const AddMovie = (props) => {

    // props yang datanya berasal dari main
    const { movies, setMovies } = props

    // state yang menghandle proses error pada inputan
    const [ titleEror, setTitleEror ] = useState("false")
    const [ dateEror, setDateEror] = useState("false")
    const [ linkEror, setLinkEror] = useState("false")
    const [ genreEror, setgenreEror] = useState("false")

    // state yang menghandle proses inputan
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [link, setLink] = useState("")
    const [genre, setgenre] = useState("")

    // arrow function menghandle inputan title
    const handleTitle = (e) => {setTitle(e.target.value)}

    // arrow function menghandle  inputan Link
    const handleLink = (e) => {setLink(e.target.value)}

    // arrow function menghandle inputan date
    const handleDate = (e) => {setDate(e.target.value)}

    //
    const handlegenre = (e) => {setgenre(e.target.value)}


    // arrow function menghandle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        if(title === "" && date === "") {alert("Title, Link, Date Dan Genre kosong")}

        if (title === "")
        {
           alert("Isi Title Terlebih Dahulu")
        } 

        else if (link === "")
        {
            alert("Isi Link Terlebih Dahulu")
        }
        
        else if (date === "")
        {
           alert("Isi Date Terlebih Dahulu")
        } 

        else if (genre === "")
        {
            alert("Pilih Genre Terlebih Dahulu ")
        }
         
         else {
            const movie = {
                id: 4,
                title: title, 
                date: date,
                image: link,
                genre: genre
            } 
            setMovies([...movies, movie])
            setTitleEror(false)
            setDateEror(false)
            setLinkEror(false)
            setgenreEror(false)
        }
    }

    return (
        <div className={styles.container}>
           <form className={styles.addmovie} onSubmit={handleSubmit}>
            
           <input placeholder='Isi judul Disini' className={styles.addmovie__input} id='title' type='text' value={title} onChange={handleTitle} />

           <input placeholder='Isi Link Disini' className={styles.addmovie__input} id='link' type='text' value={link} onChange={handleLink} />
           
           <input className={styles.addmovie__input} id='date' type='date' value={date} onChange={handleDate} />
           
           <select className={styles.addmovie__input} id='genre' value={genre} onChange={handlegenre} >
           <option>Genre</option>
           <option value="drama">Drama</option>
           <option value="horror">Horror</option>
           <option value="comedy">Comedy</option>
           <option value="comedy">Anime</option>
            </select>
       

           <button className={styles.addmovie__button}>Simpan</button>
           </form>
        </div>
    );
}

export default AddMovie;