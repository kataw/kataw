# Kataw parser test case

## Input

`````js
{ (() => this)().#x }
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
                                            "start": 4,
                                            "end": 4
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "contents": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 13
                                    },
                                    "flags": 1,
                                    "start": 32,
                                    "end": 14
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 268435488,
                                "start": 1,
                                "end": 16
                            },
                            "expression": {
                                "kind": 67191035,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 268435488,
                            "start": 1,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "{ (() => this)().#x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 17, end: 19

```

