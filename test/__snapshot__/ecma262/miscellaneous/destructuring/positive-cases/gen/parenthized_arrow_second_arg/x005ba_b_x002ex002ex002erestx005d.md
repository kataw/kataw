# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/positive-cases/gen/parenthized_arrow_second_arg
> :: test: parenthized arrow second arg
> :: case: [a,b,...rest]
## Options

`````js
{}
`````
## Input

`````js
var f = (argument1,[a,b,...rest]) => {};
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 18
                                    },
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 23
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 27
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "rest",
                                                        "rawText": "rest",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 27,
                                                        "end": 31
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "transformFlags": 0,
                                                    "start": 24,
                                                    "end": 31
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 33
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 36
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 39
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 39
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 39
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "var f = (argument1,[a,b,...rest]) => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
var f = (argument1, [a, b, ...rest]) => {};
```

### Diagnostics

```javascript
✔ No errors
```

