# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/parenthized_arrow
> :: test: parenthized arrow
> :: case: {arguments: x, ...z}
## Options

`````js
{}
`````
## Input

`````js
var f = ({arguments: x, ...z}) => {};
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
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "arguments",
                                                        "rawText": "arguments",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 19
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 22
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 23,
                                                        "end": 27
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 27,
                                                        "end": 28
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "start": 23,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 28
                                        },
                                        "flags": 48,
                                        "start": 9,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2,
                                "start": 9,
                                "end": 30
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 30,
                                "end": 33
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 34,
                            "start": 7,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "var f = ({arguments: x, ...z}) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

var f = ({
    arguments: x,
    ...z
  }) => {};

```

### Diagnostics

```javascript
✔ No errors
```

