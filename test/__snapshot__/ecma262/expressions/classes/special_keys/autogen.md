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
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174651,
                "text": "#",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "start": 5,
            "end": 7
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 9,
                "end": 9
            },
            "flags": 16,
            "start": 7,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "class # {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 5, end: 7
✖ Binding identifier expected - start: 5, end: 7
✖ Private identifiers are not allowed outside class_bodies - start: 5, end: 7
✖ Expected a `;` - start: 7, end: 9

```

