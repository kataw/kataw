# Kataw parser test case

## Input

`````js
[a, {b:d}, c] = obj
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 5,
                                            "end": 8
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 3,
                                "end": 9
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 19
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "[a, {b:d}, c] = obj",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
[a, { b: d }, c] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

