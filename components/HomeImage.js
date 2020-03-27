function MyImage() {
  return (
    <div>
      <img src="/static/fitness.jpg" alt="my image" />;
      <style jsx>{`
        img {
          display: block;
          padding-top: 0;
          margin-left: auto;
          margin-right: auto;
          width: 50%;
        }
      `}</style>
    </div>
  );
}

export default MyImage;
