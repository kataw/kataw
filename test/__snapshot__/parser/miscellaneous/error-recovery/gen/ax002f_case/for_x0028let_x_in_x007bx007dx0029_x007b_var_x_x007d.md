# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: a/ case
> :: case: for (let x in {}) { var x; }
## Options

`````js
{}
`````
## Input

`````js
for (let x in {}) { var x; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 0,
                    "end": 8
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 8,
                            "end": 10
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 10
                },
                "flags": 33554448,
                "start": 0,
                "end": 10
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 10,
                "end": 13
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 15,
                    "end": 15
                },
                "flags": 48,
                "start": 13,
                "end": 16
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 19,
                                "end": 23
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 23,
                                        "end": 25
                                    }
                                ],
                                "flags": 16,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 26
                        }
                    ],
                    "flags": 16,
                    "start": 19,
                    "end": 26
                },
                "flags": 16,
                "start": 17,
                "end": 28
            },
            "flags": 80,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "for (let x in {}) { var x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 23, end: 25

```

