import { Routes, Route } from "react-router";
import ProfileScreen from "../users/profile";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow";
import WhoToFollowListItem from "./who-to-follow/who-to-follow-item";
// import { Provider } from "react-redux";
// import { store } from "./store";

function Tuiter() {
  return (
    // <Provider store={store}>
    <div className="row">
      <div className="col-2">
        <NavigationSidebar />
      </div>

      <div className="col-7">
        <Routes>
          <Route path="home" element={<HomeScreen />} />
          <Route path="explore" element={<ExploreScreen />} />
          <Route path="notifications" element={<h1>Notifications</h1>} />
          <Route path="messages" element={<h1>Messages</h1>} />
          <Route path="bookmarks" element={<h1>Bookmarks</h1>} />
          <Route path="profile" element={<ProfileScreen />} />
        </Routes>
      </div>

      <div className="col-3">
        <WhoToFollowList />
        {/* <ul className="list-group">
          <li className="list-group-item">
            <h4>Who to follow</h4>
          </li>
          <WhoToFollowListItem />
          <WhoToFollowListItem />
          <WhoToFollowListItem />
          <WhoToFollowListItem />
          <WhoToFollowListItem />
        </ul> */}
      </div>
    </div>
    // </Provider>
  );
}

export default Tuiter;
