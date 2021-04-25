# Kataw parser test case

## Input

`````js
(a, foo ? bar : baz) => {}
`````

## Output

### Hybrid CST

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
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 3,
                                "end": 7
                            },
                            "questionToken": {
                                "kind": 22,
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 768,
                                "start": 13,
                                "end": 15
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 768,
                                "start": 15,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 19
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 25,
                "end": 25
            },
            "flags": 128,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "(a, foo ? bar : baz) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 20, end: 23
@{x2716}@ Statement expected - start: 20, end: 23

```

