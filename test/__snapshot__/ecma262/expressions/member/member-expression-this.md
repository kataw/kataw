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
                    "kind": 67191035,
                    "text": "#x",
                    "rawText": "#x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "this.#x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 5, end: 7

```

