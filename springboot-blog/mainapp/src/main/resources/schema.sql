CREATE TABLE IF NOT EXISTS users
(
    user_id    BIGINT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) NOT NULL,
    username   VARCHAR(50) NOT NULL UNIQUE,
    password   TEXT        NOT NULL,
    email      VARCHAR(50) NOT NULL UNIQUE,
    birthdate  DATE        NOT NULL,
    about      TEXT CHECK (char_length(about) <= 1000),
    is_banned  BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS roles
(
    role_id BIGINT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name    VARCHAR(50) NOT NULL CHECK (name IN ('ROLE_ADMIN', 'ROLE_USER'))
);

CREATE TABLE IF NOT EXISTS users_roles
(
    user_id BIGINT REFERENCES users (user_id),
    role_id BIGINT REFERENCES roles (role_id),
    CONSTRAINT users_roles_pk PRIMARY KEY (user_id, role_id)
);

CREATE TABLE IF NOT EXISTS messages
(
    message_id   BIGINT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    message      TEXT      NOT NULL CHECK (char_length(message) <= 500),
    sender_id    BIGINT    NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
    recipient_id BIGINT    NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
    created      TIMESTAMP NOT NULL,
    is_deleted   BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS articles
(
    article_id BIGINT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title      VARCHAR(250) NOT NULL,
    content    TEXT         NOT NULL CHECK (char_length(content) <= 30000),
    image      TEXT,
    author_id  BIGINT       NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
    created    TIMESTAMP    NOT NULL,
    published  TIMESTAMP,
    likes      BIGINT,
    status     VARCHAR(50)  NOT NULL CHECK (status IN ('PUBLISHED',
                                                       'MODERATING',
                                                       'CREATED',
                                                       'REJECTED')),
    views      BIGINT
);

CREATE TABLE IF NOT EXISTS comments
(
    comment_id BIGINT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    comment    TEXT      NOT NULL CHECK (char_length(comment) <= 500),
    created    TIMESTAMP NOT NULL,
    article_id BIGINT    NOT NULL REFERENCES articles (article_id) ON DELETE CASCADE,
    user_id    BIGINT    NOT NULL REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS tags
(
    tag_id BIGINT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name   VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS articles_tags
(
    article_id BIGINT REFERENCES articles (article_id),
    tag_id     BIGINT REFERENCES tags (tag_id),
    CONSTRAINT articles_tags_pk PRIMARY KEY (article_id, tag_id)
);

/*SELECT * FROM articles AS a
LEFT JOIN articles_tags t on a.article_id = t.article_id
LEFT JOIN tags t2 on t.tag_id = t2.tag_id
WHERE t2.name = 'turkey';*/

