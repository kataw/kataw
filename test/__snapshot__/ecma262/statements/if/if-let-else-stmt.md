# Kataw parser test case

## Input

`````js
if (true) let x; else ;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 9,
                "end": 13
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "if (true) let x; else ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 13, end: 15
✖ Declaration or statement expected - start: 16, end: 21

```

