# Kataw parser test case

## Input

`````js
 { (() => {})().#x }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
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
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "typeParameters": null,
                                        "parameters": [],
                                        "asyncToken": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 11,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 13
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 15
                            },
                            "expression": {
                                "kind": 67174651,
                                "text": "#x",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 2,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 2,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": " { (() => {})().#x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 16, end: 18

```

