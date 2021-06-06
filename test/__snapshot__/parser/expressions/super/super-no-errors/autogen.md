# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> super = x
> `````

> `````js
> y = super
> `````

> `````js
> f(super)
> `````

> `````js
> new super
> `````

> `````js
> new super()
> `````

> `````js
> new super(12, 45)
> `````

> `````js
> new new super
> `````

> `````js
> new new super()
> `````

> `````js
> new new super()()
> `````

### Templates

#### class-method body

`````js
class C { m() { #; }
`````

#### class-method body assignment

`````js
class C { m() { k = #; } }
`````

#### class-method

`````js
class C { m() { foo(#); } }
`````
