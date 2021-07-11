# Kataw parser test case

## Input

`````js
async ([(a) = [] ] = []);
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 9,
                                                    "end": 10
                                                },
                                                "flags": 32,
                                                "start": 8,
                                                "end": 11
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "right": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 15,
                                                    "end": 15
                                                },
                                                "flags": 32,
                                                "start": 13,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "start": 8,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 8,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 18
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 22,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 0,
                    "end": 0
                },
                "flags": 268435490,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "async ([(a) = [] ] = []);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

async( [ (a) = [], ] = [] );

```

### Diagnostics

```javascript
✔ No errors
```

