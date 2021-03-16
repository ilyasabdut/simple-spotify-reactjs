export default function Profile(myProfile) {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={myProfile.myProfile?.images[0].url}
          alt=""
        ></img>
        <div className="card-body">
          <a href={myProfile.myProfile?.external_urls.spotify}>
            <h5 className="card-title">{myProfile.myProfile?.display_name}</h5>
          </a>
          <div className="card-text">
            <div>
              <div>
                <p>Subscribe: {myProfile.myProfile?.product}</p>
                <p>Email: {myProfile.myProfile?.email}</p>
                <p>Followers: {myProfile.myProfile?.followers.total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
