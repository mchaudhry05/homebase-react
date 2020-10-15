goog.provide('homebase.reagent');
/**
 * Monkeypatch conn-from-db in datascript to use an r/atom https://github.com/tonsky/datascript/blob/master/src/datascript/core.cljc#L411
 */
homebase.reagent.conn_from_db = (function homebase$reagent$conn_from_db(db){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
});
/**
 * Creates an empty DB and a mutable reference to it. See [[create-conn]].
 */
homebase.reagent.conn_from_datoms = (function homebase$reagent$conn_from_datoms(var_args){
var G__23501 = arguments.length;
switch (G__23501) {
case 1:
return homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return homebase.reagent.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.core.init_db.call(null,datoms)));
}));

(homebase.reagent.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return homebase.reagent.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$2(datoms,schema) : datascript.core.init_db.call(null,datoms,schema)));
}));

(homebase.reagent.conn_from_datoms.cljs$lang$maxFixedArity = 2);

/**
 * Creates a mutable reference (a “connection”) to an empty immutable database.
 * Connections are lightweight in-memory structures (~atoms) with direct support of transaction listeners ([[listen!]], [[unlisten!]]) and other handy DataScript APIs ([[transact!]], [[reset-conn!]], [[db]]).
 * To access underlying immutable DB value, deref: `@conn`.
 */
homebase.reagent.create_conn = (function homebase$reagent$create_conn(var_args){
var G__23503 = arguments.length;
switch (G__23503) {
case 0:
return homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return homebase.reagent.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0() : datascript.core.empty_db.call(null)));
}));

(homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return homebase.reagent.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema)));
}));

(homebase.reagent.create_conn.cljs$lang$maxFixedArity = 1);

homebase.reagent.new_db_conn = (function homebase$reagent$new_db_conn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23520 = arguments.length;
var i__4737__auto___23521 = (0);
while(true){
if((i__4737__auto___23521 < len__4736__auto___23520)){
args__4742__auto__.push((arguments[i__4737__auto___23521]));

var G__23522 = (i__4737__auto___23521 + (1));
i__4737__auto___23521 = G__23522;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return homebase.reagent.new_db_conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(homebase.reagent.new_db_conn.cljs$core$IFn$_invoke$arity$variadic = (function (txs,p__23508){
var map__23509 = p__23508;
var map__23509__$1 = (((((!((map__23509 == null))))?(((((map__23509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23509):map__23509);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var conn = homebase.reagent.create_conn.cljs$core$IFn$_invoke$arity$1(schema);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs);

return conn;
}));

(homebase.reagent.new_db_conn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(homebase.reagent.new_db_conn.cljs$lang$applyTo = (function (seq23504){
var G__23505 = cljs.core.first(seq23504);
var seq23504__$1 = cljs.core.next(seq23504);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23505,seq23504__$1);
}));

homebase.reagent.q = (function homebase$reagent$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23523 = arguments.length;
var i__4737__auto___23524 = (0);
while(true){
if((i__4737__auto___23524 < len__4736__auto___23523)){
args__4742__auto__.push((arguments[i__4737__auto___23524]));

var G__23525 = (i__4737__auto___23524 + (1));
i__4737__auto___23524 = G__23525;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,vars){
if(typeof query === 'number'){
var G__23514 = cljs.core.deref(conn);
var G__23515 = query;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__23514,G__23515) : datascript.core.entity.call(null,G__23514,G__23515));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),vars);

}
}));

(homebase.reagent.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.reagent.q.cljs$lang$applyTo = (function (seq23511){
var G__23512 = cljs.core.first(seq23511);
var seq23511__$1 = cljs.core.next(seq23511);
var G__23513 = cljs.core.first(seq23511__$1);
var seq23511__$2 = cljs.core.next(seq23511__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23512,G__23513,seq23511__$2);
}));

homebase.reagent.transact_BANG_ = (function homebase$reagent$transact_BANG_(conn,txs){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs);
});

//# sourceMappingURL=homebase.reagent.js.map
