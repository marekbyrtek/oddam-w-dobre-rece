import React, { useEffect, useState, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import PaginationComponent from "./Pagination";
import { ListContext } from "./HomeWhoWeHelp";

const WhoWeHelpList = () => {
    const api = "http://localhost:3001/";
    const {  apiList: db } = useContext(ListContext)
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        setLoading(true);
        fetch(`${api}${db}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setList(data);
            })
            .catch(err => {
                console.log(err);
            })
            setLoading(false);
    }, [db]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentList = list.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return (
            <div className="whoWeHelp_list">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className="whoWeHelp_list">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h3>
                <ListGroup variant="flush" className="whoWeHelp_listGroup">
                    {currentList.map(el => {
                        return (
                            <ListGroup.Item key={el.id}>
                                <div>
                                    <h2>{el.name}</h2>
                                    <p>{el.purpose}</p>
                                </div>
                                <p>{el.things}</p>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
                <PaginationComponent itemsPerPage={itemsPerPage} totalItems={list.length} paginate={paginate} />
            </div>
        )
    }
}

export default WhoWeHelpList;
