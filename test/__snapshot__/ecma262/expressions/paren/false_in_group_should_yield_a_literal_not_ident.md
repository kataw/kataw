# Kataw parser test case

## Input

`````js
(false);

(false, true);
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
                    "kind": 205586437,
                    "flags": 96,
                    "start": 1,
                    "end": 6
                },
                "flags": 0,
                "start": 32,
                "end": 7
            },
            "flags": 16,
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
                            "kind": 205586437,
                            "flags": 96,
                            "start": 11,
                            "end": 16
                        },
                        {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 17,
                            "end": 22
                        }
                    ],
                    "flags": 32,
                    "start": 8,
                    "end": 22
                },
                "flags": 8,
                "start": 33,
                "end": 23
            },
            "flags": 16,
            "start": 8,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "(false);\n\n(false, true);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

(false);
(false, true);

```

### Diagnostics

```javascript
✔ No errors
```

