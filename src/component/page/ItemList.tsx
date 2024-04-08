import React from 'react';
import { Link } from 'react-router-dom';

interface Item {
  id: string;
  title: string;
}

interface Props {
  items: Item[];
  basePath: string;
  searchTerm: string;
}

const ItemList: React.FC<Props> = ({ items, basePath, searchTerm }) => {
  const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      {filteredItems.map((item, index) => (
        <div className="post" key={item.id}>
          <Link to={`${basePath}/${item.id}`}> {/* basePath를 사용하여 동적으로 경로를 생성 */}
            <h3>{item.id} {item.title}</h3>
          </Link>
          {index !== filteredItems.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
