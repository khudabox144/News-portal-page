import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/HomeLayoutComponents/NewsCard';

const CategoryNews = () => {
    const [news, setNews] = useState([]);
    const { id } = useParams();
    const Id = parseInt(id);
    const data = useLoaderData();
    const newsContainerRef = useRef(null); // Create a ref for the news container

    useEffect(() => {
        let filterNews;
        if (id === '0') {
            filterNews = data;
        } else if (id === "1") {
            filterNews = data.filter(news => news.others.is_today_pick === true);
        } else {
            filterNews = data.filter(news => news.category_id === Id);
        }
        setNews(filterNews);

        // Scroll to top when news changes
        if (newsContainerRef.current) {
            newsContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [data, id]);

    return (
        <div className="grid grid-cols-4 gap-4">
          
            <div 
                ref={newsContainerRef}
                className="col-span-6 h-screen overflow-y-auto"
            >
                <p className="mb-4">Total news found: {news.length}</p>
                <div className="space-y-6">
                    {news.map((eachNews) => (
                        <NewsCard key={eachNews.id} eachNews={eachNews} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryNews;