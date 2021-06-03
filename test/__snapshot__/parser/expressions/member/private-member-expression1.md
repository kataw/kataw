# Kataw parser test case

## Input

`````js
this.#a;
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
                "kind": 129,
                "member": {
                    "kind": 4276321,
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "expression": {
                    "kind": 67174651,
                    "text": "#a",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 536870944,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "this.#a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 5, end: 7

```

