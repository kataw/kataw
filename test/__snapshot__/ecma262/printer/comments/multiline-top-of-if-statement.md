# Kataw parser test case

## Input

`````js
 const x = 0;

  /* istanbul ignore if */ // debug case currently not triggered
  if (true) {
    x;
  }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 6
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
                            "start": 6,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 6,
                        "end": 12
                    }
                ],
                "flags": 16777232,
                "start": 6,
                "end": 12
            },
            "flags": 33554448,
            "start": 0,
            "end": 13
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "start": 13,
                "end": 84
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 86,
                "end": 90
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "start": 93,
                                "end": 99
                            },
                            "flags": 16,
                            "start": 93,
                            "end": 100
                        }
                    ],
                    "flags": 17,
                    "start": 93,
                    "end": 100
                },
                "flags": 16,
                "start": 91,
                "end": 104
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "start": 13,
            "end": 104
        }
    ],
    "isModule": false,
    "source": " const x = 0;\n\n  /* istanbul ignore if */ // debug case currently not triggered\n  if (true) {\n    x;\n  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript

const x = 0;
if (true ) {
    x;
  }
```

### Diagnostics

```javascript
✔ No errors
```

