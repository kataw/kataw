# Kataw parser test case

## Input

`````js
function f2() { yield /=2 /d }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 21
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 15,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 28
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 30
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "function f2() { yield /=2 /d }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

function f2() {
  yield /= 2 / d;
}
```

### Diagnostics

```javascript
✔ No errors
```

