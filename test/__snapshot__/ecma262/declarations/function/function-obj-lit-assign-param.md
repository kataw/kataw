# Kataw parser test case

## Input

`````js
function* foo(a = {*bar() { yield b }}) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 27,
                                                                    "end": 33
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 33,
                                                                    "end": 35
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 27,
                                                                "end": 35
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 27,
                                                            "end": 35
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 35
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 37
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 37
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 17,
                            "end": 38
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 14,
                        "end": 38
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 14,
                "end": 38
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 39,
                "end": 42
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function* foo(a = {*bar() { yield b }}) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
function *foo(a = { *bar() {
    yield b;
  } }) {}
```

### Diagnostics

```javascript
✔ No errors
```

