Simple website that allows browsing movie database provided by https://www.themoviedb.org/

#### Setup application
`mkvirtualenv --python=/usr/bin/python3 movie-env`
`pip install -r requirements.txt`
`npm install --prefix movie_browser`
`python movie_database/manage.py syncdb`
Create super user
`python movie_database/manage.py createsuperuser`

#### Run application
`$ honcho start`

Frontend Application:
`http://localhost:5100`

Backend Application:
`http://localhost:8000`

To create new User go to `http://localhost:8000/admin/` and create new user manually.
Then manually create token for him `/admin/authtoken/token/`
