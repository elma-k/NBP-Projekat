

package com.example.musica.models;


        import org.springframework.data.annotation.Id;

        import javax.persistence.*;
        import java.sql.Clob;
        import java.util.*;

@Entity
@Table(name = "songentity")
public class SongEntity {


    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    private Long id;


    @Column
    private String title;

    @Column
    private Long audio;

    @Column
    private Long album;

    @Column
    private Long genre;

    @ManyToMany
    @JoinTable(
            name = "song_playlist",
            joinColumns = @JoinColumn(name = "song_id"),
            inverseJoinColumns = @JoinColumn(name = "playlist_id"))
List<PlaylistEntity> playlistEntityList;

    public SongEntity(){}



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getAudio() {
        return audio;
    }

    public void setAudio(Long audio) {
        this.audio = audio;
    }

    public Long getAlbum() {
        return album;
    }

    public void setAlbum(Long album) {
        this.album = album;
    }

    public Long getGenre() {
        return genre;
    }

    public void setGenre(Long genre) {
        this.genre = genre;
    }

}

