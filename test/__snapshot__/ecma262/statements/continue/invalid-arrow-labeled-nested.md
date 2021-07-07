# Kataw parser test case

## Input

`````js
() => {    if (x) continue y   }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 164,
                                "ifKeyword": {
                                    "kind": 37757019,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 13
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "consequent": {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 26
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 28
                                },
                                "elseKeyword": null,
                                "alternate": null,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 28
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 28
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 32
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "() => {    if (x) continue y   }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 17, end: 26
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 17, end: 32

```

