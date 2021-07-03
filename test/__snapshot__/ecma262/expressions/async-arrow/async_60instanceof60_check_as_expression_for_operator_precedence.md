# Kataw parser test case

## Input

`````js
f(a + async instanceof b)
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
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 2,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "flags": 96,
                                    "start": 11,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 96,
                                "start": 11,
                                "end": 24
                            },
                            "flags": 96,
                            "start": 2,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 24
                },
                "flags": 268435488,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "f(a + async instanceof b)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

f(a + async instanceof b);

```

### Diagnostics

```javascript
✔ No errors
```

