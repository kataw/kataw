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
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 371,
                                    "text": "/x/",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 7,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 4,
                                "end": 13
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 13
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "[.../x//yield]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
[.../x/ / yield];
```

### Diagnostics

```javascript
✔ No errors
```

