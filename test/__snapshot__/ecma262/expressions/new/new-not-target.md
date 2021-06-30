# Kataw parser test case

## Input

`````js
new.meta
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
                "kind": 211,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "targetIdentifier": null,
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "meta",
                "rawText": "meta",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "flags": 16,
            "start": 4,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "new.meta",
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
✖ The only valid meta property for new is 'new.target - start: 0, end: 8
✖ Expected a `;` - start: 4, end: 8

```

