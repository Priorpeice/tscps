import React from "react";
import { Link } from "react-router-dom";
import { PostLink } from "../../styles/postList";

interface Item {
  id: number;
  title?: string; // title이 있을 수도 있고 없을 수도 있음을 명시
  problemId: number;
  isAnswer?: boolean;
  nickname?: string;
}

interface Props {
  items: Item[];
  basePath: string;
  searchTerm: string;
}

const ItemList: React.FC<Props> = ({ items, basePath, searchTerm }) => {
  const filteredItems = items.filter((item) => {
    // title이 없을 때 problemId 사용
    const titleToSearch = item.title
    
      ? item.title.toLowerCase()
      : item.problemId.toString().toLowerCase();
    return titleToSearch.includes(searchTerm.toLowerCase());
  });
  const sortByItemId = (a: Item, b: Item) => {
    return (a.id || a.problemId) - (b.id || b.problemId);
  };
  return (
    <div>
      {filteredItems.sort(sortByItemId).map((item, index) => (
        <div className="post" key={item.id || item.problemId}>
          <PostLink to={`${basePath}/${item.id || item.problemId}`}>
            <h3>
              {item.nickname ? `${item.nickname} 님의 제출 `: (item.id ? `${item.id}. `: "")}  {item.title || `${item.problemId} 번`}
            </h3>
            {item.isAnswer !== undefined && (
              <p>{`${item.isAnswer ? "맞았습니다!" : "틀렸습니다"}`}</p>
            )}
          </PostLink>
          {index !== filteredItems.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
