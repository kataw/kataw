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

### Hybrid CST

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
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "expression": {
                    "kind": 207,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 768,
                        "start": 0,
                        "end": 6
                    },
                    "flags": 768,
                    "start": 6,
                    "end": 11
                },
                "flags": 256,
                "start": 6,
                "end": 13
            },
            "flags": 128,
            "start": 6,
            "end": 14
        }
    ],
    "isModule": true,
    "text": "import.meta++;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The operand of an increment or decrement operator must be a variable or a property access - start: 11, end: 13

```

