function MyButton() {
  return(
    <button>
      I'm a button.
    </button>
    );
}

export default function MyApp() {
  return(
    <div>
      <h1>Welcome to test page.</h1>
      <MyButton />
    </div>
  );
}