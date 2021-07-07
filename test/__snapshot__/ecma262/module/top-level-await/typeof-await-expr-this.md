# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
typeof await this;
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "expression": {
                        "kind": 4276321,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 4096,
                    "start": 6,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "typeof await this;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
typeof await this;
```

### Diagnostics

```javascript
✔ No errors
```

