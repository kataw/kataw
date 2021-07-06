# Kataw parser test case

## Input

`````js
(() => this)().#x
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
                "kind": 129,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 121,
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
                                "start": 2,
                                "end": 2
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 6
                            },
                            "contents": {
                                "kind": 4276321,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 12
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 14
                },
                "expression": {
                    "kind": 67191035,
                    "text": "#x",
                    "rawText": "#x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "flags": 268435488,
                "transformFlags": 2,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(() => this)().#x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 15, end: 17

```

