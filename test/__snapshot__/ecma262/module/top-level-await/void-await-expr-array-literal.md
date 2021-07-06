# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
void await [];
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
                    "kind": 138477615,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "operand": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 10
                    },
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 10,
                        "end": 13
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
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": true,
    "source": "void await [];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

void await [];
```

### Diagnostics

```javascript
✔ No errors
```

