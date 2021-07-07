# Kataw parser test case

## Input

`````js
this.#b();
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
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    },
                    "expression": {
                        "kind": 67191035,
                        "text": "#b",
                        "rawText": "#b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 7
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "this.#b();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 5, end: 7

```

