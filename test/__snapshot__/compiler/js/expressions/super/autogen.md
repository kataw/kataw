# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> class C { constructor() { super(); } }
> `````

> `````js
> class C { method() { super(); } }
> `````

> `````js
> class C { method() { () => super(); } }
> `````

> `````js
> class C { *method() { super(); } }
> `````

> `````js
> class C { get x() { super(); } }
> `````

> `````js
> class C { set x(_) { super(); } }
> `````

> `````js
> ({ method() { super(); } })
> `````

> `````js
> ({ set x(_) { super(); } })
> `````

> `````js
> ({ f: function() { super(); } })
> `````

> `````js
> var f = function() { super(); }
> `````

> `````js
> ({ f: function*() { super(); } })
> `````

> `````js
> (function*() { super(); })
> `````

> `````js
> var f = function*() { super(); }
> `````

> `````js
> new super;
> `````

> `````js
> new super();
> `````

> `````js
> super;
> `````

> `````js
> y = super
> `````

> `````js
> class C { get x) { super; } }
> `````

> `````js
> class C { set x(_) { super(
> `````

> `````js
> ({ method() { super();
> `````

> `````js
> ({ set x(_) { super(; }
> `````

> `````js
> ({ f: function({ super();  })
> `````

> `````js
> var f = function { super(); }
> `````

> `````js
> ({ f: function* { super(); } })
> `````

> `````js
> (function*() { super(); )
> `````


### Templates

#### class-constructor

`````js
class C { constructor() { # } }
`````

#### class-gen

`````js
class C { *method() { # } }
`````

#### class-set

`````js
class C { set x(_) { # } }
`````

#### obj-method

`````js
({ method() { # } })
`````

#### obj-expr-method-gen

`````js
({ *method() { # } })
`````

#### obj-expr-get

`````js
({ get x() { # } })
`````

#### obj-expr-set

`````js
({ set x(_) { # } })
`````
