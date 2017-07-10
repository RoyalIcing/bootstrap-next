import Repo from '../components/Repos/Repo'

export default ({
  repos
}) => (
  <div>
  {
    repos.map(repo => (
      <Repo key={ repo.id } repo={ repo } />
    ))
  }
  </div>
)