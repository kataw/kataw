# Kataw parser test case

## Input

`````js
typeof class {};
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
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 96,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 12,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "typeof class {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
typeof class {};
```

### Diagnostics

```javascript
✔ No errors
```

