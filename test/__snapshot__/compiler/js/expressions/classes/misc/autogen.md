# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> ;
> `````

> `````js
> ;;
> `````

> `````js
> ; m() {}
> `````

> `````js
> set x(v) {}
> `````

> `````js
> *g() {}
> `````

> `````js
> *g() {};
> `````

> `````js
> ; *g() {}
> `````

> `````js
> static() {}
> `````

> `````js
> get static() {}
> `````

> `````js
> set static(v) {}
> `````

> `````js
> static get x() {}
> `````

> `````js
> static get() {}
> `````

> `````js
> static set() {}
> `````

> `````js
> static static() {}
> `````

> `````js
> *set() {}
> `````

> `````js
> static *static() {}
> `````

> `````js
> static *g() {}
> `````

> `````js
> *async(){}
> `````

> `````js
> static async(){}
> `````

> `````js
> static *async(){}
> `````

// Escaped 'static' should be allowed anywhere
// static-as-PropertyName is.

> `````js
> st\\u0061tic() {}
> `````

> `````js
> get st\\u0061tic() {}
> `````

> `````js
> get st\\u0061tic() {}
> `````

> `````js
> static st\\u0061tic() {}
> `````

> `````js
> *st\\u0061tic() {}
> `````

> `````js
> async x(){}
> `````

> `````js
> async async(){}
> `````

> `````js
> async(){}
> `````

> `````js
> *async(){}
> `````

### Templates

#### class-expr

`````js
(class { # });
`````

#### class-expr-extends

`````js
(class extends Base {#});
`````

#### class-decl-extends

`````js
class C extends Base { # }
`````
