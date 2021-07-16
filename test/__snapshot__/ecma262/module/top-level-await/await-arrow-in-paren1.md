# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await (async () => {})()
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
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 12
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 18
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 21
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 21
                        },
                        "flags": 5,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 22
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 5,
                    "end": 24
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "source": "await (async () => {})()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
await (async () => {})();
```

### Diagnostics

```javascript
✔ No errors
```

