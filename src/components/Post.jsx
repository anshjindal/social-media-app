import { GrPieChart } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span class="badge text-bg-primary hashtag">{tags}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;

//algo of binary search

// function binarysearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (target === a[mid]) {
//       return mid; //return index of our target
//     } else if (target < a[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return -1; // retur -1 if target not found
// }

// function binarysearch ( arr, target ) {
//   let left = 0;
//   let right = arr.length - 1;

//   while ( left < right) {
//     const mid = Math.floor (left + right / 2);

//     if ( target === arr[mid]) {
//         return mid; // return index of target found
//     } else if ( target < arr[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return - 1;
// }

// function dfs( graph, start, visited = new Set()) {
//   visited.add(start);
//   for( const neighbor of graph[start]) {
//     if(!visited.has[neighbor]) {
//       dfs(graph, neighbor, visited)
//     }
//   }
// }

// function dfs( graph, start, visited = new Set()) {
//   visited.add(start)
//   for ( const neighbor of graph[start]) {
//     if(!visited.has[neighbor]){
//       dfs(graph, neighbor, visited);
//     }
//   }
// }
