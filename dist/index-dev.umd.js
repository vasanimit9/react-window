!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).ReactWindow={},e.React)}(this,function(e,t){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=function(e,t){return e.length===t.length&&e.every(function(e,r){return n=e,o=t[r],n===o;var n,o})};function a(e,t){var r;void 0===t&&(t=i);var n,o=[],a=!1;return function(){for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return a&&r===this&&t(l,o)?n:(n=e.apply(this,l),a=!0,r=this,o=l,n)}}var l="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function s(e){cancelAnimationFrame(e.id)}function c(e,t){var r=l();var n={id:requestAnimationFrame(function o(){l()-r>=t?e.call(null):n.id=requestAnimationFrame(o)})};return n}var u=-1;var d=null;function f(e){if(void 0===e&&(e=!1),null===d||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),o=n.style;return o.width="100px",o.height="100px",t.appendChild(n),document.body.appendChild(t),t.scrollLeft>0?d="positive-descending":(t.scrollLeft=1,d=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),d}return d}var h=150,p=function(e){var t=e.columnIndex;e.data;return e.rowIndex+":"+t},m=null,v=null,g=null;function w(e){var i,l,d=e.getColumnOffset,m=e.getColumnStartIndexForOffset,v=e.getColumnStopIndexForStartIndex,g=e.getColumnWidth,w=e.getEstimatedTotalHeight,I=e.getEstimatedTotalWidth,M=e.getOffsetForColumnAndAlignment,y=e.getOffsetForRowAndAlignment,x=e.getRowHeight,C=e.getRowOffset,b=e.getRowStartIndexForOffset,_=e.getRowStopIndexForStartIndex,R=e.initInstanceProps,T=e.shouldResetStyleCacheOnItemSizeChange,z=e.validateProps;return l=i=function(e){function i(t){var r;return(r=e.call(this,t)||this)._instanceProps=R(r.props,o(o(r))),r._resetIsScrollingTimeoutId=null,r._outerRef=void 0,r.state={instance:o(o(r)),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof r.props.initialScrollLeft?r.props.initialScrollLeft:0,scrollTop:"number"==typeof r.props.initialScrollTop?r.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a(function(e,t,n,o,i,a,l,s){return r.props.onItemsRendered({overscanColumnStartIndex:e,overscanColumnStopIndex:t,overscanRowStartIndex:n,overscanRowStopIndex:o,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})}),r._callOnScroll=void 0,r._callOnScroll=a(function(e,t,n,o,i){return r.props.onScroll({horizontalScrollDirection:n,scrollLeft:e,scrollTop:t,verticalScrollDirection:o,scrollUpdateWasRequested:i})}),r._getItemStyle=void 0,r._getItemStyle=function(e,t){var n,o=r.props,i=o.columnWidth,a=o.direction,l=o.rowHeight,s=r._getItemStyleCache(T&&i,T&&a,T&&l),c=e+":"+t;if(s.hasOwnProperty(c))n=s[c];else{var u=d(r.props,t,r._instanceProps),f="rtl"===a;s[c]=n={position:"absolute",left:f?void 0:u,right:f?u:void 0,top:C(r.props,e,r._instanceProps),height:x(r.props,e,r._instanceProps),width:g(r.props,t,r._instanceProps)}}return n},r._getItemStyleCache=void 0,r._getItemStyleCache=a(function(e,t,r){return{}}),r._onScroll=function(e){var t=e.currentTarget,n=t.clientHeight,o=t.clientWidth,i=t.scrollLeft,a=t.scrollTop,l=t.scrollHeight,s=t.scrollWidth;r.setState(function(e){if(e.scrollLeft===i&&e.scrollTop===a)return null;var t=r.props.direction,c=i;if("rtl"===t)switch(f()){case"negative":c=-i;break;case"positive-descending":c=s-o-i}c=Math.max(0,Math.min(c,s-o));var u=Math.max(0,Math.min(a,l-n));return{isScrolling:!0,horizontalScrollDirection:e.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:e.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=c(r._resetIsScrolling,h)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1)})},r}n(i,e),i.getDerivedStateFromProps=function(e,t){return S(e,t),z(e),null};var l=i.prototype;return l.scrollTo=function(e){var t=e.scrollLeft,r=e.scrollTop;void 0!==t&&(t=Math.max(0,t)),void 0!==r&&(r=Math.max(0,r)),this.setState(function(e){return void 0===t&&(t=e.scrollLeft),void 0===r&&(r=e.scrollTop),e.scrollLeft===t&&e.scrollTop===r?null:{horizontalScrollDirection:e.scrollLeft<t?"forward":"backward",scrollLeft:t,scrollTop:r,scrollUpdateWasRequested:!0,verticalScrollDirection:e.scrollTop<r?"forward":"backward"}},this._resetIsScrollingDebounced)},l.scrollToItem=function(e){var t=e.align,r=void 0===t?"auto":t,n=e.columnIndex,o=e.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,d=this.state,f=d.scrollLeft,h=d.scrollTop,p=function(e){if(void 0===e&&(e=!1),-1===u||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),u=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return u}();void 0!==n&&(n=Math.max(0,Math.min(n,a-1))),void 0!==o&&(o=Math.max(0,Math.min(o,s-1)));var m=w(this.props,this._instanceProps),v=I(this.props,this._instanceProps)>c?p:0,g=m>l?p:0;this.scrollTo({scrollLeft:void 0!==n?M(this.props,n,r,f,this._instanceProps,g):f,scrollTop:void 0!==o?y(this.props,o,r,h,this._instanceProps,v):h})},l.componentDidMount=function(){var e=this.props,t=e.initialScrollLeft,r=e.initialScrollTop;if(null!=this._outerRef){var n=this._outerRef;"number"==typeof t&&(n.scrollLeft=t),"number"==typeof r&&(n.scrollTop=r)}this._callPropsCallbacks()},l.componentDidUpdate=function(){var e=this.props.direction,t=this.state,r=t.scrollLeft,n=t.scrollTop;if(t.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("rtl"===e)switch(f()){case"negative":o.scrollLeft=-r;break;case"positive-ascending":o.scrollLeft=r;break;default:var i=o.clientWidth,a=o.scrollWidth;o.scrollLeft=a-i-r}else o.scrollLeft=Math.max(0,r);o.scrollTop=Math.max(0,n)}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var e=this.props,n=e.children,o=e.className,i=e.columnCount,a=e.direction,l=e.height,s=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemData,f=e.itemKey,h=void 0===f?p:f,m=e.outerElementType,v=e.outerTagName,g=e.rowCount,S=e.style,M=e.useIsScrolling,y=e.width,x=this.state.isScrolling,C=this._getHorizontalRangeToRender(),b=C[0],_=C[1],R=this._getVerticalRangeToRender(),T=R[0],z=R[1],O=[];if(i>0&&g)for(var P=T;P<=z;P++)for(var W=b;W<=_;W++)O.push(t.createElement(n,{columnIndex:W,data:d,isScrolling:M?x:void 0,key:h({columnIndex:W,data:d,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var E=w(this.props,this._instanceProps),A=I(this.props,this._instanceProps);return t.createElement(m||v||"div",{className:o,onScroll:this._onScroll,ref:this._outerRefSetter,style:r({position:"relative",height:l,width:y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},S)},t.createElement(c||u||"div",{children:O,ref:s,style:{height:E,pointerEvents:x?"none":void 0,width:A}}))},l._callPropsCallbacks=function(){var e=this.props,t=e.columnCount,r=e.onItemsRendered,n=e.onScroll,o=e.rowCount;if("function"==typeof r&&t>0&&o>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),d=u[0],f=u[1],h=u[2],p=u[3];this._callOnItemsRendered(a,l,d,f,s,c,h,p)}if("function"==typeof n){var m=this.state,v=m.horizontalScrollDirection,g=m.scrollLeft,w=m.scrollTop,S=m.scrollUpdateWasRequested,I=m.verticalScrollDirection;this._callOnScroll(g,w,v,I,S)}},l._getHorizontalRangeToRender=function(){var e=this.props,t=e.columnCount,r=e.overscanColumnCount,n=e.overscanColumnsCount,o=e.overscanCount,i=e.rowCount,a=this.state,l=a.horizontalScrollDirection,s=a.isScrolling,c=a.scrollLeft,u=r||n||o||1;if(0===t||0===i)return[0,0,0,0];var d=m(this.props,c,this._instanceProps),f=v(this.props,d,c,this._instanceProps),h=s&&"backward"!==l?1:Math.max(1,u),p=s&&"forward"!==l?1:Math.max(1,u);return[Math.max(0,d-h),Math.max(0,Math.min(t-1,f+p)),d,f]},l._getVerticalRangeToRender=function(){var e=this.props,t=e.columnCount,r=e.overscanCount,n=e.overscanRowCount,o=e.overscanRowsCount,i=e.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=n||o||r||1;if(0===t||0===i)return[0,0,0,0];var d=b(this.props,c,this._instanceProps),f=_(this.props,d,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),p=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,d-h),Math.max(0,Math.min(i-1,f+p)),d,f]},i}(t.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},l}"undefined"!=typeof window&&void 0!==window.WeakSet&&(m=new WeakSet,v=new WeakSet,g=new WeakSet);var S=function(e,t){var r=e.children,n=e.direction,o=e.height,i=e.innerTagName,a=e.outerTagName,l=e.overscanColumnsCount,s=e.overscanCount,c=e.overscanRowsCount,u=e.width,d=t.instance;if("number"==typeof s&&m&&!m.has(d)&&(m.add(d),console.warn("The overscanCount prop has been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.")),"number"!=typeof l&&"number"!=typeof c||v&&!v.has(d)&&(v.add(d),console.warn("The overscanColumnsCount and overscanRowsCount props have been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.")),null==i&&null==a||g&&!g.has(d)&&(g.add(d),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.")),null==r)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===r?"null":typeof r)+'" was specified.');switch(n){case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+n+'" was specified.')}if("number"!=typeof u)throw Error('An invalid "width" prop has been specified. Grids must specify a number for width. "'+(null===u?"null":typeof u)+'" was specified.');if("number"!=typeof o)throw Error('An invalid "height" prop has been specified. Grids must specify a number for height. "'+(null===o?"null":typeof o)+'" was specified.')},I=function(e,t){var r=e.rowCount,n=t.rowMetadataMap,o=t.estimatedRowHeight,i=t.lastMeasuredRowIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=n[i];a=l.offset+l.size}return a+(r-i-1)*o},M=function(e,t){var r=e.columnCount,n=t.columnMetadataMap,o=t.estimatedColumnWidth,i=t.lastMeasuredColumnIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=n[i];a=l.offset+l.size}return a+(r-i-1)*o},y=function(e,t,r,n){var o,i,a;if("column"===e?(o=n.columnMetadataMap,i=t.columnWidth,a=n.lastMeasuredColumnIndex):(o=n.rowMetadataMap,i=t.rowHeight,a=n.lastMeasuredRowIndex),r>a){var l=0;if(a>=0){var s=o[a];l=s.offset+s.size}for(var c=a+1;c<=r;c++){var u=i(c);o[c]={offset:l,size:u},l+=u}"column"===e?n.lastMeasuredColumnIndex=r:n.lastMeasuredRowIndex=r}return o[r]},x=function(e,t,r,n){var o,i;return"column"===e?(o=r.columnMetadataMap,i=r.lastMeasuredColumnIndex):(o=r.rowMetadataMap,i=r.lastMeasuredRowIndex),(i>0?o[i].offset:0)>=n?C(e,t,r,i,0,n):b(e,t,r,Math.max(0,i),n)},C=function(e,t,r,n,o,i){for(;o<=n;){var a=o+Math.floor((n-o)/2),l=y(e,t,a,r).offset;if(l===i)return a;l<i?o=a+1:l>i&&(n=a-1)}return o>0?o-1:0},b=function(e,t,r,n,o){for(var i="column"===e?t.columnCount:t.rowCount,a=1;n<i&&y(e,t,n,r).offset<o;)n+=a,a*=2;return C(e,t,r,Math.min(n,i-1),Math.floor(n/2),o)},_=function(e,t,r,n,o,i,a){var l="column"===e?t.width:t.height,s=y(e,t,r,i),c="column"===e?M(t,i):I(t,i),u=Math.max(0,Math.min(c-l,s.offset)),d=Math.max(0,s.offset-l+a+s.size);switch("smart"===n&&(n=o>=d-l&&o<=u+l?"auto":"center"),n){case"start":return u;case"end":return d;case"center":return Math.round(d+(u-d)/2);case"auto":default:return o>=d&&o<=u?o:d>u?d:o<d?d:u}},R=w({getColumnOffset:function(e,t,r){return y("column",e,t,r).offset},getColumnStartIndexForOffset:function(e,t,r){return x("column",e,r,t)},getColumnStopIndexForStartIndex:function(e,t,r,n){for(var o=e.columnCount,i=e.width,a=y("column",e,t,n),l=r+i,s=a.offset+a.size,c=t;c<o-1&&s<l;)s+=y("column",e,++c,n).size;return c},getColumnWidth:function(e,t,r){return r.columnMetadataMap[t].size},getEstimatedTotalHeight:I,getEstimatedTotalWidth:M,getOffsetForColumnAndAlignment:function(e,t,r,n,o,i){return _("column",e,t,r,n,o,i)},getOffsetForRowAndAlignment:function(e,t,r,n,o,i){return _("row",e,t,r,n,o,i)},getRowOffset:function(e,t,r){return y("row",e,t,r).offset},getRowHeight:function(e,t,r){return r.rowMetadataMap[t].size},getRowStartIndexForOffset:function(e,t,r){return x("row",e,r,t)},getRowStopIndexForStartIndex:function(e,t,r,n){for(var o=e.rowCount,i=e.height,a=y("row",e,t,n),l=r+i,s=a.offset+a.size,c=t;c<o-1&&s<l;)s+=y("row",e,++c,n).size;return c},initInstanceProps:function(e,t){var r=e,n={columnMetadataMap:{},estimatedColumnWidth:r.estimatedColumnWidth||50,estimatedRowHeight:r.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return t.resetAfterColumnIndex=function(e,r){void 0===r&&(r=!0),t.resetAfterIndices({columnIndex:e,shouldForceUpdate:r})},t.resetAfterRowIndex=function(e,r){void 0===r&&(r=!0),t.resetAfterIndices({rowIndex:e,shouldForceUpdate:r})},t.resetAfterIndices=function(e){var r=e.columnIndex,o=e.rowIndex,i=e.shouldForceUpdate,a=void 0===i||i;"number"==typeof r&&(n.lastMeasuredColumnIndex=Math.min(n.lastMeasuredColumnIndex,r-1)),"number"==typeof o&&(n.lastMeasuredRowIndex=Math.min(n.lastMeasuredRowIndex,o-1)),t._getItemStyleCache(-1),a&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.columnWidth,r=e.rowHeight;if("function"!=typeof t)throw Error('An invalid "columnWidth" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.');if("function"!=typeof r)throw Error('An invalid "rowHeight" prop has been specified. Value should be a function. "'+(null===r?"null":typeof r)+'" was specified.')}}),T=150,z=function(e,t){return e},O=null,P=null;function W(e){var i,l,u=e.getItemOffset,d=e.getEstimatedTotalSize,h=e.getItemSize,p=e.getOffsetForIndexAndAlignment,m=e.getStartIndexForOffset,v=e.getStopIndexForStartIndex,g=e.initInstanceProps,w=e.shouldResetStyleCacheOnItemSizeChange,S=e.validateProps;return l=i=function(e){function i(t){var r;return(r=e.call(this,t)||this)._instanceProps=g(r.props,o(o(r))),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:o(o(r)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a(function(e,t,n,o){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:n,visibleStopIndex:o})}),r._callOnScroll=void 0,r._callOnScroll=a(function(e,t,n){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:n})}),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,n=r.props,o=n.direction,i=n.itemSize,a=n.layout,l=r._getItemStyleCache(w&&i,w&&a,w&&o);if(l.hasOwnProperty(e))t=l[e];else{var s=u(r.props,e,r._instanceProps),c=h(r.props,e,r._instanceProps),d="horizontal"===o||"horizontal"===a,f="rtl"===o,p=d?s:0;l[e]=t={position:"absolute",left:f?void 0:p,right:f?p:void 0,top:d?0:s,height:d?"100%":c,width:d?c:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=a(function(e,t,r){return{}}),r._onScrollHorizontal=function(e){var t=e.currentTarget,n=t.clientWidth,o=t.scrollLeft,i=t.scrollWidth;r.setState(function(e){if(e.scrollOffset===o)return null;var t=r.props.direction,a=o;if("rtl"===t)switch(f()){case"negative":a=-o;break;case"positive-descending":a=i-n-o}return a=Math.max(0,Math.min(a,i-n)),{isScrolling:!0,scrollDirection:e.scrollOffset<o?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,n=t.clientHeight,o=t.scrollHeight,i=t.scrollTop;r.setState(function(e){if(e.scrollOffset===i)return null;var t=Math.max(0,Math.min(i,o-n));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=c(r._resetIsScrolling,T)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1,null)})},r}n(i,e),i.getDerivedStateFromProps=function(e,t){return E(e,t),S(e),null};var l=i.prototype;return l.scrollTo=function(e){e=Math.max(0,e),this.setState(function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},l.scrollToItem=function(e,t){void 0===t&&(t="auto");var r=this.props.itemCount,n=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1)),this.scrollTo(p(this.props,e,t,n,this._instanceProps))},l.getRenderedItemRange=function(){return this._getRangeToRender()},l.componentDidMount=function(){var e=this.props,t=e.direction,r=e.initialScrollOffset,n=e.layout;if("number"==typeof r&&null!=this._outerRef){var o=this._outerRef;"horizontal"===t||"horizontal"===n?o.scrollLeft=r:o.scrollTop=r}this._callPropsCallbacks()},l.componentDidUpdate=function(){var e=this.props,t=e.direction,r=e.layout,n=this.state,o=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===t||"horizontal"===r)if("rtl"===t)switch(f()){case"negative":i.scrollLeft=-o;break;case"positive-ascending":i.scrollLeft=o;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-o}else i.scrollLeft=o;else i.scrollTop=o}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var e=this.props,n=e.children,o=e.className,i=e.direction,a=e.height,l=e.innerRef,s=e.innerElementType,c=e.innerTagName,u=e.itemCount,f=e.itemData,h=e.itemKey,p=void 0===h?z:h,m=e.layout,v=e.outerElementType,g=e.outerTagName,w=e.style,S=e.useIsScrolling,I=e.width,M=e.isSwipeDisabled,y=e.disableScrollBar,x=this.state.isScrolling,C="horizontal"===i||"horizontal"===m,b=C?this._onScrollHorizontal:this._onScrollVertical,_=this._getRangeToRender(),R=_[0],T=_[1],O=[];if(u>0)for(var P=R;P<=T;P++)O.push(t.createElement(n,{data:f,key:p(P,f),index:P,isScrolling:S?x:void 0,style:this._getItemStyle(P)}));var W=d(this.props,this._instanceProps),E=y?"disableScrollBar":"";return t.createElement(v||g||"div",{className:o?o+" "+E:E,onScroll:b,ref:this._outerRefSetter,style:r({position:"relative",height:a,width:I,overflow:"auto",overflowX:M?"hidden":"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},w)},t.createElement(s||c||"div",{children:O,ref:l,style:{height:C?"100%":W,pointerEvents:x?"none":void 0,width:C?W:"100%"}}))},l._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],r=e[1],n=e[2],o=e[3];this._callOnItemsRendered(t,r,n,o)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},l._getRangeToRender=function(){var e=this.props,t=e.itemCount,r=e.overscanCount,n=this.state,o=n.isScrolling,i=n.scrollDirection,a=n.scrollOffset;if(0===t)return[0,0,0,0];var l=m(this.props,a,this._instanceProps),s=v(this.props,l,a,this._instanceProps),c=o&&"backward"!==i?0:Math.max(0,r),u=o&&"forward"!==i?0:Math.max(0,r);return[Math.max(0,l-c),Math.max(0,Math.min(t-1,s+u)),l,s]},i}(t.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},l}"undefined"!=typeof window&&void 0!==window.WeakSet&&(O=new WeakSet,P=new WeakSet);var E=function(e,t){var r=e.children,n=e.direction,o=e.height,i=e.layout,a=e.innerTagName,l=e.outerTagName,s=e.width,c=t.instance;null==a&&null==l||P&&!P.has(c)&&(P.add(c),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var u="horizontal"===n||"horizontal"===i;switch(n){case"horizontal":case"vertical":O&&!O.has(c)&&(O.add(c),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+n+'" was specified.')}switch(i){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+i+'" was specified.')}if(null==r)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===r?"null":typeof r)+'" was specified.');if(u&&"number"!=typeof s)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===s?"null":typeof s)+'" was specified.');if(!u&&"number"!=typeof o)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===o?"null":typeof o)+'" was specified.')},A=function(e,t,r){var n=e.itemSize,o=r.itemMetadataMap,i=r.lastMeasuredIndex;if(t>i){var a=0;if(i>=0){var l=o[i];a=l.offset+l.size}for(var s=i+1;s<=t;s++){var c=n(s);o[s]={offset:a,size:c},a+=c}r.lastMeasuredIndex=t}return o[t]},k=function(e,t,r,n,o){for(;n<=r;){var i=n+Math.floor((r-n)/2),a=A(e,i,t).offset;if(a===o)return i;a<o?n=i+1:a>o&&(r=i-1)}return n>0?n-1:0},D=function(e,t,r,n){for(var o=e.itemCount,i=1;r<o&&A(e,r,t).offset<n;)r+=i,i*=2;return k(e,t,Math.min(r,o-1),Math.floor(r/2),n)},F=function(e,t){var r=e.itemCount,n=t.itemMetadataMap,o=t.estimatedItemSize,i=t.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=n[i];a=l.offset+l.size}return a+(r-i-1)*o},L=W({getItemOffset:function(e,t,r){return A(e,t,r).offset},getItemSize:function(e,t,r){return r.itemMetadataMap[t].size},getEstimatedTotalSize:F,getOffsetForIndexAndAlignment:function(e,t,r,n,o){var i=e.direction,a=e.height,l=e.layout,s=e.width,c="horizontal"===i||"horizontal"===l?s:a,u=A(e,t,o),d=F(e,o),f=Math.max(0,Math.min(d-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===r&&(r=n>=h-c&&n<=f+c?"auto":"center"),r){case"start":return f;case"end":return h;case"center":return Math.round(h+(f-h)/2);case"auto":default:return n>=h&&n<=f?n:n<h?h:f}},getStartIndexForOffset:function(e,t,r){return function(e,t,r){var n=t.itemMetadataMap,o=t.lastMeasuredIndex;return(o>0?n[o].offset:0)>=r?k(e,t,o,0,r):D(e,t,Math.max(0,o),r)}(e,r,t)},getStopIndexForStartIndex:function(e,t,r,n){for(var o=e.direction,i=e.height,a=e.itemCount,l=e.layout,s=e.width,c="horizontal"===o||"horizontal"===l?s:i,u=A(e,t,n),d=r+c,f=u.offset+u.size,h=t;h<a-1&&f<d;)f+=A(e,++h,n).size;return h},initInstanceProps:function(e,t){var r={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,n){void 0===n&&(n=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),n&&t.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.itemSize;if("function"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.')}}),H=w({getColumnOffset:function(e,t){return t*e.columnWidth},getColumnWidth:function(e,t){return e.columnWidth},getRowOffset:function(e,t){return t*e.rowHeight},getRowHeight:function(e,t){return e.rowHeight},getEstimatedTotalHeight:function(e){var t=e.rowCount;return e.rowHeight*t},getEstimatedTotalWidth:function(e){var t=e.columnCount;return e.columnWidth*t},getOffsetForColumnAndAlignment:function(e,t,r,n,o,i){var a=e.columnCount,l=e.columnWidth,s=e.width,c=Math.max(0,a*l-s),u=Math.min(c,t*l),d=Math.max(0,t*l-s+i+l);switch("smart"===r&&(r=n>=d-s&&n<=u+s?"auto":"center"),r){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(s/2)?0:f>c+Math.floor(s/2)?c:f;case"auto":default:return n>=d&&n<=u?n:d>u?d:n<d?d:u}},getOffsetForRowAndAlignment:function(e,t,r,n,o,i){var a=e.rowHeight,l=e.height,s=e.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,t*a),d=Math.max(0,t*a-l+i+a);switch("smart"===r&&(r=n>=d-l&&n<=u+l?"auto":"center"),r){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(l/2)?0:f>c+Math.floor(l/2)?c:f;case"auto":default:return n>=d&&n<=u?n:d>u?d:n<d?d:u}},getColumnStartIndexForOffset:function(e,t){var r=e.columnWidth,n=e.columnCount;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getColumnStopIndexForStartIndex:function(e,t,r){var n=e.columnWidth,o=e.columnCount,i=e.width,a=t*n,l=Math.ceil((i+r-a)/n);return Math.max(0,Math.min(o-1,t+l-1))},getRowStartIndexForOffset:function(e,t){var r=e.rowHeight,n=e.rowCount;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getRowStopIndexForStartIndex:function(e,t,r){var n=e.rowHeight,o=e.rowCount,i=e.height,a=t*n,l=Math.ceil((i+r-a)/n);return Math.max(0,Math.min(o-1,t+l-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.columnWidth,r=e.rowHeight;if("number"!=typeof t)throw Error('An invalid "columnWidth" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.');if("number"!=typeof r)throw Error('An invalid "rowHeight" prop has been specified. Value should be a number. "'+(null===r?"null":typeof r)+'" was specified.')}}),U=W({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,r,n){var o=e.direction,i=e.height,a=e.itemCount,l=e.itemSize,s=e.layout,c=e.width,u="horizontal"===o||"horizontal"===s?c:i,d=Math.max(0,a*l-u),f=Math.min(d,t*l),h=Math.max(0,t*l-u+l);switch("smart"===r&&(r=n>=h-u&&n<=f+u?"auto":"center"),r){case"start":return f;case"end":return h;case"center":var p=Math.round(h+(f-h)/2);return p<Math.ceil(u/2)?0:p>d+Math.floor(u/2)?d:p;case"auto":default:return n>=h&&n<=f?n:n<h?h:f}},getStartIndexForOffset:function(e,t){var r=e.itemCount,n=e.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/n)))},getStopIndexForStartIndex:function(e,t,r){var n=e.direction,o=e.height,i=e.itemCount,a=e.itemSize,l=e.layout,s=e.width,c=t*a,u="horizontal"===n||"horizontal"===l?s:o,d=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(i-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}});function V(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function q(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1}function N(e,t){var r=e.style,n=V(e,["style"]),o=t.style,i=V(t,["style"]);return!q(r,o)&&!q(n,i)}e.VariableSizeGrid=R,e.VariableSizeList=L,e.FixedSizeGrid=H,e.FixedSizeList=U,e.areEqual=N,e.shouldComponentUpdate=function(e,t){return!N(this.props,e)||q(this.state,t)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index-dev.umd.js.map
