# Kataw parser test case

## Input

`````js
for ([][y] <<= p;;) x;
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
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 536870944,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4126,
                    "flags": 96,
                    "start": 10,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "text": "p",
                    "rawText": "p",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 0,
                "start": 0,
                "end": 16
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 16,
                "start": 19,
                "end": 22
            },
            "flags": 80,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for ([][y] <<= p;;) x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for ([][y] <<= p; ; )
  x;
```

### Diagnostics

```javascript
✔ No errors
```

