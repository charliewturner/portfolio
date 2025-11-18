function Projects(): React.JSX.Element {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="project-tiles">
        <a
          href="https://ct-nc-news.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-tile"
        >
          <h3>NC News</h3> A full-stack Reddit-style news and commenting
          platform built with React, Express, Node.js, and PostgreSQL. Features
          include article sorting, commenting, voting, and user authentication.
          Hosted on Render.
        </a>
        <a
          href="https://tusemain.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-tile"
        >
          <h3>TUSE</h3> A real-time collaborative drawing web app created for my
          final Northcoders group project. Built with React, Socket.IO, and
          Konva for canvas drawing. Includes user syncing, shape tools, and
          undo/redo support.
        </a>
        <a
          href="https://curator-catalogue.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-tile"
        >
          <h3>Curator Catalogue</h3> My first piece of paid freelance work. A
          fast, minimalist web app for exploring and presenting digital art
          exhibitions, built with React, Vite, and CSS.
        </a>
      </div>
    </div>
  );
}

export default Projects;
