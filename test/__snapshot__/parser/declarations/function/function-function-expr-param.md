# Kataw parser test case

## Input

`````js
function* foo(a = function* foo() { yield b }) {}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
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
                            "flags": 768,
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
                                "flags": 768,
                                "start": 17,
                                "end": 26
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 26,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 27,
                                "end": 31
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "flags": 256,
                                                "start": 35,
                                                "end": 43
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 43
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 43
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 45
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 17,
                            "end": 45
                        },
                        "flags": 258,
                        "start": 14,
                        "end": 45
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 13,
                "end": 46
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 48,
                    "end": 48
                },
                "flags": 256,
                "start": 46,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "function* foo(a = function* foo() { yield b }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

