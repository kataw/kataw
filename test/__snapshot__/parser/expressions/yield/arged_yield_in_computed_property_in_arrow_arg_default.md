# Kataw parser test case

## Input

`````js
{ (x = {[yield y]: 1}) => z }
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
                "rawText": "1",
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
                "text": "z",
                "rawText": "z",
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

```

### Diagnostics

```javascript
✖ Expected a computed property - start: 14, end: 16
✖ Property definition expected. Did you mean to use a ':'? - start: 14, end: 16
✖ Property definition expected. Did you mean to use a ':'? - start: 16, end: 17
✖ ',' expected - start: 16, end: 17
✖ Declaration or statement expected - start: 17, end: 18
✖ Declaration or statement expected - start: 20, end: 21
✖ Declaration or statement expected - start: 21, end: 22
✖ Declaration or statement expected - start: 22, end: 25
✖ Declaration or statement expected - start: 27, end: 29

```

