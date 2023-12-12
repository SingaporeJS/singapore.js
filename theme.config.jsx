const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8rem'
      }}
    >
      <div>
        <time>{YEAR}</time> © <a href="https://github.com/singaporejs/">SingaporeJS</a>
      </div>
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  darkMode: true
}
