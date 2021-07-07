# Kataw parser test case

## Input

`````js
async (x = (yield x))
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [],
                                    "flags": 32,
                                    "start": 10,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 17
                        },
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 0,
                    "end": 0
                },
                "flags": 268435490,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "async (x = (yield x))",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 18, end: 19
✖ Expected a `;` - start: 20, end: 21

```

