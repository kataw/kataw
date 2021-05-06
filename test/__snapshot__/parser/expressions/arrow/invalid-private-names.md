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
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 3,
                                "end": 6
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 135,
                                "flags": 96,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 12
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 14
                },
                "expression": {
                    "kind": 67174651,
                    "text": "#x",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(() => this)().#x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 15, end: 17

```

