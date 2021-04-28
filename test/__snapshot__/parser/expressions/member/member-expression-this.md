# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
this.#x
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
                "kind": 129,
                "member": {
                    "kind": 135,
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "expression": {
                    "kind": 67109115,
                    "text": "#x",
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "this.#x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 5, end: 7

```

