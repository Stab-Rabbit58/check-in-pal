SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
  "_id" serial NOT NULL,
  "username" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.tasks (
  "_id" serial NOT NULL,
  "task" varchar UNIQUE NOT NULL,
  "user_id" int NOT NULL,
  PRIMARY KEY (_id),
  FOREIGN KEY (user_id) REFERENCES public.users(_id)
  CONSTRAINT uniqueCombo UNIQUE (user_id, task)
);

-- INSERT INTO public.outfits VALUES (3, 'test')