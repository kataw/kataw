# Kataw parser test case

## Input

`````js
a : { b : 1 }/2/;
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 1,
                "end": 3
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 5,
                                "end": 7
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 7,
                                "end": 9
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 11
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 16,
                            "start": 5,
                            "end": 11
                        }
                    ],
                    "flags": 16,
                    "start": 5,
                    "end": 11
                },
                "flags": 16,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/2/",
                "flags": 96,
                "start": 13,
                "end": 16
            },
            "flags": 16,
            "start": 13,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "a : { b : 1 }/2/;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

a: {
  b: 1;
}
/2/;
```

### Diagnostics

```javascript
✔ No errors
```

