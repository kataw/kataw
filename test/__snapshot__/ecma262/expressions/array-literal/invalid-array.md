# Kataw parser test case

## Input

`````js
[

  ;

]!
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 10
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "[\n\n  ;\n\n]!",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 5, end: 6
✖ Declaration or statement expected - start: 6, end: 9
✖ Identifier expected - start: 10, end: 10

```

