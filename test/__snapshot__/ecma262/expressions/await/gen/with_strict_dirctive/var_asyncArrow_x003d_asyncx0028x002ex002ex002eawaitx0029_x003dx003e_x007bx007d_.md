# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(...await) => {};
## Options

`````js
{}
`````
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
                "flags": 80,
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
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 30,
                                "end": 36
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 37,
                                            "end": 40
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "start": 37,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 37,
                                "end": 46
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 46,
                                "end": 49
                            },
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

var asyncArrow = async  =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

