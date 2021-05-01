# Kataw parser test case

## Input

`````js
{ (x = {[yield y]: 1}) => z }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 1,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "original": "1",
                "rawText": " 1",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 18,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "z",
                "text": "z",
                "rawText": " z",
                "flags": 96,
                "start": 25,
                "end": 27
            },
            "flags": 16,
            "start": 25,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ (x = {[yield y]: 1}) => z }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 14, end: 16
✖ ',' expected - start: 16, end: 17
✖ Expected a `;` - start: 16, end: 17
✖ Statement expected - start: 16, end: 17
✖ Statement expected - start: 17, end: 18
✖ Statement expected - start: 20, end: 21
✖ Statement expected - start: 21, end: 22
✖ Statement expected - start: 22, end: 25
✖ Statement expected - start: 27, end: 29

```

