import React from "react";
import {Row, Col} from "antd";
import movies from "./movies.json";
import MovieTicket from "./movieTicket";

class Movies extends React.Component {
	render() {
		return (
			<Row type="flex" justify="space-between">
				{movies.map((movie, index) => {
					return (
						<Col span={24} md={11} lg={7} xl={5} key={index}>
							<MovieTicket movie={movie} />
						</Col>
					);
				})}
			</Row>
		);
	}
}

export default Movies;
