// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Post from './Post';
import axios from '../config/axiosConfig';
import { Container, Row, CardGroup, Pagination, PageItem } from 'react-bootstrap';

const GridPosts = () => {
  const [postsData, setPostsData] = useState([]);
  const [paginator, setPaginator] = useState({
    first: null,
    prev: null,
    next: null,
    last: null,
  });
  const query = new URLSearchParams(useLocation().search);
  const currPage = query.get('_page') ? query.get('_page') : 1;

  function parseLinkHeader(linkHeader) {
    const linkHeadersArray = linkHeader.split(', ').map((header) => header.split('; '));
    const linkHeadersMap = linkHeadersArray.map((header) => {
      const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '');
      const thisHeaderUrl = parseInt(header[0].slice(1, -1).split('=')[1]);
      return [thisHeaderRel, thisHeaderUrl];
    });
    return Object.fromEntries(linkHeadersMap);
  }

  useEffect(() => {
    axios
      .get(`/posts?_page=${currPage}&_limit=9`)
      .then((response) => {
        const _p = parseLinkHeader(response.headers.link);
        setPaginator(_p);
        if (response.status === 200) {
          setPostsData(response.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          console.log(err.status);
          console.log(err.data);
        }
      });
    window.scrollTo(0, 0);
  }, [currPage]);

  return (
    <>
      <Container>
        <CardGroup>
          {postsData.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </CardGroup>
        <Row className="justify-content-md-center mt-3">
          <Pagination>
            <Pagination.First href={`#/?_page=${paginator.first}`} />
            <Pagination.Prev
              href={`#/?_page=${paginator.prev}`}
              disabled={`${paginator.prev}` === 'undefined' ? true : false}
            />
            <PageItem href={`#/?_page=${currPage}`} active>
              {currPage}
            </PageItem>
            <Pagination.Next
              href={`#/?_page=${paginator.next}`}
              disabled={`${paginator.next}` === 'undefined' ? true : false}
            />
            <Pagination.Last href={`#/?_page=${paginator.last}`} />
          </Pagination>
        </Row>
      </Container>
    </>
  );
};

export default GridPosts;
