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
![image](https://user-images.githubusercontent.com/23490571/111359771-80ef3280-86be-11eb-9e6b-8ace05d96c06.png)

5. After i clicked remove, it will prompt another buttons, cancel will close the modal and remove will delete the track from playlist (I tried remove "I Stand Corrected"
![image](https://user-images.githubusercontent.com/23490571/111359901-b005a400-86be-11eb-8354-528dd4e2dc6e.png)

6. After i clicked Remove Track (I stand corrected) with response in console
![image](https://user-images.githubusercontent.com/23490571/111359980-ca3f8200-86be-11eb-80a5-8940c5fc1b87.png)

7. I should click again on the Vampire weekend playlist button first to see any changes . "I stand corrected" is gone
![image](https://user-images.githubusercontent.com/23490571/111360050-db888e80-86be-11eb-8e97-51808698bad8.png)


