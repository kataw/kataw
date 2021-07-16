# Kataw parser test case

## Input

`````js
(--this.x)
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
                "kind": 121,
                "expression": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 3
                    },
                    "operand": {
                        "kind": 129,
                        "member": {
                            "kind": 4276321,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 1,
                    "end": 9
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(--this.x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
(-- this.x);
```

### Diagnostics

```javascript
✔ No errors
```

