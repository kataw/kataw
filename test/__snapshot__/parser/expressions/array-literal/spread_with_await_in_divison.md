# Kataw parser test case

## Input

`````js
[.../x//yield]
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
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 221,
                                    "text": "/x/",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 64,
                                    "start": 7,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "[.../x//yield]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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

