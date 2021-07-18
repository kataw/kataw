# Kataw parser test case

## Input

`````js
function f(){ x({[new.target]:y}) }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 211,
                                                                "newKeyword": {
                                                                    "kind": 138477661,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 18,
                                                                    "end": 21
                                                                },
                                                                "targetIdentifier": {
                                                                    "kind": 16594,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 18,
                                                                    "end": 28
                                                                },
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 18,
                                                                "end": 28
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 29
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 31
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 17,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 31
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 16,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 32
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 13,
                                "end": 33
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 13,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 35
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function f(){ x({[new.target]:y}) }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
function f() {
  x({ [new.target]: y });
}
```

### Diagnostics

```javascript
✔ No errors
```

