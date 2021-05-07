# Kataw parser test case

## Input

`````js
(,);
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 1,
                            "end": 1
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 2,
                            "end": 2
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "(,);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript

(, );
```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 2
✖ Expression expected - start: 2, end: 3

```

