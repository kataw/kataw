# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/positive-cases/gen/parenthized_arrow_second_arg
> :: test: parenthized arrow second arg
> :: case: {arguments: x, ...z}
## Options

`````js
{}
`````
## Input

`````js
var f = (argument1,{arguments: x, ...z}) => {};
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
                                        "kind": 134299649,
                                        "text": "argument1",
                                        "rawText": "argument1",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 18
                                    },
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
                                                        "start": 20,
                                                        "end": 29
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 30,
                                                        "end": 32
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 20,
                                                    "end": 32
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 33,
                                                        "end": 37
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "start": 37,
                                                        "end": 38
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "start": 33,
                                                    "end": 38
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 20,
                                            "end": 38
                                        },
                                        "flags": 48,
                                        "start": 19,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2,
                                "start": 9,
                                "end": 40
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 40,
                                "end": 43
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 46
                            },
                            "flags": 34,
                            "start": 7,
                            "end": 46
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 46
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "var f = (argument1,{arguments: x, ...z}) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

  var f = (argument1, {
      arguments: x,
      ...z
    }) => {};

```

### Diagnostics

```javascript
✔ No errors
```

