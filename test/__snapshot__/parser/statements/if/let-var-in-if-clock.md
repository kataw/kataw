# Kataw parser test case

## Input

`````js
if (x) { if (y) var foo = 1; } let foo = 1;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 80,
                                "start": 8,
                                "end": 11
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "consequent": {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "start": 15,
                                    "end": 19
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 23
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 16,
                                            "start": 19,
                                            "end": 27
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 19,
                                    "end": 27
                                },
                                "flags": 16,
                                "start": 15,
                                "end": 28
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 80,
                            "start": 8,
                            "end": 28
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 28
                },
                "flags": 16,
                "start": 6,
                "end": 30
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 30
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 30,
                "end": 34
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 34,
                            "end": 38
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 40,
                            "end": 42
                        },
                        "flags": 16,
                        "start": 34,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 34,
                "end": 42
            },
            "flags": 33554448,
            "start": 30,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "if (x) { if (y) var foo = 1; } let foo = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 34, end: 38

```

