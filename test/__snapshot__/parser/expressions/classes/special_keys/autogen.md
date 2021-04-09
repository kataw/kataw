# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> break
> `````

> `````js
> case
> `````

> `````js
> catch
> `````

> `````js
> class
> `````

> `````js
> const
> `````

> `````js
> continue
> `````

> `````js
> debugger
> `````

> `````js
> default
> `````

> `````js
> delete
> `````

> `````js
> do
> `````

> `````js
> else
> `````

> `````js
> export
> `````

> `````js
> extends
> `````

> `````js
> finally
> `````

> `````js
> for
> `````

> `````js
> function
> `````

> `````js
> if
> `````

> `````js
> import
> `````

> `````js
> in
> `````

> `````js
> instanceof
> `````

> `````js
> new
> `````

> `````js
> return
> `````

> `````js
> super
> `````

> `````js
> switch
> `````

> `````js
> this
> `````

> `````js
> throw
> `````

> `````js
> try
> `````

> `````js
> typeof
> `````

> `````js
> var
> `````

> `````js
> void
> `````

> `````js
> while
> `````

> `````js
> with
> `````

> `````js
> null
> `````

> `````js
> true
> `````

> `````js
> false
> `````

> `````js
> enum
> `````

> `````js
> eval
> `````

> `````js
> arguments
> `````

> `````js
> implements
> `````

> `````js
> package
> `````

> `````js
> protected
> `````

> `````js
> interface
> `````

> `````js
> private
> `````

> `````js
> public
> `````

> `````js
> await
> `````

> `````js
> yield
> `````

> `````js
> let
> `````

Syntax Error if this phrase is contained in strict mode code and the StringValue of IdentifierName

> `````js
> static
> `````

Syntax Error if this phrase is contained in strict mode code and the StringValue of IdentifierName

> `````js
> async
> `````

> `````js
> get
> `````

> `````js
> set
> `````

### Templates

#### as class name

`````js
class # {}
`````

#### as super class name

`````js
class x extends # {}
`````

#### as regular property in class

we will have to revisit this with class properties later

`````js
class x {#: x}
`````

#### as method in class

`````js
class x {#(){}}
`````

#### as static method in class

`````js
class x {static #(){}}
`````

#### as generator in class

`````js
class x {* #(){}}
`````

#### as getter in class

`````js
class x {get #(){}}
`````

#### as setter in class

`````js
class x {set #(x){}}
`````

#### as async method in class

`````js
class x {async #(){}}
`````

#### as async generator in class

`````js
class x {async * #(){}}
`````

#### as static getter in class

`````js
class x {static get #(){}}
`````

#### as static generator in class

`````js
class x {static * #(){}}
`````

#### as static setter in class

`````js
class x {static set #(x){}}
`````

#### as static async method in class

`````js
class x {static async #(){}}
`````

#### as static async generator in class

`````js
class x {static async * #(){}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "#",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 9,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "class # {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 7
        }
    ],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

