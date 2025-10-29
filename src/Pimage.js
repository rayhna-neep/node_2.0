function ProfilImage() {
  return (
    <img
      src="/me.jpg"
      alt="Profile"
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        cursor: "pointer"
      }}
    />
  );
}

export default ProfilImage;
