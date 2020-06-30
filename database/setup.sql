DROP TABLE IF EXISTS greetings;
CREATE TABLE greetings (
  id SERIAL,
  message varchar(255),
  PRIMARY KEY (id)
);

BEGIN WORK;
LOCK TABLE greetings IN SHARE MODE;
INSERT INTO greetings (message) VALUES ('hello, world');
ALTER SEQUENCE greetings_id_seq RESTART WITH 2;
COMMIT WORK;
