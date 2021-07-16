# Kataw parser test case

## Input

`````js
 { (() => {})().#x }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                            "start": 5,
                                            "end": 5
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 12
                                    },
                                    "flags": 2,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 13
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 2,
                                "end": 15
                            },
                            "expression": {
                                "kind": 67191035,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 2,
                            "end": 18
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 2,
                        "end": 18
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": " { (() => {})().#x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 16, end: 18

```

