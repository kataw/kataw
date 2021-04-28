# Kataw parser test case

## Input

`````js
(foo, [bar, baz] = doo);
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 10
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 16,
                                "start": 512,
                                "end": 18
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "doo",
                                "rawText": "doo",
                                "flags": 768,
                                "start": 18,
                                "end": 22
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 22
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "(foo, [bar, baz] = doo);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

