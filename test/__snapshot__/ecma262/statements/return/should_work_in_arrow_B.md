# Kataw parser test case

## Input

`````js
x => {return}
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 4
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 12
                                },
                                "expression": null,
                                "flags": 80,
                                "transformFlags": 256,
                                "start": 6,
                                "end": 12
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 13
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "x => {return}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
x => {
  return;
};
```

### Diagnostics

```javascript
✔ No errors
```

