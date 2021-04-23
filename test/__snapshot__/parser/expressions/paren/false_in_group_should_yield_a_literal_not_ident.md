# Kataw parser test case

## Input

`````js
(false);

(false, true);
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
                "kind": 121,
                "expression": {
                    "kind": 134,
                    "text": false,
                    "flags": 768,
                    "start": 1,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134,
                            "text": false,
                            "flags": 768,
                            "start": 11,
                            "end": 16
                        },
                        {
                            "kind": 134,
                            "text": true,
                            "flags": 768,
                            "start": 17,
                            "end": 22
                        }
                    ],
                    "flags": 256,
                    "start": 8,
                    "end": 22
                },
                "flags": 256,
                "start": 8,
                "end": 23
            },
            "flags": 128,
            "start": 8,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "(false);\n\n(false, true);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

