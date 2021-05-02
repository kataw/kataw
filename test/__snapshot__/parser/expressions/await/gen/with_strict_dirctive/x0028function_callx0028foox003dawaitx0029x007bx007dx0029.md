# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (function call(foo=await){})
## Input

`````js
'use strict'; (function call(foo=await){})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 15,
                        "end": 23
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "call",
                        "rawText": "call",
                        "flags": 96,
                        "start": 23,
                        "end": 28
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 32
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 38
                                },
                                "flags": 34,
                                "start": 29,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 28,
                        "end": 39
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 39,
                        "end": 41
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 15,
                    "end": 41
                },
                "flags": 32,
                "start": 13,
                "end": 42
            },
            "flags": 16,
            "start": 13,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "'use strict'; (function call(foo=await){})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

