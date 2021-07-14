# Kataw parser test case

## Input

`````js
async (a=/i/) = /i/
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
                    "transformFlags": 0,
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "right": {
                                "kind": 371,
                                "text": "/i/",
                                "rawText": "/i/",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 7,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 268435490,
                "transformFlags": 1,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/i/",
                "rawText": "/i/",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "async (a=/i/) = /i/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 13, end: 15

```

