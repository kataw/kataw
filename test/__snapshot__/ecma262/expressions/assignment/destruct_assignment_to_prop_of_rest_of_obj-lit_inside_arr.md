# Kataw parser test case

## Input

`````js
[...[{a: b}.c]] = [];
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
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 6,
                                                                    "end": 7
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 8,
                                                                    "end": 10
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 6,
                                                                "end": 10
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 6,
                                                        "end": 10
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "flags": 48,
                                                "transformFlags": 2,
                                                "start": 5,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 4,
                                    "end": 14
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 17,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "[...[{a: b}.c]] = [];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
[...[{ a: b }.c]] = [];
```

### Diagnostics

```javascript
✔ No errors
```

