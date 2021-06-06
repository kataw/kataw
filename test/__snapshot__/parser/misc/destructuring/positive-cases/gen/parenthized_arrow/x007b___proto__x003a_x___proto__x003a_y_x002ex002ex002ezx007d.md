# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/misc/destructuring/positive-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\positive-cases\gen\parenthized_arrow
> :: test: parenthized arrow
> :: case: { __proto__: x, __proto__: y, ...z}
## Input

`````js
var f = ({ __proto__: x, __proto__: y, ...z}) => {};
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 45,
                                "end": 48
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 204,
                                                "ellipsisToken": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 20
                                                },
                                                "value": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 23
                                            },
                                            {
                                                "kind": 204,
                                                "ellipsisToken": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 34
                                                },
                                                "value": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 24,
                                                "end": 37
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 42,
                                                    "end": 43
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 32,
                                                "start": 38,
                                                "end": 43
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 44
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 50,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 48,
                                "end": 51
                            },
                            "flags": 34,
                            "start": 7,
                            "end": 51
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "var f = ({ __proto__: x, __proto__: y, ...z}) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 44, end: 45

```

