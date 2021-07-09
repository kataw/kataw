# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: var asyncArrow = async(...await) => {};
## Options

`````js
{}
`````
## Input

`````js
var asyncArrow = async(...await) => {};
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
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 14
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 22
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
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 4096,
                                        "start": 23,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 32
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 38
                            },
                            "flags": 290,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 38
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 38
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "var asyncArrow = async(...await) => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
var asyncArrow = async (...await) => {};
```

### Diagnostics

```javascript
✔ No errors
```

