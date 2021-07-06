# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
function F<T>() {
  var expr: T;
  for (var a in expr) {
  }
}
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
                "text": "F",
                "rawText": "F",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 12
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 10,
                "end": 13
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 23
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "expr",
                                            "rawText": "expr",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 31
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 23,
                                        "end": 31
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 31
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 32
                        },
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 38
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 43
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 43,
                                            "end": 45
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 45
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 48
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 48
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "expr",
                                "rawText": "expr",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 53
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 56
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 60
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 60
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 60
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 62
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": true,
    "source": "function F<T>() {\n  var expr: T;\n  for (var a in expr) {\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
function F<T>() {
  var expr: T;
  for (var a in expr) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

