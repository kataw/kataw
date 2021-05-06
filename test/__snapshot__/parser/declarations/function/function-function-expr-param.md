# Kataw parser test case

## Input

`````js
function* foo(a = function* foo() { yield b }) {}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 17,
                                "end": 26
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 26,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 27,
                                "end": 31
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 31,
                                "end": 33
                            },
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
                                                    "flags": 0,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 43
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 45
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 288,
                            "start": 17,
                            "end": 45
                        },
                        "flags": 34,
                        "start": 14,
                        "end": 45
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 13,
                "end": 46
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 48,
                    "end": 48
                },
                "flags": 32,
                "start": 46,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function* foo(a = function* foo() { yield b }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
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

