# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
'use strict'; var asyncArrow = async(...await) => {};
`````

## Output

### CST

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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 96,
                            "start": 17,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 46,
                                "end": 49
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 0,
                                        "start": 37,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 45
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 30,
                                "end": 36
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 49,
                                "end": 52
                            },
                            "flags": 290,
                            "start": 30,
                            "end": 52
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 52
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 52
            },
            "flags": 16,
            "start": 13,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncArrow = async(...await) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

var asyncArrow = async (...) => {};
```

### Diagnostics

```javascript
✔ No errors
```

