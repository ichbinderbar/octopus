import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__form">
        <div className="login__field">
          <label htmlFor="username" className="login__label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="login__input"
          />
        </div>
        <div className="login__field">
          <label htmlFor="password" className="login__label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="login__input"
          />
        </div>
        <button type="submit" className="login__button">
          Login
        </button>
      </form>
      <p className="login__footer">
        Not a user yet?{" "}
        <a href="/signup" className="login__link">
          Register here
        </a>
      </p>
    </div>
  );
}
