import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <header>
          <h1>Welcome to Let's Cook!</h1>
          <p>Explore and share your favorite recipes with the community.</p>
        </header>

        <section className="search-profile-section">
          <div className="search-bar">
            {/* Add your search bar component here */}
            <input type="text" placeholder="Search recipes..." />
            <button type="button">Search</button>
          </div>

          <div className="profile-options">
            {/* Check if the user is authenticated, show profile options otherwise show login/register */}
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </section>

        <section className="category-section">
          <h2>Explore Categories</h2>
          <div className="category-container">
            {/* Add rounded images and names for categories */}
            <div className="category">
              <Link to="/catagories">
                <img src="category1.jpg" alt="Category 1" />
                <p>Category 1</p>
              </Link>
            </div>
            {/* Repeat for other categories */}
            <div className="category">
              <img src="category1.jpg" alt="Category 1" />
              <p>Category 1</p>
            </div>
            <div className="category">
              <img src="category1.jpg" alt="Category 1" />
              <p>Category 1</p>
            </div>
            <div className="category">
              <img src="category1.jpg" alt="Category 1" />
              <p>Category 1</p>
            </div>
            {/* ... */}
          </div>
        </section>

        <section className="recipe-cards-section">
          <h2>Featured Recipes</h2>
          <div className="recipe-cards-container">
            {/* Add recipe cards here */}
            <div className="recipe-card">
              {" "}
              {/* Each card will have its own styling */}
              <img src="recipe1.jpg" alt="Recipe 1" />
              <h3>Recipe Title</h3>
              <p>Short description of the recipe.</p>
              <Link to="/recipes/1">Read More</Link>
            </div>
            {/* Repeat for other recipes */}
            {/* ... */}
            <div className="recipe-card">
              {" "}
              {/* Each card will have its own styling */}
              <img src="recipe1.jpg" alt="Recipe 1" />
              <h3>Recipe Title</h3>
              <p>Short description of the recipe.</p>
              <Link to="/recipes/1">Read More</Link>
            </div>
            <div className="recipe-card">
              {" "}
              {/* Each card will have its own styling */}
              <img src="recipe1.jpg" alt="Recipe 1" />
              <h3>Recipe Title</h3>
              <p>Short description of the recipe.</p>
              <Link to="/recipes/1">Read More</Link>
            </div>
            <div className="recipe-card">
              {" "}
              {/* Each card will have its own styling */}
              <img src="recipe1.jpg" alt="Recipe 1" />
              <h3>Recipe Title</h3>
              <p>Short description of the recipe.</p>
              <Link to="/recipes/1">Read More</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
