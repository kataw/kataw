# Kataw parser test case

## Input

`````js
(x, a?b:c)=>0;
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 5,
                                "end": 6
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 7,
                                "end": 8
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 9
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 12,
                "end": 13
            },
            "flags": 16,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(x, a?b:c)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 12

```

