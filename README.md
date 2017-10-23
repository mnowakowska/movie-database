Simple website that allows browsing movie database provided by https://www.themoviedb.org/

#### Setup application
`mkvirtualenv --python=/usr/bin/python3 movie-env`

`pip install -r requirements.txt`

`npm install --prefix movie_browser`

`python movie_database/manage.py migrate`

Set MOVIE_DB_API_KEY in `/movie_database/movie_database/settings.py`

#### Run application
`$ honcho start`

Frontend Application:
`http://localhost:5100`

Backend Application:
`http://localhost:8000`

#### Run tests
`npm test --prefix movie_browser`
