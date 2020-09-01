define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-ec27f304","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-44fb48f1","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-b49b2e59","./EncodedCartesian3-e9c71cf0","./IndexDatatype-53503fee","./IntersectionTests-2626c9e9","./Plane-231f1723","./VertexFormat-7572c785","./GeometryInstance-11f9a3bd","./arrayRemoveDuplicates-ebc732b0","./BoundingRectangle-8de79d83","./EllipsoidTangentPlane-ed172748","./OrientedBoundingBox-c9ad91c4","./CoplanarPolygonGeometryLibrary-dc8e954f","./ArcType-dc1c5aee","./EllipsoidRhumbLine-c704bf4c","./PolygonPipeline-ff364b47","./PolygonGeometryLibrary-29b9a52e"],function(s,e,V,R,I,t,n,M,H,B,a,w,r,O,o,i,c,A,F,l,p,y,G,m,u,z,L){"use strict";var S=new R.Cartesian3,E=new l.BoundingRectangle,N=new R.Cartesian2,Q=new R.Cartesian2,T=new R.Cartesian3,D=new R.Cartesian3,_=new R.Cartesian3,k=new R.Cartesian3,j=new R.Cartesian3,U=new R.Cartesian3,Y=new I.Quaternion,q=new I.Matrix3,J=new I.Matrix3,W=new R.Cartesian3;function d(e){var t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=s.defaultValue(e.vertexFormat,c.VertexFormat.DEFAULT);this._vertexFormat=c.VertexFormat.clone(n),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=R.Ellipsoid.clone(s.defaultValue(e.ellipsoid,R.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=L.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+c.VertexFormat.packedLength+R.Ellipsoid.packedLength+2}d.fromPositions=function(e){return new d({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},d.pack=function(e,t,n){return n=s.defaultValue(n,0),n=L.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n),R.Ellipsoid.pack(e._ellipsoid,t,n),n+=R.Ellipsoid.packedLength,c.VertexFormat.pack(e._vertexFormat,t,n),n+=c.VertexFormat.packedLength,t[n++]=e._stRotation,t[n]=e.packedLength,t};var g=R.Ellipsoid.clone(R.Ellipsoid.UNIT_SPHERE),b=new c.VertexFormat,h={polygonHierarchy:{}};return d.unpack=function(e,t,n){t=s.defaultValue(t,0);var a=L.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=a.startingIndex,delete a.startingIndex;var r=R.Ellipsoid.unpack(e,t,g);t+=R.Ellipsoid.packedLength;var o=c.VertexFormat.unpack(e,t,b);t+=c.VertexFormat.packedLength;var i=e[t++],l=e[t];return s.defined(n)||(n=new d(h)),n._polygonHierarchy=a,n._ellipsoid=R.Ellipsoid.clone(r,n._ellipsoid),n._vertexFormat=c.VertexFormat.clone(o,n._vertexFormat),n._stRotation=i,n.packedLength=l,n},d.createGeometry=function(e){var t=e._vertexFormat,n=e._polygonHierarchy,a=e._stRotation,r=n.positions;if(!((r=F.arrayRemoveDuplicates(r,R.Cartesian3.equalsEpsilon,!0)).length<3)){var o=T,i=D,l=_,s=j,c=U;if(G.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(r,k,s,c)){var p,o=R.Cartesian3.cross(s,c,o);o=R.Cartesian3.normalize(o,o),R.Cartesian3.equalsEpsilon(k,R.Cartesian3.ZERO,V.CesiumMath.EPSILON6)||(p=e._ellipsoid.geodeticSurfaceNormal(k,W),R.Cartesian3.dot(o,p)<0&&(o=R.Cartesian3.negate(o,o),s=R.Cartesian3.negate(s,s)));var y=G.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(k,s,c),m=G.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(k,s,c);t.tangent&&(i=R.Cartesian3.clone(s,i)),t.bitangent&&(l=R.Cartesian3.clone(c,l));var u=L.PolygonGeometryLibrary.polygonsFromHierarchy(n,y,!1),d=u.hierarchy,g=u.polygons;if(0!==d.length){r=d[0].outerRing;for(var b=I.BoundingSphere.fromPoints(r),h=L.PolygonGeometryLibrary.computeBoundingRectangle(o,m,r,a,E),f=[],v=0;v<g.length;v++){var C=new A.GeometryInstance({geometry:function(e,t,n,a,r,o,i,l){var s=e.positions,c=z.PolygonPipeline.triangulate(e.positions2D,e.holes);c.length<3&&(c=[0,1,2]);var p=O.IndexDatatype.createTypedArray(s.length,c.length);p.set(c);var y,m,u=q;0!==a?(y=I.Quaternion.fromAxisAngle(o,a,Y),u=I.Matrix3.fromQuaternion(y,u),(t.tangent||t.bitangent)&&(y=I.Quaternion.fromAxisAngle(o,-a,Y),m=I.Matrix3.fromQuaternion(y,J),i=R.Cartesian3.normalize(I.Matrix3.multiplyByVector(m,i,i),i),t.bitangent&&(l=R.Cartesian3.normalize(R.Cartesian3.cross(o,i,l),l)))):u=I.Matrix3.clone(I.Matrix3.IDENTITY,u);var d=Q;t.st&&(d.x=n.x,d.y=n.y);for(var g=s.length,b=3*g,h=new Float64Array(b),f=t.normal?new Float32Array(b):void 0,v=t.tangent?new Float32Array(b):void 0,C=t.bitangent?new Float32Array(b):void 0,x=t.st?new Float32Array(2*g):void 0,P=0,w=0,A=0,F=0,G=0,L=0;L<g;L++){var E,T,D,_=s[L];h[P++]=_.x,h[P++]=_.y,h[P++]=_.z,t.st&&(E=r(I.Matrix3.multiplyByVector(u,_,S),N),R.Cartesian2.subtract(E,d,E),T=V.CesiumMath.clamp(E.x/n.width,0,1),D=V.CesiumMath.clamp(E.y/n.height,0,1),x[G++]=T,x[G++]=D),t.normal&&(f[w++]=o.x,f[w++]=o.y,f[w++]=o.z),t.tangent&&(v[F++]=i.x,v[F++]=i.y,v[F++]=i.z),t.bitangent&&(C[A++]=l.x,C[A++]=l.y,C[A++]=l.z)}var k=new B.GeometryAttributes;return t.position&&(k.position=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:h})),t.normal&&(k.normal=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),t.tangent&&(k.tangent=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),t.bitangent&&(k.bitangent=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C})),t.st&&(k.st=new H.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:x})),new H.Geometry({attributes:k,indices:p,primitiveType:H.PrimitiveType.TRIANGLES})}(g[v],t,h,a,m,o,i,l)});f.push(C)}var x=w.GeometryPipeline.combineInstances(f)[0];x.attributes.position.values=new Float64Array(x.attributes.position.values),x.indices=O.IndexDatatype.createTypedArray(x.attributes.position.values.length/3,x.indices);var P=x.attributes;return t.position||delete P.position,new H.Geometry({attributes:P,indices:x.indices,primitiveType:x.primitiveType,boundingSphere:b})}}}},function(e,t){return s.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}});
