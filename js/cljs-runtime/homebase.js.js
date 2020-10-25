goog.provide('homebase.js');
homebase.js.keywordize_str = (function homebase$js$keywordize_str(s){
if(((typeof s === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),":")))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return s;
}
});
homebase.js.keywordize = (function homebase$js$keywordize(coll){
return clojure.walk.postwalk(homebase.js.keywordize_str,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(coll));
});
homebase.js.js__GT_db_attr_overrides = new cljs.core.PersistentArrayMap(null, 3, ["id",new cljs.core.Keyword("db","id","db/id",-1388397098),"identity",new cljs.core.Keyword("db","ident","db/ident",-737096),"ident",new cljs.core.Keyword("db","ident","db/ident",-737096)], null);
homebase.js.bool_re = /^(is|has|show|hide)(-|_)?(.*)/;
homebase.js.js__GT_bool_key = (function homebase$js$js__GT_bool_key(string){
var temp__5735__auto__ = cljs.core.re_find(homebase.js.bool_re,string);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__23916 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23916,(0),null);
var verb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23916,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23916,(2),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23916,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("is",verb)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"?"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(verb),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"?"].join('');
}
} else {
return null;
}
});
homebase.js.js__GT_key_not_memo = (function homebase$js$js__GT_key_not_memo(namespace,string){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.js__GT_db_attr_overrides,string);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.core.__GT_kebab_case(namespace),camel_snake_kebab.core.__GT_kebab_case((function (){var or__4126__auto____$1 = homebase.js.js__GT_bool_key(string);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return string;
}
})()));
}
});
homebase.js.js__GT_key = cljs.core.memoize(homebase.js.js__GT_key_not_memo);
homebase.js.js_tx_fns = new cljs.core.PersistentArrayMap(null, 3, ["add",new cljs.core.Keyword("db","add","db/add",235286841),"retract",new cljs.core.Keyword("db","retract","db/retract",-1549825231),"retractEntity",new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)], null);
homebase.js.js__GT_tx = (function homebase$js$js__GT_tx(var_args){
var G__23928 = arguments.length;
switch (G__23928) {
case 1:
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$1 = (function (tx){
if(cljs.core.object_QMARK_(tx)){
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2(tx,"db");
} else {
var vec__23948 = tx;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23948,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23948,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23948,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23948,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.js_tx_fns,f),e,homebase.js.keywordize(a),v], null);
}
}));

(homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2 = (function (data,namespace){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.coll_QMARK_(v)){
return homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$2(v,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,homebase.js.js__GT_key(namespace,k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data));
}));

(homebase.js.js__GT_tx.cljs$lang$maxFixedArity = 2);

homebase.js.js__GT_entity_lookup = (function homebase$js$js__GT_entity_lookup(lookup){
if(typeof lookup === 'number'){
return lookup;
} else {
if(cljs.core.object_QMARK_(lookup)){
return cljs.core.first(homebase.js.js__GT_tx.cljs$core$IFn$_invoke$arity$1(lookup));
} else {
return null;

}
}
});
homebase.js.str__GT_schema_key = new cljs.core.PersistentArrayMap(null, 4, ["unique",new cljs.core.Keyword("db","unique","db/unique",329396388),"identity",new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),"type",new cljs.core.Keyword("db","valueType","db/valueType",1827971944),"ref",new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null);
homebase.js.js__GT_schema = (function homebase$js$js__GT_schema(schema){
var schema__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(schema);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__23960){
var vec__23961 = p__23960;
var nms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23961,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23961,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23961,(2),null);
var p = vec__23961;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.str__GT_schema_key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(schema__$1,p));
var k__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(homebase.js.str__GT_schema_key,k);
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homebase.js.js__GT_key(nms,nm),k__$1], null),v);
}),cljs.core.PersistentArrayMap.EMPTY,homebase.util.paths(schema__$1));
});
homebase.js.q_entity_array = (function homebase$js$q_entity_array(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24043 = arguments.length;
var i__4737__auto___24044 = (0);
while(true){
if((i__4737__auto___24044 < len__4736__auto___24043)){
args__4742__auto__.push((arguments[i__4737__auto___24044]));

var G__24045 = (i__4737__auto___24044 + (1));
i__4737__auto___24044 = G__24045;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.js.q_entity_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.js.q_entity_array.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23994){
var vec__23995 = p__23994;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23995,(0),null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(conn,id) : datascript.core.entity.call(null,conn,id));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,conn,args)));
}));

(homebase.js.q_entity_array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.js.q_entity_array.cljs$lang$applyTo = (function (seq23987){
var G__23988 = cljs.core.first(seq23987);
var seq23987__$1 = cljs.core.next(seq23987);
var G__23989 = cljs.core.first(seq23987__$1);
var seq23987__$2 = cljs.core.next(seq23987__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23988,G__23989,seq23987__$2);
}));

