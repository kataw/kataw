# Kataw parser test case

## Input

`````js
(x=(await z)=y)
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
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "flags": 16,
            "start": 9,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 13,
                "end": 14
            },
            "flags": 16,
            "start": 13,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(x=(await z)=y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

();
z;
y;
```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 9, end: 11
✖ Expected a `;` - start: 11, end: 12
✖ Declaration or statement expected - start: 12, end: 13
✖ Expected a `;` - start: 14, end: 15

```

