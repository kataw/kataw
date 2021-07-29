# Kataw parser test case

## Input

`````js
(new async (x)=>{})
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
                "kind": 121,
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 10
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 13
                    },
                    "flags": 96,
                    "transformFlags": 2048,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(new async (x)=>{})",
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
✖ Expected a ')' to match the '(' token here - start: 14, end: 16
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 0, end: 16
✖ Declaration or statement expected - start: 18, end: 19

```

