import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="sign-up">
      <h1 className="sign-up__title">Sign Up</h1>
      <form className="sign-up__form">
        <div className="sign-up__field">
          <label htmlFor="username" className="sign-up__label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="sign-up__input"
          />
        </div>
        <div className="sign-up__field">
          <label htmlFor="email" className="sign-up__label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="sign-up__input"
          />
        </div>
        <div className="sign-up__field">
          <label htmlFor="password" className="sign-up__label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="sign-up__input"
          />
        </div>
        <button type="submit" className="sign-up__button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
