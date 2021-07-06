# Kataw parser test case

## Input

`````js
x: for(;;) continue x
/y
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 1,
                "end": 2
            },
            "statement": {
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 6
                },
                "initializer": null,
                "condition": null,
                "incrementor": null,
                "statement": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 19
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 21
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 97,
                    "transformFlags": 32,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 24
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 21,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "x: for(;;) continue x\n/y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 23

```

