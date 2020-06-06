set client_encoding = 'UTF8';
CREATE TABLE "src_test_fixtures_hotel" (
  "v1" numeric,
  "v2" numeric,
  "v3" numeric,
  "v4" numeric,
  "v5" numeric
);

COMMENT ON COLUMN "src_test_fixtures_hotel"."v1" IS 'I am satisfied with the level of service';
COMMENT ON COLUMN "src_test_fixtures_hotel"."v2" IS 'The value for money was good';
COMMENT ON COLUMN "src_test_fixtures_hotel"."v3" IS 'The staff were slow in responding   ';
COMMENT ON COLUMN "src_test_fixtures_hotel"."v4" IS 'My concerns were dealt with in an efficient manner  ';
COMMENT ON COLUMN "src_test_fixtures_hotel"."v5" IS 'There was too much noise in the rooms   ';

INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (4,2,3,4,1);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (1,1,4,1,1);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (4,2,2,3,4);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (3,1,3,1,2);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (5,3,1,4,3);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (2,2,5,3,2);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (3,2,4,3,1);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (1,4,5,2,1);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (3,2,3,1,2);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (2,5,4,2,1);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (4,2,2,3,5);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (2,1,4,1,1);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (1,2,5,4,2);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (2,3,3,3,1);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (4,1,1,3,3);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (1,1,5,1,2);
INSERT INTO "src_test_fixtures_hotel" ("v1","v2","v3","v4","v5") VALUES (1,5,5,2,2);