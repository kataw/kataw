# Kataw parser test case

## Input

`````js
for (x = y in z) ;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "transformFlags": 8192,
                        "start": 10,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 15
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for (x = y in z) ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 16

```

