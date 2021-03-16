# simple-spotify-reactjs

This is a modification from a tutorial https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13

YOU NEED TO USE A LOCAL SERVER FIRST https://github.com/ilyasabdut/spotify-backend-example

What changes:
1. Using functional component (useState, useEffect)
2. Using spotify-web-api-node for http request https://github.com/thelinmichael/spotify-web-api-node
3. Added user profile
4. Added user's playlist
5. Added remove button for playlist tracks

What should be improved:
1. An independent login without local server https://github.com/ilyasabdut/spotify-backend-example
2. OnChange for after removing tracks

Images when the web is running
1. Before Login 
![image](https://user-images.githubusercontent.com/23490571/111352521-d6bfdc80-86b6-11eb-982a-201ca546ea3a.png)

2. After click login button, it will redirect to another login page from server (included in the backend)
![image](https://user-images.githubusercontent.com/23490571/111354000-70d45480-86b8-11eb-857c-6c070d93380b.png)

3. After login, it will show homepage. This is a homepage with my user data. before clicking Check Now Playing Button and Playlist Button
![image](https://user-images.githubusercontent.com/23490571/111354260-b42ec300-86b8-11eb-8761-1951b0b1c22e.png)

4. After i clicked Check Now Playing button and Playlist Button (Vampire Weekend)
![image](https://user-images.githubusercontent.com/23490571/111354622-17b8f080-86b9-11eb-8297-0d7cdfb1961a.png)

5. After i clicked Remove Track (I stand corrected) with response in console
![image](https://user-images.githubusercontent.com/23490571/111354841-52bb2400-86b9-11eb-9bae-a99ff2703621.png)

6. I should click again on the Vampire weekend playlist button first to see any changes . "I stand corrected" is gone
![image](https://user-images.githubusercontent.com/23490571/111355373-e55bc300-86b9-11eb-9e02-233640ca71ff.png)

