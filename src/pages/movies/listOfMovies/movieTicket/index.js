import React from "react";
import {Col, Row} from "antd";
import styles from "./style.module.scss";

class Movies extends React.Component {
	render() {
		const {movie} = this.props;
		return (
			<div className={styles.movies_ticket}>
				<div className={styles.img_container}>
					<img src={movie.Poster} />
				</div>

				<h2>{movie.Title}</h2>
				<span>Director: {movie.Director}</span>
				<span>Actors:{movie.Actors} </span>
			</div>
		);
	}
}

export default Movies;
