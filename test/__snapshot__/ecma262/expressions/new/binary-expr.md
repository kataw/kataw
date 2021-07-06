# Kataw parser test case

## Input

`````js
new x<number>(y)
`````

## Options

`````js
{ allowTypes : true }
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "argumentList": null,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 6
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 13
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    },
                    "flags": 13,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 16
                },
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "new x<number>(y)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

new x  < number > (y);
```

### Diagnostics

```javascript
✔ No errors
```

