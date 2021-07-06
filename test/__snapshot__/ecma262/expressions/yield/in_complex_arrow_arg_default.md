# Kataw parser test case

## Input

`````js
{ (x = u + yield z) => {}; }
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
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 16
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 16
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{ (x = u + yield z) => {}; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 17, end: 18
✖ Expected a `;` - start: 18, end: 19
✖ Declaration or statement expected - start: 19, end: 22
✖ Declaration or statement expected - start: 26, end: 28

```

