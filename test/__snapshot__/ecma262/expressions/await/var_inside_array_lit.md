# Kataw parser test case

## Input

`````js
{ (x = [await]) }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 4,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ (x = [await]) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

{
  (x = [await,]);
}

```

### Diagnostics

```javascript
✔ No errors
```

