# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> async
> `````

> `````js
> await
> `````

> `````js
> break
> `````

> `````js
> function
> `````

> `````js
> yield
> `````

> `````js
> static
> `````

> `````js
> instanceof
> `````

> `````js
> in
> `````

> `````js
> protected
> `````

> `````js
> class
> `````

> `````js
> continue
> `````

> `````js
> 1e+1
> `````

> `````js
> 1e-1
> `````

> `````js
> 1E1
> `````

> `````js
> 1n
> `````

> `````js
> false
> `````

> `````js
> "m n"
> `````

> `````js
> 'm'
> `````

> `````js
> 1.2
> `````

> `````js
> 0
> `````

> `````js
> do
> `````

### Templates

#### mehod

`````js
({#(x, y) {}});
`````

#### method-gen

`````js
({*#(x, y) {}});
`````

#### prologue-method-gen

`````js
'use strict'; ({*#(x, y) {}});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 4,
                                                    "end": 5
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 4,
                                                "end": 5
                                            },
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 6,
                                                    "end": 8
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 6,
                                                "end": 8
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 11,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 3,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "({#(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 2, end: 3
✖ Private identifiers are not allowed outside class_bodies - start: 2, end: 3

```

