# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import.meta++;
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
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 11,
                    "end": 13
                },
                "operand": {
                    "kind": 207,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 80,
                        "start": 0,
                        "end": 6
                    },
                    "metaIdentifier": {
                        "kind": 16595,
                        "flags": 96,
                        "start": 7,
                        "end": 11
                    },
                    "flags": 6,
                    "start": 96,
                    "end": 11
                },
                "flags": 32,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "start": 6,
            "end": 14
        }
    ],
    "isModule": true,
    "source": "import.meta++;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 11, end: 13

```

