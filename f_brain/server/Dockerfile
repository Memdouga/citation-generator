# Étape 1 : Image de base Python légère
FROM python:3.12-slim

# Étape 2 : Variables d’environnement pour Django
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV POETRY_VERSION=2.1.3

# Étape 3 : Installer dépendances système
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    gcc \
    && apt-get clean && rm -rf /var/lib/apt/lists/*


# Étape 5 : Définir le dossier de travail
WORKDIR /app

# Étape 6 : Copier les fichiers Poetry
COPY pyproject.toml .

# Étape 7 : Installer les dépendances sans virtualenv
RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi

# Étape 8 : Copier le code du projet
COPY . .

# Étape 9 : Exposer le port Django
EXPOSE 8000

# Étape 10 : Lancer le serveur Django (dev)
CMD ["poetry", "run", "python", "manage.py", "runserver", "--bind", "0.0.0.0:8000"]
