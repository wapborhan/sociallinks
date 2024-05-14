const LinkHead = ({ cattTitle }) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="catt-title">
          <h3>
            Some of <span className="txt-success">My</span> Important Links on
          </h3>
          <div className="text-right">
            <a className="rn-btn btn-brd mr--30">
              <span className="text-capitalize">{cattTitle} </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkHead;
