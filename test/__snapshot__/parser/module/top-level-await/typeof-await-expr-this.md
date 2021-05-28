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
                    "flags": 64,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "expression": {
                        "kind": 135,
                        "flags": 12,
                        "start": 96,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "typeof await this;",
    "fileName": "__root__",
    "flags": 0,
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

