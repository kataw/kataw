# Kataw parser test case

## Input

`````js
x: for(;;) break x
/y/d
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
                    "kind": 150,
                    "breakKeyword": {
                        "kind": 37757005,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 16
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 18
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 21
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 18,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 23
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 18,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "x: for(;;) break x\n/y/d",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 18, end: 20

```

