create TABLE EVENT_STORE{

    ID_EVENT bigint not null auto_increment primary key,
    EVENT_NAME varchar(255) not null,
    AGGREGATE_ID varchar(255) not null,
    AGGREGATE_TYPE varchar(255) not null,
    EVENT_PAYLOAD JSON not null,
}