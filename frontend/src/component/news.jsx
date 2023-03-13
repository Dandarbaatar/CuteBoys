export const News = ({ is }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2vh",
      }}
    >
      <img
        src="imagePlaceholder.svg"
        alt="pic"
        style={{ width: "50%", height: "50%", backgroundColor: "grey" }}
      ></img>
      <div
        style={{
          display: "flex",
          width: "35vw",
          flexDirection: "column",
          height: "50%",
          justifyContent: "space-evenly",
          paddingTop: "3vw",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "1.6vw" }}>
          Charge Two Devices at the Same Time With This Magnetic Wireless
          Charging Dock {is}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontWeight: "700",
            color: "#9A9AB0",
            height: "2vw",
            fontSize: "0.65vw",
            alignItems: "center",
            justifyContent: "space-between",
            width: "8vw",
          }}
        >
          <div>Floyd Miles</div>
          <div>3 Days Ago</div>
        </div>
        <div
          style={{
            fontWeight: "400",
            color: "#515151",
            fontSize: "0.9vw",
          }}
        >
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          survival strategies to ensure proactive domination. At the end of the
          day, going forward, a new normal that has evolved from generation X is
          on the runway heading towards a streamlined cloud solution.
        </div>
      </div>
    </div>
  );
};
