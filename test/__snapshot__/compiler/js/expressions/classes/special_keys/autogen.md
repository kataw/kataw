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
    "kind": 196,
    "source": "class # {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "#",
                    "rawText": "class",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 10
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 10
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 10
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 7,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Private identifiers are not allowed outside class bodies",
            "start": 6,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

