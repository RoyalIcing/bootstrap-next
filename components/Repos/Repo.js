export default ({
  repo
}) => (
  <article>
    <h2>
      <a href={ repo.html_url }>
        { repo.full_name }
      </a>
    </h2>
    <h5>
      <a href={ repo.html_url + '/stargazers' }>
        ⭐️ { repo.stargazers_count }
      </a>
    </h5>
    <h5>
      <a href={ repo.html_url + '/issues' }>
        ⁉️ { repo.open_issues_count }
      </a>
    </h5>
    <h5>{ repo.language }</h5>
  </article>
)