homebase.js.js__GT_datalog = (function homebase$js$js__GT_datalog(data){
var map__24001 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
var map__24001__$1 = (((((!((map__24001 == null))))?(((((map__24001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24001):map__24001);
var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24001__$1,"$find");
var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24001__$1,"$where");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(find)].join(''))], null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__24006){
var vec__24007 = p__24006;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24007,(0),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24007,(1),null);
var vec__24013 = cljs.core.seq(av);
var vec__24016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24013,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24016,(1),null);
var pred = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(e,a)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"$any")){
return pred;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}
}),where)], null);
});
homebase.js.js__GT_query = (function homebase$js$js__GT_query(query){
if(typeof query === 'string'){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query);
} else {
if(cljs.core.object_QMARK_(query)){
return homebase.js.js__GT_datalog(query);
} else {
return null;

}
}
});
homebase.js.js_get = (function homebase$js$js_get(entity,name){
var G__24028 = name;
switch (G__24028) {
case "id":
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);

break;
case "ident":
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(entity);

break;
case "identity":
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(entity);

break;
default:
var ks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null),cljs.core.keys(entity));
var nms = cljs.core.namespace(cljs.core.first(ks));
var k = homebase.js.js__GT_key(nms,name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);

}
});
(datascript.impl.entity.Entity.prototype.get = (function() { 
var G__24047__delegate = function (keys){
var this$ = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
var key__$1 = homebase.js.keywordize(key);
var f = (((key__$1 instanceof cljs.core.Keyword))?cljs.core.get:homebase.js.js_get);
if(cljs.core.set_QMARK_(acc)){
var G__24029 = cljs.core.first(acc);
var G__24030 = homebase.js.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24029,G__24030) : f.call(null,G__24029,G__24030));
} else {
if(cljs.core.truth_(acc)){
var G__24031 = acc;
var G__24032 = homebase.js.keywordize(key__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24031,G__24032) : f.call(null,G__24031,G__24032));
} else {
return null;

}
}
}),this$,keys);
};
var G__24047 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__24048__i = 0, G__24048__a = new Array(arguments.length -  0);
while (G__24048__i < G__24048__a.length) {G__24048__a[G__24048__i] = arguments[G__24048__i + 0]; ++G__24048__i;}
  keys = new cljs.core.IndexedSeq(G__24048__a,0,null);
} 
return G__24047__delegate.call(this,keys);};
G__24047.cljs$lang$maxFixedArity = 0;
G__24047.cljs$lang$applyTo = (function (arglist__24049){
var keys = cljs.core.seq(arglist__24049);
return G__24047__delegate(keys);
});
G__24047.cljs$core$IFn$_invoke$arity$variadic = G__24047__delegate;
return G__24047;
})()
);
homebase.js.nil__GT_retract = (function homebase$js$nil__GT_retract(tx){
var temp__5733__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24033){
var vec__24034 = p__24033;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24034,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((v == null))?new cljs.core.Keyword("db","retract","db/retract",-1549825231):new cljs.core.Keyword("db","add","db/add",235286841)),id,k,v], null);
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.Keyword("db","id","db/id",-1388397098)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
}
});
homebase.js.transact_BANG_ = (function homebase$js$transact_BANG_(conn,txs){
var txs__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(homebase.js.nil__GT_retract,homebase.js.js__GT_tx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([txs], 0));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs__$1);
});
homebase.js.entity = (function homebase$js$entity(conn,lookup){
var G__24037 = cljs.core.deref(conn);
var G__24038 = homebase.js.js__GT_entity_lookup(lookup);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__24037,G__24038) : datascript.core.entity.call(null,G__24037,G__24038));
});
homebase.js.q = (function homebase$js$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24063 = arguments.length;
var i__4737__auto___24064 = (0);
while(true){
if((i__4737__auto___24064 < len__4736__auto___24063)){
args__4742__auto__.push((arguments[i__4737__auto___24064]));

var G__24065 = (i__4737__auto___24064 + (1));
i__4737__auto___24064 = G__24065;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return homebase.js.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(homebase.js.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(homebase.js.q_entity_array,homebase.js.js__GT_query(query),cljs.core.deref(conn),homebase.js.keywordize(args));
}));

(homebase.js.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(homebase.js.q.cljs$lang$applyTo = (function (seq24039){
var G__24040 = cljs.core.first(seq24039);
var seq24039__$1 = cljs.core.next(seq24039);
var G__24041 = cljs.core.first(seq24039__$1);
var seq24039__$2 = cljs.core.next(seq24039__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24040,G__24041,seq24039__$2);
}));


//# sourceMappingURL=homebase.js.js.map
